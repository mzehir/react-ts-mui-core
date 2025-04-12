import { AgGridReactProps } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

export type AgGridCellDataType = 'text' | 'number' | 'boolean' | 'date' | 'dateString' | 'object';

export type AgGridCellFilter = 'agNumberColumnFilter' | 'agTextColumnFilter' | 'agDateColumnFilter' | boolean;
export type AgGridCellFilterOptions =
  | 'equals' // agNumberColumnFilter - agTextColumnFilter - agDateColumnFilter
  | 'notEqual' // agNumberColumnFilter - agTextColumnFilter - agDateColumnFilter
  | 'lessThan' // agNumberColumnFilter - ******************** - agDateColumnFilter
  | 'lessThanOrEqual' // agNumberColumnFilter - ******************** - ********************
  | 'greaterThan' // agNumberColumnFilter - ******************** - agDateColumnFilter
  | 'greaterThanOrEqual' // agNumberColumnFilter - ******************** - ********************
  | 'inRange' // agNumberColumnFilter - ******************** - agDateColumnFilter
  | 'contains' // ******************** - agTextColumnFilter - ********************
  | 'notContains' // ******************** - agTextColumnFilter - ********************
  | 'startsWith' // ******************** - agTextColumnFilter - ********************
  | 'endsWith' // ******************** - agTextColumnFilter - ********************
  | 'blank' // agNumberColumnFilter - agTextColumnFilter - agDateColumnFilter
  | 'notBlank'; // agNumberColumnFilter - agTextColumnFilter - agDateColumnFilter
export type AgGridCellFilterOperator = 'AND' | 'OR';
export type AgGridCellFilterButtons = 'apply' | 'clear' | 'reset' | 'cancel';

export type AgGridCompColDef = ColDef & {
  isTranslation?: boolean;
  cellDataType: AgGridCellDataType;
};

export interface AgGridCompProps extends AgGridReactProps {
  verticalLine?: boolean;
  horizontalLine?: boolean;
}

export const agGridCompDefaultProps: Partial<AgGridCompProps> = {
  verticalLine: true,
  horizontalLine: true,
};
