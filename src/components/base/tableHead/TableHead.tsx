import React from 'react';
import TableHead from '@mui/material/TableHead';
import { TableHeadCompProps, tableHeadCompDefaultProps } from './tableHeadHelper';

const TableHeadComp: React.FC<TableHeadCompProps> = (props) => {
  const { children, ...tableHeadProps } = { ...tableHeadCompDefaultProps, ...props };

  return <TableHead {...tableHeadProps}>{children}</TableHead>;
};

export default TableHeadComp;
