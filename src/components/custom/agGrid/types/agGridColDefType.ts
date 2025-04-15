import { ColDef } from 'ag-grid-community';
import { AgGridColumnFilterType } from './agGridColumnFilterType';

type AgGridCellDataType = 'text' | 'number' | 'boolean' | 'date' | 'dateString' | 'object';

export type AgGridColDefType = ColDef & {
  isTranslation?: boolean;
  cellDataType: AgGridCellDataType;
  customFilter?: AgGridColumnFilterType;
};
