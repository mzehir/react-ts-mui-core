import React from 'react';
import { contentSpacing, drawerWidth } from './defaultLayoutHelper';
import BoxComp from '../components/base/box/Box';
import CustomAppBar from '../components/custom/navbar/Navbar';
import Sidebar from '../components/custom/sidebar/Sidebar';
import Footer from '../components/custom/footer/Footer';
import GlobalStyles from '../GlobalStyle';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'mobileScreenActive' })<{
  open: boolean;
  mobileScreenActive: boolean;
}>(({ theme, open, mobileScreenActive }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(mobileScreenActive ? contentSpacing.mobile.top : contentSpacing.web.top),
  paddingBottom: theme.spacing(mobileScreenActive ? contentSpacing.mobile.bottom : contentSpacing.web.bottom),
  paddingLeft: theme.spacing(mobileScreenActive ? contentSpacing.mobile.left : contentSpacing.web.left),
  paddingRight: theme.spacing(mobileScreenActive ? contentSpacing.mobile.right : contentSpacing.web.right),

  overflowX: 'auto',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(mobileScreenActive ? {} : { marginLeft: `-${drawerWidth}px` }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...(mobileScreenActive ? {} : { marginLeft: 0 }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileScreenActive, setMobileScreenActive] = React.useState(false);

  React.useEffect(() => {
    setMobileScreenActive(isMobile);
  }, [isMobile]);

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BoxComp display={'flex'} minHeight={'100vh'} height={'100vh'} maxHeight={'100vh'}>
      <CssBaseline />
      <GlobalStyles />
      <CustomAppBar open={open} handleDrawerOpen={handleDrawerOpen} mobileScreenActive={mobileScreenActive} />
      <Sidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
        mobileScreenActive={mobileScreenActive}
      />
      <Main open={open} mobileScreenActive={mobileScreenActive}>
        <DrawerHeader />
        {children}
        <DrawerHeader />
      </Main>
      <Footer open={open} mobileScreenActive={mobileScreenActive} />
    </BoxComp>
  );
}
