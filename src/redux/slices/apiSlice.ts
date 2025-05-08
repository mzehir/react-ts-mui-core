import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { Toastify } from '../../components/other/toastify/Toastify';
import { ToastCompProps } from '../../components/other/toastify/toastifyHelper';
// import { ApiErros } from '../../../utils/enums/apiErrors';
import { usersEndpoint } from './services/users/usersEndpoint';

const baseUrl = 'http://185.210.93.207:8080/admin';
const defaultContentType = 'application/json; charset=UTF-8';

interface EndpointMessage {
  successMessage?: string;
  errorMessage?: string;
}

interface ExtraOptions {
  headersContentType?: 'none' | 'custom';
  messages?: EndpointMessage;
}

interface ApiResponseDto<T> {
  timestamp: string;
  success: boolean;
  data: T;
  message: string;
  errorCode: number;
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
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }

        if (extraOptions.headersContentType !== 'none') {
          headers.set('Content-Type', defaultContentType);
        }
        return headers;
      },
    });

    const result = await baseQueryConfig(args, api, extraOptions);
    if (result.error) {
      //@ts-expect-error daha sonra tip düzeltmeleri yapılacak.
      const errorCode: number = result?.error?.data?.errorCode;

      //@ts-expect-error daha sonra tip düzeltmeleri yapılacak.
      runToast({ type: 'error', message: ApiErros[errorCode]?.message || 'Error' }); // i18n yapılandırması eklenecek.
      if (extraOptions?.messages?.errorMessage) {
        runToast({ type: 'error', message: extraOptions.messages.errorMessage || 'Error' }); // i18n yapılandırması eklenecek.
      }
      return result;
    }

    const apiResponse = result.data as ApiResponseDto<unknown>;
    if (!apiResponse.success) {
      const errorCode: number = apiResponse.errorCode;

      //@ts-expect-error daha sonra tip düzeltmeleri yapılacak.
      runToast({ type: 'error', message: ApiErros[errorCode]?.message || 'Unknown Error' }); // i18n yapılandırması eklenecek
      if (extraOptions?.messages?.errorMessage) {
        runToast({ type: 'error', message: extraOptions.messages.errorMessage || 'Error' }); // i18n yapılandırması eklenecek.
      }

      return {
        error: {
          status: apiResponse.errorCode || 'UNKNOWN_ERROR',
          data: apiResponse.message || 'Unknown Error',
        },
      };
    }

    if (extraOptions?.messages?.successMessage) {
      runToast({ type: 'success', message: extraOptions.messages.successMessage });
    }
    return {
      data: apiResponse.data,
    };
  } catch (error) {
    runToast({ type: 'error', message: 'Bilinmeyen bir hata oluştu!' }); // i18n yapılandırması eklenecek
    if (extraOptions?.messages?.errorMessage) {
      runToast({ type: 'error', message: extraOptions.messages.errorMessage || 'Error' }); // i18n yapılandırması eklenecek.
    }
    return { error: { status: 'FETCH_ERROR', error: error } };
  }
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    ...usersEndpoint(builder),
  }),
});

export const {
  //! users endpoint
  //! users endpoint
  useSignInMutation,
  useVerifySignInMutation,
} = api;
