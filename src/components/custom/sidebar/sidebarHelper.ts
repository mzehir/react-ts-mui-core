export interface SidebarHeaderProps {
  handleDrawerClose: () => void;
}

export interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
  drawerWidth: number;
  mobileScreenActive?: boolean;
}
