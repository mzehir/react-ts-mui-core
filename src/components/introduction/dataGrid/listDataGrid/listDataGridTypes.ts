import { GridApi } from '@mui/x-data-grid';
import { DataGridCompColDef, DataGridCompValidRowModel } from '../../../base/dataGrid/dataGridHelper';

export interface ListDataGridRef {
  getDataGrid: () => GridApi;
}

export interface ListDataGridProps {
  columns: DataGridCompColDef[];

  rows: DataGridCompValidRowModel[];
}
