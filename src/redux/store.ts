import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './slices/apiSlice';
import authReducer from './slices/authSlice';

//! 001DeletedStart
import { jsonPlaceholderApi } from './slices/services/introduction/jsonPlaceholder/jsonPlaceholderSlice';
import { introductionApi } from './slices/services/introduction/custom/introductionApiSlices';
import counterReducer from './slices/introductionSlices/counterSlice';
//! 001DeletedFinish

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,

    //! 002DeletedStart
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    [introductionApi.reducerPath]: introductionApi.reducer,
    counter: counterReducer,
    //! 002DeletedFinish
  },

  //! 003DeletedStart
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, jsonPlaceholderApi.middleware, introductionApi.middleware),
  //! 003DeletedFinish

  //! 004ActivatedStart
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  //! 004ActivatedFinish
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
