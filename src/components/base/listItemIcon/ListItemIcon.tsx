import React from 'react';
import { listItemIconCompDefaultProps, ListItemIconCompProps } from './listItemIconHelper';
import ListItemIcon from '@mui/material/ListItemIcon';

const ListItemIconComp: React.FC<ListItemIconCompProps> = (props) => {
  const { children, ...ListItemIconProps } = { ...listItemIconCompDefaultProps, ...props };

  return <ListItemIcon {...ListItemIconProps}>{children}</ListItemIcon>;
};

export default ListItemIconComp;
