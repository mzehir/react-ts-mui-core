import React from 'react';
import { SidebarProps } from './sidebarHelper';
import SidebarHeader from './section/SidebarHeader';
import SidebarBody from './section/SidebarBody';
import SidebarFooter from './section/SidebarFooter';
import DrawerComp from '../../base/drawer/Drawer';
import DividerComp from '../../base/divider/Divider';

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerClose, drawerWidth, mobileScreenActive = false }) => {
  return (
    <DrawerComp
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      anchor="left"
      open={open}
      {...(mobileScreenActive ? { variant: 'temporary' } : { variant: 'persistent' })}
      {...(mobileScreenActive ? { onClose: handleDrawerClose } : {})}
    >
      <SidebarHeader handleDrawerClose={handleDrawerClose} />
      <DividerComp />
      <SidebarBody />
      <DividerComp />
      <SidebarFooter />
    </DrawerComp>
  );
};

export default Sidebar;
