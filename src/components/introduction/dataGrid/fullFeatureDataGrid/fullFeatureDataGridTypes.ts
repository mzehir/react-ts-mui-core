import { GridApi, GridCallbackDetails, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { DataGridCompValidRowModel } from '../../../base/dataGrid/dataGridHelper';

export interface FullFeatureDataGridRef {
  getDataGrid: () => GridApi;
}
export interface FullFeatureDataGridProps<R extends DataGridCompValidRowModel = DataGridCompValidRowModel> {
  columns: GridColDef[];
  rows: R[];
  onCellClick?: (params: GridCellParams, event: React.MouseEvent, details: GridCallbackDetails) => void;
}
