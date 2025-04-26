import { ValueFormatterParams } from 'ag-grid-community';
import AgGridRadioCustomFilterComp from '../../custom/agGrid/components/AgGridRadioCustomFilter';
import { AgGridColDefType } from '../../custom/agGrid/types/agGridColDefType';
import { AgGridColumnFilterType, AgGridFilterType } from '../../custom/agGrid/types/agGridColumnFilterType';

export const fullFeatureAgGridPropsPrepareColumn = (
  column: AgGridColDefType,
  translate: (value: string) => string,
): AgGridColDefType => {
  const _customFilter: AgGridColumnFilterType | undefined | null = column.customFilter;
  let _filter: AgGridFilterType | undefined | null = undefined;

  if (_customFilter) {
    if (_customFilter.componentType === 'agTextColumnFilter') {
      _filter = 'agTextColumnFilter';
    } else if (_customFilter.componentType === 'agNumberColumnFilter') {
      _filter = 'agNumberColumnFilter';
    } else if (_customFilter.componentType === 'agDateColumnFilter') {
      _filter = 'agDateColumnFilter';
    } else if (_customFilter.componentType === 'agRadioCustomFilter') {
      _filter = AgGridRadioCustomFilterComp;
    }
  }

  const valueFormatter = column?.valueFormatter;

  const result: AgGridColDefType = {
    field: column.field,
    cellDataType: column.cellDataType ?? 'text',
    hide: column.hide,
    editable: column.editable ?? false,
    sortable: column.sortable ?? false,
    width: column.width,
    headerName: column.isHeaderCellTranslation === false ? column.headerName : translate(column.headerName as string),
    headerTooltip:
      column.isHeaderCellTranslation === false ? column.headerName : translate(column.headerName as string),

    ...(typeof valueFormatter === 'function'
      ? {
          valueFormatter: (params: ValueFormatterParams) => {
            if (params.value) {
              const customValueFormatterText = valueFormatter(params);
              const transCustomValueFormatterText = translate(customValueFormatterText);
              return column.isBodyCellTranslation === false ? customValueFormatterText : transCustomValueFormatterText;
            } else {
              return params.value;
            }
          },
        }
      : {}),

    ...(_filter !== undefined && _filter !== null ? { filter: _filter } : {}),
    ...(_customFilter !== undefined && _customFilter !== null ? { filterParams: _customFilter.componentProps } : {}),
  };

  return result;
};
