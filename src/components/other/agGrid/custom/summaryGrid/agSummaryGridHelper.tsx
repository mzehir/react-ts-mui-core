import { ColumnType } from '../../helper/column/columnType';
import { agSummaryGridPrepareColumn } from './agSummaryGridMethods';

export const prepareColumns = (
  columns: ColumnType[],
  listGridColumns: ColumnType[],
  translate: (key: string) => string,
): ColumnType[] => {
  const baseColumns = columns.map((column: ColumnType) => {
    return {
      ...agSummaryGridPrepareColumn(column, listGridColumns, translate),
    };
  });

  return baseColumns;
};
