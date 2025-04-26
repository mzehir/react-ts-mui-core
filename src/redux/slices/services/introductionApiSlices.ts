import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Toastify } from '../../../components/custom/toastify/Toastify';
import { ToastCompProps } from '../../../components/custom/toastify/toastifyHelper';
import { employeesRequestDto, employeesResponseDto } from './introductionApiDto';

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
      query: ({ maxResultCount, skipCount, name, gender }) => {
        // Base URL oluştur
        let url = `/employees?maxResultCount=${maxResultCount}&skipCount=${skipCount}`;

        // Eğer name filtresi varsa, JSON string olarak ekle
        if (name) {
          url += `&name=${encodeURIComponent(JSON.stringify(name))}`;
        }

        // Eğer gender filtresi varsa, JSON string olarak ekle
        if (gender) {
          url += `&gender=${encodeURIComponent(JSON.stringify(gender))}`;
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
