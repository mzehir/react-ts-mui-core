import React from 'react';
import Table from '@mui/material/Table';
import { TableCompProps, tableCompDefaultProps } from './tableHelper';

const TableComp: React.FC<TableCompProps> = (props) => {
  const { children, ...tableProps } = { ...tableCompDefaultProps, ...props };

  return <Table {...tableProps}>{children}</Table>;
};

export default TableComp;
