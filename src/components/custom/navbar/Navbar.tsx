import React from 'react';
import { NavbarProps, StyledAppBarProps } from './navbarHelper';
import { contentSpacing, drawerWidth } from '../../../layouts/authenticatedLayout/authenticatedLayoutHelper';
import SearchbarField from '../textFields/SearchbarField';
import RightSection from './section/RightSection';
import BoxComp from '../../base/box/Box';
import IconButtonComp from '../../base/iconButton/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar as MuiAppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'mobileScreenActive',
})<StyledAppBarProps>(({ theme, open, mobileScreenActive }) => ({
  background: theme.header.background,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: mobileScreenActive ? '100%' : `calc(100% - ${drawerWidth}px)`,
    marginLeft: mobileScreenActive ? '0' : `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledToolbar = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== 'mobileScreenActive',
})<{ mobileScreenActive: boolean }>(({ theme, mobileScreenActive }) => ({
  background: theme.header.background,
  paddingLeft: `${theme.spacing(mobileScreenActive ? contentSpacing.mobile.left : contentSpacing.web.left)} !important`,
  paddingRight: `${theme.spacing(mobileScreenActive ? contentSpacing.mobile.right : contentSpacing.web.right)} !important`,
}));

const Navbar: React.FC<NavbarProps> = ({ open, handleDrawerOpen, mobileScreenActive = false }) => {
  return (
    <StyledAppBar position="fixed" open={open} mobileScreenActive={mobileScreenActive}>
      <StyledToolbar mobileScreenActive={mobileScreenActive}>
        <BoxComp
          display={'flex'}
          flexDirection={'row'}
          width={'100%'}
          {...(mobileScreenActive ? { paddingX: '15px' } : {})}
        >
          {!open && (
            <IconButtonComp aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButtonComp>
          )}

          <SearchbarField />

          <BoxComp sx={{ flexGrow: 1 }} />

          <RightSection />
        </BoxComp>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
