import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Toastify } from '../../../../components/other/toastify/Toastify';
import { ToastCompProps } from '../../../../components/other/toastify/toastifyHelper';
import { employeesRequestDto } from './introductionRequestDto';
import { employeesResponseDto } from './introductionResponseDto';

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
        // Base URL oluştur
        let url = `/employees?maxResultCount=${maxResultCount}&skipCount=${skipCount}`;

        if (filterParams && filterParams.length > 0) {
          for (let i = 0; i < filterParams.length; i++) {
            const filterParam = filterParams[i];
            const { filterType, filterKey, filterValue } = filterParam;
            if (
              filterType === 'equals' ||
              filterType === 'notEqual' ||
              filterType === 'contains' ||
              filterType === 'notContains' ||
              filterType === 'startsWith' ||
              filterType === 'endsWith'
            ) {
              url += `&${filterKey}=${encodeURIComponent(
                JSON.stringify({
                  type: filterType,
                  value: filterValue,
                }),
              )}`;
            } else if (
              filterType === 'lessThan' ||
              filterType === 'lessThanOrEqual' ||
              filterType === 'greaterThan' ||
              filterType === 'greaterThanOrEqual'
            ) {
              url += `&${filterKey}=${encodeURIComponent(
                JSON.stringify({
                  type: filterType,
                  value: filterValue,
                }),
              )}`;
            } else if (filterType === 'inRange') {
              url += `&${filterKey}=${encodeURIComponent(
                JSON.stringify({
                  type: filterType,
                  min: filterValue.min,
                  max: filterValue.max,
                }),
              )}`;
            } else if (filterType === 'blank' || filterType === 'notBlank') {
              url += `&${filterKey}=${encodeURIComponent(
                JSON.stringify({
                  type: filterType,
                }),
              )}`;
            }
          }
        }

        return url;
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

export const { useGetEmployeesQuery, useLazyGetEmployeesQuery } = introductionApi;
