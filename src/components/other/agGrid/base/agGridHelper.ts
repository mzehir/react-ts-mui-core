import { AgGridReactProps } from 'ag-grid-react';

export interface AgGridCompProps extends AgGridReactProps {
  verticalLine?: boolean;
  horizontalLine?: boolean;
}

export const agGridCompDefaultProps: Partial<AgGridCompProps> = {
  verticalLine: true,
  horizontalLine: true,
};
