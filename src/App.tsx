// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setAuthFields, setAuthFieldsPayload } from './redux/slices/authSlice';
// import { localStorageGetItem } from './utils/methods/localStorage';

// import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
// import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
// import CssBaseline from '@mui/material/CssBaseline';
// import useThemeContext from './hooks/useThemeContext';
// import createTheme from './theme/index';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './router/Router';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// function App() {
//   const dispatch = useDispatch();
//   const userFields: setAuthFieldsPayload | null = localStorageGetItem('userFields');
//   const { theme } = useThemeContext();

//   const [sessionControlCompleted, setSessionControlCompleted] = React.useState(false);

//   React.useEffect(() => {
//     if (userFields?.token) {
//       dispatch(
//         setAuthFields({
//           name: userFields?.name,
//           surname: userFields?.surname,
//           phone: userFields?.phone,
//           token: userFields?.token,
//         }),
//       );

//       setSessionControlCompleted(true);
//     } else {
//       setSessionControlCompleted(true);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [userFields]);

//   return sessionControlCompleted ? (
//     <MuiThemeProvider theme={createTheme(theme)}>
//       <EmotionThemeProvider theme={createTheme(theme)}>
//         <CssBaseline />
//         <ToastContainer />
//         <RouterProvider router={router} />
//       </EmotionThemeProvider>
//     </MuiThemeProvider>
//   ) : null;
// }

// export default App;

import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuthFields, setAuthFieldsPayload } from './redux/slices/authSlice';
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
  const userFields: setAuthFieldsPayload | null = localStorageGetItem('userFields');
  const { theme } = useThemeContext();

  const [sessionControlCompleted, setSessionControlCompleted] = React.useState(false);

  React.useEffect(() => {
    if (userFields?.token) {
      dispatch(
        setAuthFields({
          userType: userFields?.userType,
          token: userFields?.token,
          name: userFields?.name,
          surname: userFields?.surname,
          phone: userFields?.phone,
          email: userFields?.email,
        }),
      );

      setSessionControlCompleted(true);
    } else {
      setSessionControlCompleted(true);
    }
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
