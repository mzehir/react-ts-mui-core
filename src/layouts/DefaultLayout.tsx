import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CustomAppBar from '../components/custom/navbar/Navbar';
import Sidebar from '../components/custom/sidebar/Sidebar';
import BoxComp from '../components/base/box/Box';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'mobileScreenActive' })<{
  open: boolean;
  mobileScreenActive: boolean;
}>(({ theme, open, mobileScreenActive }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(mobileScreenActive ? 6 : 10),
  paddingBottom: theme.spacing(mobileScreenActive ? 6 : 10),
  paddingLeft: theme.spacing(mobileScreenActive ? 2 : 10),
  paddingRight: theme.spacing(mobileScreenActive ? 2 : 10),

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
    <BoxComp display={'flex'} minHeight={'100%'}>
      <CssBaseline />
      <CustomAppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        drawerWidth={drawerWidth}
        mobileScreenActive={mobileScreenActive}
      />
      <Sidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
        mobileScreenActive={mobileScreenActive}
      />
      <Main open={open} mobileScreenActive={mobileScreenActive}>
        <DrawerHeader />
        {children}
      </Main>
    </BoxComp>
  );
}
