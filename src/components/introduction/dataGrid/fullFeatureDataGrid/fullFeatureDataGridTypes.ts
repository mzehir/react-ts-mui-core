import { GridApi, GridCallbackDetails, GridCellParams } from '@mui/x-data-grid';
import { DataGridCompColDef, DataGridCompValidRowModel } from '../../../base/dataGrid/dataGridHelper';

export interface FullFeatureDataGridRef {
  getDataGrid: () => GridApi;
}

export interface FullFeatureDataGridProps {
  columns: DataGridCompColDef[];
  rows: DataGridCompValidRowModel[];
  onCellClick?: (params: GridCellParams, event: React.MouseEvent, details: GridCallbackDetails) => void;
}
