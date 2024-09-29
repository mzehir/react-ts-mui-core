import React from 'react';
import { listCompDefaultProps, ListCompProps } from './listHelper';
import List from '@mui/material/List';

const ListComp: React.FC<ListCompProps> = (props) => {
  const { children, ...listProps } = { ...listCompDefaultProps, ...props };

  return <List {...listProps}>{children}</List>;
};

export default ListComp;
