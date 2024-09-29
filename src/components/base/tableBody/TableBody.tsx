import React from 'react';
import TableBody from '@mui/material/TableBody';
import { TableBodyCompProps, tableBodyCompDefaultProps } from './tableBodyHelper';

const TableBodyComp: React.FC<TableBodyCompProps> = (props) => {
  const { children, ...tableBodyProps } = { ...tableBodyCompDefaultProps, ...props };

  return <TableBody {...tableBodyProps}>{children}</TableBody>;
};

export default TableBodyComp;
