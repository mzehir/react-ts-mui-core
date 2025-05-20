import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Toastify } from '../../../../../components/other/toastify/Toastify';
import { ToastCompProps } from '../../../../../components/other/toastify/toastifyHelper';
import { employeesReportRequestDto, employeesRequestDto } from './introductionRequestDto';
import { employeesReportResponseDto, employeesResponseDto } from './introductionResponseDto';
import { apiSliceGetListMethodRequestFilterPrepare } from '../../../apiSliceHelper/getMethodsAndTypes/getList/getListHelperMethods';
import { apiSliceGetReportMethodRequestFilterPrepare } from '../../../apiSliceHelper/getMethodsAndTypes/getReport/getReportHelperMethods';

const baseUrl = 'http://localhost:3000/api';
const defaultContentType = 'application/json; charset=UTF-8';

interface EndpointMessage {
  successMessage?: string;
  errorMessage?: string;
}

interface ExtraOptions {
  headersContentType?: 'none' | 'custom';
  messages?: EndpointMessage;
}

const runToast = (props: ToastCompProps) => {
  Toastify({
    ...props,
    isTranslation: true,
    theme: 'colored',
  });
};

const baseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: ExtraOptions = {}) => {
  try {
    const baseQueryConfig = fetchBaseQuery({
      baseUrl,
      prepareHeaders: (headers) => {
        if (extraOptions.headersContentType !== 'none') {
          headers.set('Content-Type', defaultContentType);
        }
        return headers;
      },
    });

    const result = await baseQueryConfig(args, api, extraOptions);
    if (extraOptions?.messages?.successMessage) {
      runToast({ type: 'success', message: extraOptions.messages.successMessage });
    }
    return result;
  } catch (error) {
    if (extraOptions?.messages?.errorMessage) {
      runToast({ type: 'error', message: extraOptions.messages.errorMessage });
    }
    return { error: { status: 'FETCH_ERROR', error: error } };
  }
};

export const introductionApi = createApi({
  reducerPath: 'introductionApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getEmployees: builder.query<employeesResponseDto, employeesRequestDto>({
      query: ({ maxResultCount, skipCount, filterParams }) => {
        const method = 'GET';
        let url = `/employees?maxResultCount=${maxResultCount}&skipCount=${skipCount}`;

        if (filterParams && filterParams.length > 0) {
          url = apiSliceGetListMethodRequestFilterPrepare(url, filterParams);
        }

        return {
          method: method,
          url: url,
        };
      },
      extraOptions: {
        headersContentType: 'none',
        messages: {
          successMessage: 'introduction.fetchPostsByIdSuccess',
          errorMessage: 'introduction.fetchPostsByIdFailure',
        },
      },
    }),
    getEmployeesReport: builder.query<employeesReportResponseDto, employeesReportRequestDto>({
      query: ({ filterParams }) => {
        const method = 'GET';
        let url = `/employeesReport`;

        if (filterParams && filterParams.length > 0) {
          url = apiSliceGetReportMethodRequestFilterPrepare(url, filterParams);
        }

        return {
          method: method,
          url: url,
        };
      },
      extraOptions: {
        headersContentType: 'none',
        messages: {
          successMessage: 'introduction.fetchPostsByIdSuccess',
          errorMessage: 'introduction.fetchPostsByIdFailure',
        },
      },
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useLazyGetEmployeesQuery,
  useGetEmployeesReportQuery,
  useLazyGetEmployeesReportQuery,
} = introductionApi;
