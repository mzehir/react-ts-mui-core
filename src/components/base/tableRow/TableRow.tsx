import React from 'react';
import TableRow from '@mui/material/TableRow';
import { TableRowCompProps, tableRowCompDefaultProps } from './tableRowHelper';

const TableRowComp: React.FC<TableRowCompProps> = (props) => {
  const { children, ...tableRowProps } = { ...tableRowCompDefaultProps, ...props };

  return <TableRow {...tableRowProps}>{children}</TableRow>;
};

export default TableRowComp;
