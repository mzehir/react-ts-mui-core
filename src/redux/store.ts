import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './slices/apiSlice';
import authReducer from './slices/authSlice';

//! 001 Start: Imports that must be deleted to start a project
import { jsonPlaceholderApi } from './slices/services/introduction/jsonPlaceholder/jsonPlaceholderSlice';
import { introductionApi } from './slices/services/introduction/custom/introductionApiSlices';
import counterReducer from './slices/introductionSlices/counterSlice';
//! 001 Finish: Imports that must be deleted to start a project

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,

    //! 002 Start: Rows to be deleted to start a project
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    [introductionApi.reducerPath]: introductionApi.reducer,
    counter: counterReducer,
    //! 002 Finish: Rows to be deleted to start a project
  },

  //! 003 Start: Definitions that must be deleted to start a project
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, jsonPlaceholderApi.middleware, introductionApi.middleware),
  //! 003 Finish: Definitions that must be deleted to start a project

  //! 004 Start: Definitions that must be activated to start a project
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  //! 004 Finish: Definitions that must be activated to start a project
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
