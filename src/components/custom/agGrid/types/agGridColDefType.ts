import { ColDef } from 'ag-grid-community';
import { AgGridColumnFilterType } from './agGridColumnFilterType';

type AgGridCellDataType = 'text' | 'number' | 'boolean' | 'date' | 'dateString' | 'object';

export type AgGridColDefType = ColDef & {
  isHeaderCellTranslation?: boolean;
  isBodyCellTranslation?: boolean;
  cellDataType: AgGridCellDataType;
  customFilter?: AgGridColumnFilterType;
};
