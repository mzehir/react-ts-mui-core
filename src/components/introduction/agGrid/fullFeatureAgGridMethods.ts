import { AgGridColDef } from '../../custom/agGrid/helper/colDef/agGridColDef';
import { AgGridFilter, AgGridFilterParams } from '../../custom/agGrid/helper/columnFilter/agGridColumnFilter';

export const fullFeatureAgGridPropsPrepareColumn = (
  column: AgGridColDef,
  translate: (value: string) => string,
): AgGridColDef => {
  let _filter: AgGridFilter | null | undefined;
  let _filterParams: AgGridFilterParams | null | undefined;

  if (typeof column.filter === 'boolean' && column.filter === true) {
    if (column.cellDataType === 'text') {
      _filter = 'agTextColumnFilter';
      _filterParams = {
        defaultOption: 'equals',
        filterOptions: ['equals', 'notEqual', 'contains', 'notContains', 'startsWith', 'endsWith', 'blank', 'notBlank'],
        filterPlaceholder: 'Filtrele',
        maxNumConditions: 1,
      };
    } else if (column.cellDataType === 'number') {
      _filter = 'agNumberColumnFilter';
      _filterParams = {
        allowedCharPattern: '\\d\\.',
        defaultOption: 'equals',
        filterOptions: [
          'equals',
          'notEqual',
          'lessThan',
          'lessThanOrEqual',
          'greaterThan',
          'greaterThanOrEqual',
          'inRange',
          'blank',
          'notBlank',
        ],
        filterPlaceholder: 'Filtrele',
        maxNumConditions: 1,
      };
    } else if (column.cellDataType === 'date') {
      //! Burası nasıl yapılandırılmalı
    } else if (column.cellDataType === 'dateString') {
      //! Burası nasıl yapılandırılmalı
    } else if (column.cellDataType === 'boolean') {
      //! Burası nasıl yapılandırılmalı
    } else if (column.cellDataType === 'object') {
      //! Burası nasıl yapılandırılmalı
    }
  } else if (column.filter === 'agTextColumnFilter') {
    _filter = column.filter;
    _filterParams = column.filterParams;
  } else if (column.filter === 'agNumberColumnFilter') {
    _filter = column.filter;
    _filterParams = column.filterParams;
  } else if (column.filter === 'agDateColumnFilter') {
    _filter = column.filter;
    _filterParams = column.filterParams;
  } else {
    _filter = null;
    _filterParams = null;
  }

  const result: AgGridColDef = {
    field: column.field,
    cellDataType: column.cellDataType ?? 'text',
    hide: column.hide,
    editable: column.editable ?? false,
    sortable: column.sortable ?? false,
    headerName: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
    headerTooltip: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
    width: column.width,
    ...(_filter !== undefined && _filter !== null ? { filter: _filter } : {}),
    ...(_filterParams !== undefined && _filterParams !== null ? { filterParams: _filterParams } : {}),
  };

  return result;
};
