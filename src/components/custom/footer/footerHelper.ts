import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface FooterProps extends MuiAppBarProps {
  open?: boolean;
  mobileScreenActive?: boolean;
}

export interface StyledAppBarProps extends MuiAppBarProps {
  open?: boolean;
  mobileScreenActive?: boolean;
}
