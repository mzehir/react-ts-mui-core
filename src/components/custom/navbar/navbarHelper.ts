import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface NavbarProps extends MuiAppBarProps {
  open?: boolean;
  handleDrawerOpen: () => void;
  drawerWidth: number;
  mobileScreenActive?: boolean;
}

export interface StyledAppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
  mobileScreenActive?: boolean;
}
