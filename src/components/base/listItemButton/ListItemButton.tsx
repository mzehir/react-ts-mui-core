import React from 'react';
import { listItemButtonCompDefaultProps, ListItemButtonCompProps } from './listItemButtonHelper';
import ListItemButton from '@mui/material/ListItemButton';

const ListItemButtonComp: React.FC<ListItemButtonCompProps> = (props) => {
  const { children, ...ListItemButtonProps } = { ...listItemButtonCompDefaultProps, ...props };

  return <ListItemButton {...ListItemButtonProps}>{children}</ListItemButton>;
};

export default ListItemButtonComp;
