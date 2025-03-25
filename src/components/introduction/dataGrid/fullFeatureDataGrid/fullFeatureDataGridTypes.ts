import { GridApi, GridCallbackDetails, GridCellParams, GridColDef, GridValidRowModel } from '@mui/x-data-grid';

export interface FullFeatureDataGridRef {
  getDataGrid: () => GridApi;
}

export interface FullFeatureDataGridBaseRow extends GridValidRowModel {}

export interface FullFeatureDataGridProps<R extends FullFeatureDataGridBaseRow = FullFeatureDataGridBaseRow> {
  columns: GridColDef[];
  rows: R[];
  onCellClick?: (params: GridCellParams, event: React.MouseEvent, details: GridCallbackDetails) => void;
}
