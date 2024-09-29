import { TableCellProps } from '@mui/material/TableCell';

export interface TableCellCompProps extends TableCellProps {
  isTranslation?: boolean;
  rowIndex?: number;
}

export const tableCellCompDefaultProps: TableCellCompProps = {
  isTranslation: false,
  rowIndex: 0,
};
