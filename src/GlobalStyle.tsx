import { Global, css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html,
        body,
        #root {
          height: 100%;
          overflow-x: hidden;
        }

        body {
          background: ${theme.palette.background.default};
          margin: 0;
        }

        .MuiCardHeader-action .MuiIconButton-root {
          padding: 4px;
          width: 28px;
          height: 28px;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
          -webkit-transition-delay: 9999s;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: ${theme.palette.background.default};
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb {
          background: #aaa;
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}
    />
  );
};

export default GlobalStyles;
