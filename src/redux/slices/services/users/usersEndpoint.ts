import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { SignInResponseDto, VerifySignInResponseDto } from './requestDto';
import { setAuthFields } from '../../authSlice';

export const usersEndpoint = (builder: EndpointBuilder<BaseQueryFn, string, 'api'>) => ({
  signIn: builder.mutation<SignInResponseDto, { phone: string; password: string; callback: (token: string) => void }>({
    query: (credentials) => ({
      url: '/auth/signIn',
      method: 'POST',
      body: credentials,
    }),
    async onQueryStarted(_args, { queryFulfilled }) {
      try {
        const { data } = await queryFulfilled;

        if (data.token) {
          _args.callback(data.token);
        }
      } catch (error) {
        console.error('signIn failed:', error);
      }
    },
  }),

  verifySignIn: builder.mutation<VerifySignInResponseDto, { code: string; token: string; callback: () => void }>({
    query: (credentials) => ({
      url: '/auth/verifySignIn',
      method: 'POST',
      body: credentials,
    }),
    async onQueryStarted(_args, { dispatch, queryFulfilled }) {
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
          _args.callback();
        }
      } catch (error) {
        console.error('verifyLogin failed:', error);
      }
    },
  }),
});
