import React from 'react';
import { NavbarProps, StyledAppBarProps } from './navbarHelper';
import SearchbarField from '../textFields/SearchbarField';
import RightSection from './section/RightSection';
import BoxComp from '../../base/box/Box';
import IconButtonComp from '../../base/iconButton/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar as MuiAppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth' && prop !== 'mobileScreenActive',
})<StyledAppBarProps>(({ theme, open, drawerWidth, mobileScreenActive }) => ({
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

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  background: theme.header.background,
}));

const Navbar: React.FC<NavbarProps> = ({ open, handleDrawerOpen, drawerWidth, mobileScreenActive = false }) => {
  return (
    <StyledAppBar position="fixed" open={open} drawerWidth={drawerWidth} mobileScreenActive={mobileScreenActive}>
      <StyledToolbar>
        <IconButtonComp
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButtonComp>

        <SearchbarField />

        <BoxComp sx={{ flexGrow: 1 }} />

        <RightSection />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
