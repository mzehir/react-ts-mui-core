import { ValueFormatterParams } from 'ag-grid-community';
import AgGridRadioCustomFilterComp from '../../custom/agGrid/components/AgGridRadioCustomFilter';
import { AgGridColDefType } from '../../custom/agGrid/types/agGridColDefType';
import { AgGridColumnFilterType, AgGridFilterType } from '../../custom/agGrid/types/agGridColumnFilterType';
import { formatCurrency, formatNumber } from '../../../utils/methods/format';
import { formatPhoneNumber } from '../../../utils/locale/phoneFormats';

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

  const customValueFormatter = column?.customValueFormatter;

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

    ...(customValueFormatter
      ? {
          valueFormatter: (params: ValueFormatterParams) => {
            if (params.value) {
              const valueFormatterType = column?.valueFormatterType ?? 'stringFormatter';
              const formatterValue = customValueFormatter(params);

              if (valueFormatterType === 'stringFormatter') {
                if (column.isBodyCellTranslation === false) {
                  return formatterValue;
                } else {
                  const transFormatterValue = translate(formatterValue as string);
                  return transFormatterValue;
                }
              } else if (valueFormatterType === 'dateFormatter') {
                //
              } else if (valueFormatterType === 'phoneFormatter') {
                //
              } else if (valueFormatterType === 'booleanFormatter') {
                //
              } else if (valueFormatterType === 'currencyFormatter') {
                //
              } else if (valueFormatterType === 'numberFormatter') {
                //
              } else if (valueFormatterType === 'percentFormatter') {
                //
              }
            } else {
              return params.value;
            }
          },
        }
      : {}),

    ...(!customValueFormatter && column?.valueFormatterType
      ? {
          valueFormatter: (params: ValueFormatterParams) => {
            if (params.value) {
              const valueFormatterType = column?.valueFormatterType ?? 'stringFormatter';

              if (valueFormatterType === 'stringFormatter') {
                //
              } else if (valueFormatterType === 'dateFormatter') {
                //
              } else if (valueFormatterType === 'phoneFormatter') {
                const formattedValue = formatPhoneNumber(params.value as string);
                return formattedValue;
              } else if (valueFormatterType === 'booleanFormatter') {
                //
              } else if (valueFormatterType === 'currencyFormatter') {
                const isPrefix = column.extraPropsForValueFormatterType?.currencyFormatterExtraProps?.isPrefix ?? true;
                const customPrefix = column.extraPropsForValueFormatterType?.currencyFormatterExtraProps?.customPrefix;
                const formattedValue = formatCurrency(params.value as number, isPrefix, customPrefix);
                return formattedValue;
              } else if (valueFormatterType === 'numberFormatter') {
                const formattedValue = formatNumber(params.value as number);
                return formattedValue;
              } else if (valueFormatterType === 'percentFormatter') {
                //
              }
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
