import React from 'react';
import { useDispatch } from 'react-redux';
import { AuthState, setAuthFields } from './redux/slices/authSlice';
import { localStorageGetItem } from './utils/methods/localStorage';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import useThemeContext from './hooks/useThemeContext';
import createTheme from './theme/index';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const dispatch = useDispatch();
  const userFields: AuthState | null = localStorageGetItem('userFields');
  const { theme } = useThemeContext();

  const [sessionControlCompleted, setSessionControlCompleted] = React.useState(false);

  React.useEffect(() => {
    dispatch(
      setAuthFields({
        userType: userFields?.userType ?? 'guest',
        token: userFields?.token ?? null,
        name: userFields?.name ?? null,
        surname: userFields?.surname ?? null,
        phone: userFields?.phone ?? null,
        email: userFields?.email ?? null,
      }),
    );

    setSessionControlCompleted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userFields]);

  return sessionControlCompleted ? (
    <MuiThemeProvider theme={createTheme(theme)}>
      <EmotionThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <ToastContainer />
        <RouterProvider router={router} />
      </EmotionThemeProvider>
    </MuiThemeProvider>
  ) : null;
}

export default App;
