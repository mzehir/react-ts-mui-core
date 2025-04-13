import { ColDef } from 'ag-grid-community';
import { AgGridFilter, AgGridFilterParams } from '../columnFilter/agGridColumnFilter';

export type AgGridCellDataType = 'text' | 'number' | 'boolean' | 'date' | 'dateString' | 'object';

export type AgGridColDef = ColDef & {
  isTranslation?: boolean;
  cellDataType: AgGridCellDataType;
  filter?: AgGridFilter;
  filterParams?: AgGridFilterParams;
};

export const examp: AgGridColDef = {
  field: 'field',
  cellDataType: 'text',
  filter: 'agTextColumnFilter',
  filterParams: {},
};
