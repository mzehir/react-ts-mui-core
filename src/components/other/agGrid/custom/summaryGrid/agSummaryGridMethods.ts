import { ValueFormatterParams } from 'ag-grid-community';
import { ColumnType } from '../../helper/column/columnType';

export const agSummaryGridPrepareColumn = (
  column: ColumnType,
  listGridColumns: ColumnType[],
  translate: (value: string) => string,
): ColumnType => {
  const result: ColumnType = {
    field: column.field,
    cellDataType: column.cellDataType ?? 'text',
    hide: column.hide,
    editable: false,
    sortable: false,
    width: column.width,
    headerName: column.isHeaderCellTranslation === false ? column.headerName : translate(column.headerName as string),
    headerTooltip:
      column.isHeaderCellTranslation === false ? column.headerName : translate(column.headerName as string),

    ...(!column?.customValueFormatter
      ? {
          valueFormatter: (params: ValueFormatterParams) => {
            if (params.value) {
              const matchedLisGridColumn = listGridColumns.find(
                (listGridColumn) => listGridColumn.field === params.data.columnName,
              );

              if (column.field === 'columnName') {
                return matchedLisGridColumn?.headerName ?? params.value;
              }

              if (
                column.field === 'minValue' ||
                column.field === 'maxValue' ||
                column.field === 'averageValue' ||
                column.field === 'sumValue'
              ) {
                const _valueFormatted =
                  typeof matchedLisGridColumn?.valueFormatter === 'function'
                    ? matchedLisGridColumn.valueFormatter(params)
                    : params.value;

                return _valueFormatted;
              }

              if (column.field === 'rowCount') {
                return params.value;
              }
            } else {
              return params.value;
            }
          },
        }
      : {}),

    ...(column.cellRenderer ? { cellRenderer: column.cellRenderer } : {}),
  };

  return result;
};
