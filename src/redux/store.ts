import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './slices/apiSlice';
import authReducer from './slices/authSlice';
// introduction
import { jsonPlaceholderApi } from './slices/services/introduction/jsonPlaceholder/jsonPlaceholderSlice';
import { introductionApi } from './slices/services/introduction/custom/introductionApiSlices';
import counterReducer from './slices/introductionSlices/counterSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    // introduction
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    [introductionApi.reducerPath]: introductionApi.reducer,
    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, jsonPlaceholderApi.middleware, introductionApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
