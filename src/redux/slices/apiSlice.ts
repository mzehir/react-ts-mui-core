import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { ApiSliceExtraOptions, ApiSliceResponseDto } from './apiSliceHelper/defaultTypes';
import { apiSlicesBaseUrl, apiSlicesDefaultContentType } from './apiSliceHelper/defaultConstant';
import { apiSliceRunToast } from './apiSliceHelper/defaultMethods';
import { ApiErros } from '../../utils/enums/apiErrors';
import { usersEndpoint } from './services/users/usersEndpoint';

const baseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: ApiSliceExtraOptions = {}) => {
  try {
    const baseQueryConfig = fetchBaseQuery({
      baseUrl: apiSlicesBaseUrl,
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }

        if (extraOptions.headersContentType !== 'none') {
          headers.set('Content-Type', apiSlicesDefaultContentType);
        }
        return headers;
      },
    });

    const result = await baseQueryConfig(args, api, extraOptions);
    if (result.error) {
      //@ts-expect-error daha sonra tip düzeltmeleri yapılacak.
      const errorCode: number = result?.error?.data?.errorCode;

      //@ts-expect-error daha sonra tip düzeltmeleri yapılacak.
      apiSliceRunToast({ type: 'error', message: ApiErros[errorCode]?.message || 'Error' }); // i18n yapılandırması eklenecek.
      if (extraOptions?.messages?.errorMessage) {
        apiSliceRunToast({ type: 'error', message: extraOptions.messages.errorMessage || 'Error' }); // i18n yapılandırması eklenecek.
      }
      return result;
    }

    const apiResponse = result.data as ApiSliceResponseDto<unknown>;
    if (!apiResponse.success) {
      const errorCode: number = apiResponse.errorCode;

      //@ts-expect-error daha sonra tip düzeltmeleri yapılacak.
      apiSliceRunToast({ type: 'error', message: ApiErros[errorCode]?.message || 'Unknown Error' }); // i18n yapılandırması eklenecek
      if (extraOptions?.messages?.errorMessage) {
        apiSliceRunToast({ type: 'error', message: extraOptions.messages.errorMessage || 'Error' }); // i18n yapılandırması eklenecek.
      }

      return {
        error: {
          status: apiResponse.errorCode || 'UNKNOWN_ERROR',
          data: apiResponse.message || 'Unknown Error',
        },
      };
    }

    if (extraOptions?.messages?.successMessage) {
      apiSliceRunToast({ type: 'success', message: extraOptions.messages.successMessage });
    }
    return {
      data: apiResponse.data,
    };
  } catch (error) {
    apiSliceRunToast({ type: 'error', message: 'Bilinmeyen bir hata oluştu!' }); // i18n yapılandırması eklenecek
    if (extraOptions?.messages?.errorMessage) {
      apiSliceRunToast({ type: 'error', message: extraOptions.messages.errorMessage || 'Error' }); // i18n yapılandırması eklenecek.
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
