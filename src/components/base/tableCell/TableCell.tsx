import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import TableCell from '@mui/material/TableCell';
import { TableCellCompProps, tableCellCompDefaultProps } from './tableCellHelper';

const TableCellComp: React.FC<TableCellCompProps> = (props) => {
  const { children, isTranslation, rowIndex, ...tableCellProps } = { ...tableCellCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  if (rowIndex === -1) {
    //
  }

  return <TableCell {...tableCellProps}>{isTranslation ? childrenTranslate(children, translate) : children}</TableCell>;
};

export default TableCellComp;
