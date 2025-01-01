import React from 'react';
import TableFooter from '@mui/material/TableFooter';
import { TableFooterCompProps, tableFooterCompDefaultProps } from './tableFooterHelper';

const TableFooterComp: React.FC<TableFooterCompProps> = (props) => {
  const { children, ...tableFooterProps } = { ...tableFooterCompDefaultProps, ...props };

  return <TableFooter {...tableFooterProps}>{children}</TableFooter>;
};

export default TableFooterComp;
