import React from 'react';
import { FooterProps, StyledAppBarProps } from './footerHelper';
import { contentSpacing, drawerWidth } from '../../../layouts/defaultLayoutHelper';
import BoxComp from '../../base/box/Box';
import TypographyComp from '../../base/typography/Typography';
import { AppBar as MuiAppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'mobileScreenActive',
})<StyledAppBarProps>(({ theme, open, mobileScreenActive }) => ({
  top: 'auto',
  bottom: 0,
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

const Footer: React.FC<FooterProps> = ({ open, mobileScreenActive = false }) => {
  return (
    <StyledAppBar position="fixed" open={open} mobileScreenActive={mobileScreenActive}>
      <StyledToolbar mobileScreenActive={mobileScreenActive}>
        <BoxComp display={'flex'} justifyContent={'flex-end'} width={'100%'}>
          <TypographyComp variant="caption">
            © 2025 Dev Starter. Empowering developers, one project at a time.
          </TypographyComp>
        </BoxComp>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Footer;
