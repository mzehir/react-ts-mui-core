import React from 'react';
import { drawerCompDefaultProps, DrawerCompProps } from './drawerHelper';
import Drawer from '@mui/material/Drawer';

const DrawerComp: React.FC<DrawerCompProps> = (props) => {
  const { children, ...drawerProps } = { ...drawerCompDefaultProps, ...props };

  return <Drawer {...drawerProps}>{children}</Drawer>;
};

export default DrawerComp;
