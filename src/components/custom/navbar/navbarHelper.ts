import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface NavbarProps extends MuiAppBarProps {
  open?: boolean;
  handleDrawerOpen: () => void;
  mobileScreenActive?: boolean;
}

export interface StyledAppBarProps extends MuiAppBarProps {
  open?: boolean;
  mobileScreenActive?: boolean;
}
