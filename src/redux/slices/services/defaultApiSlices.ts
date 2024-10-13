import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';
import { setAuthFields } from '../authSlice';
import { ApiResponseDto, SignInResponseDto, VerifySignInResponseDto } from './defaultApiDto';
import { Toastify } from '../../../components/custom/toastify/Toastify';
import { ToastCompProps } from '../../../components/custom/toastify/toastifyHelper';

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
      runToast({ type: 'error', message: 'Error' });
      return result;
    }

    const apiResponse = result.data as ApiResponseDto<unknown>;
    if (!apiResponse.success) {
      runToast({ type: 'error', message: apiResponse.message || 'Error' });
      return {
        error: {
          status: apiResponse.errorCode || 'UNKNOWN_ERROR',
          data: apiResponse.message,
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
    runToast({ type: 'error', message: 'Error!' });
    console.error(error);
    return { error: { status: 'FETCH_ERROR', error: error } };
  }
};

export const defaultApi = createApi({
  reducerPath: 'defaultApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    //! Auth endpoints
    signIn: builder.mutation<SignInResponseDto, { phone: string; password: string; callback: (token: string) => void }>(
      {
        query: (credentials) => ({
          url: '/login',
          method: 'POST',
          body: credentials,
        }),
        async onQueryStarted(args, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;

            if (data.token) {
              args.callback(data.token);
            }
          } catch (error) {
            console.error('Login failed:', error);
          }
        },
      },
    ),
    verifySignIn: builder.mutation<VerifySignInResponseDto, { code: string; token: string; callback: () => void }>({
      query: (credentials) => ({
        url: '/verifySignIn',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (data.token) {
            const authField = {
              userType: data.useType,
              token: data.token,
              name: data.authendicatedUserResponseDto.username,
              surname: data.authendicatedUserResponseDto.surname,
              phone: data.authendicatedUserResponseDto.phone,
              email: data.authendicatedUserResponseDto.email,
            };

            dispatch(setAuthFields(authField));
            args.callback();
          }
        } catch (error) {
          console.error('verifyLogin failed:', error);
        }
      },
    }),
  }),
});

export const { useSignInMutation, useVerifySignInMutation } = defaultApi;

//* => In GET operations => builder.query
//* => In POST, PUT, DELETE operations => builder.mutation
//* => credentials => Represents the data sent with the API request
//* => args => Represents the parameters passed to the mutation
//* => queryFulfilled => A promise that waits for the completion of a query or mutation request. This promise can be used to determine if the request was successful and to retrieve the result.
