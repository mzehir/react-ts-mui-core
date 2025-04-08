import { AgGridReactProps } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

export type AgGridCompColDef = ColDef & {
  isTranslation?: boolean;
};

export interface AgGridCompProps extends AgGridReactProps {}

export const agGridCompDefaultProps: Partial<AgGridCompProps> = {};
