import { ColDef } from 'ag-grid-community';

export type AgGridCellDataType = 'text' | 'number' | 'boolean' | 'date' | 'dateString' | 'object';

export type AgGridColDef = ColDef & {
  isTranslation?: boolean;
  cellDataType: AgGridCellDataType;
};
