import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { TableContainerCompProps, tableContainerCompDefaultProps } from './tableContainerHelper';

const TableContainerComp: React.FC<TableContainerCompProps> = (props) => {
  const { children, ...tableContainerProps } = { ...tableContainerCompDefaultProps, ...props };

  return <TableContainer {...tableContainerProps}>{children}</TableContainer>;
};

export default TableContainerComp;
