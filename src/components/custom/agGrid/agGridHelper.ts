import { AgGridReactProps } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

export type AgGridCellDataType = 'text' | 'number' | 'boolean' | 'date' | 'dateString' | 'object';

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
