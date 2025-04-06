import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { defaultApi } from './slices/services/defaultApiSlices';
import { jsonPlaceholderApi } from './slices/services/jsonPlaceholderSlices';
import { introductionApi } from './slices/services/introductionApiSlices';
import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [defaultApi.reducerPath]: defaultApi.reducer,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    [introductionApi.reducerPath]: introductionApi.reducer,
    counter: counterReducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(defaultApi.middleware, jsonPlaceholderApi.middleware, introductionApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
