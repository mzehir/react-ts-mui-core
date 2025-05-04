import React from 'react';
import BoxComp from '../../components/base/box/Box';
import GlobalStyle from '../../GlobalStyle';
import { CssBaseline } from '@mui/material';

export default function UnauthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <BoxComp
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="100%"
      maxWidth="520px"
      margin="0 auto"
    >
      <CssBaseline />
      <GlobalStyle />
      {children}
    </BoxComp>
  );
}
