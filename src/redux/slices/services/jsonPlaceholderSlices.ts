import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  createPostRequestDto,
  createPostResponseDto,
  getPostByIdResponseDto,
  getPostsByUserResponseDto,
  getPostsResponseDto,
  patchPostRequestDto,
  patchPostResponseDto,
  updatePostRequestDto,
  updatePostResponseDto,
} from './jsonPlaceholderDto';
import { Toastify } from '../../../components/custom/toastify/Toastify';
import { ToastCompProps } from '../../../components/custom/toastify/toastifyHelper';

const baseUrl = 'https://jsonplaceholder.typicode.com';
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

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    //* 'https://jsonplaceholder.typicode.com/posts/1'
    getPostById: builder.query<getPostByIdResponseDto, number>({
      query: (id) => `/posts/${id}`,
      extraOptions: {
        headersContentType: 'none',
        messages: {
          successMessage: 'introduction.fetchPostsByIdSuccess',
          errorMessage: 'introduction.fetchPostsByIdFailure',
        },
      },
    }),
    //* 'https://jsonplaceholder.typicode.com/posts'
    getPosts: builder.query<getPostsResponseDto[], void>({
      query: () => '/posts',
      extraOptions: {
        headersContentType: 'none',
        messages: {
          successMessage: 'introduction.fetchPostsSuccess',
          errorMessage: 'introduction.fetchPostsFailure',
        },
      },
    }),
    //* 'https://jsonplaceholder.typicode.com/posts'
    createPost: builder.mutation<createPostResponseDto, createPostRequestDto>({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
      extraOptions: {
        messages: {
          successMessage: 'introduction.createPostSuccess',
          errorMessage: 'introduction.createPostFailure',
        },
      },
    }),
    //* 'https://jsonplaceholder.typicode.com/posts/1'
    updatePost: builder.mutation<updatePostResponseDto, updatePostRequestDto>({
      query: ({ id, ...body }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body,
      }),
      extraOptions: {
        messages: {
          successMessage: 'introduction.updatePostByIdSuccess',
          errorMessage: 'introduction.updatePostByIdFailure',
        },
      },
    }),
    //* 'https://jsonplaceholder.typicode.com/posts/1'
    patchPost: builder.mutation<patchPostResponseDto, patchPostRequestDto>({
      query: ({ id, ...body }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        body,
      }),
      extraOptions: {
        messages: {
          successMessage: 'introduction.patchPostSuccess',
          errorMessage: 'introduction.patchPostFailure',
        },
      },
    }),
    //* 'https://jsonplaceholder.typicode.com/posts/1'
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        extraOptions: { headersContentType: 'none' },
      }),
      extraOptions: {
        messages: {
          successMessage: 'introduction.deletePostByIdSuccess',
          errorMessage: 'introduction.deletePostByIdFailure',
        },
      },
    }),
    //* 'https://jsonplaceholder.typicode.com/posts?userId=1'
    getPostsByUser: builder.query<getPostsByUserResponseDto[], number>({
      query: (userId) => `/posts?userId=${userId}`,
      extraOptions: {
        headersContentType: 'none',
        messages: {
          successMessage: 'introduction.fetchPostsByUserSuccess',
          errorMessage: 'introduction.fetchPostsByUserFailure',
        },
      },
    }),
    //? 'https://jsonplaceholder.typicode.com/posts/1/comments'
    getCommentsByPostId: builder.query({
      query: (postId) => `/posts/${postId}/comments`,
      extraOptions: { headersContentType: 'none' },
    }),
  }),
});

export const {
  useGetPostByIdQuery,
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  usePatchPostMutation,
  useDeletePostMutation,
  useGetPostsByUserQuery,
  useGetCommentsByPostIdQuery,
} = jsonPlaceholderApi;
