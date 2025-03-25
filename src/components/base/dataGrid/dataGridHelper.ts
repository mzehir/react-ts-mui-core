import { DataGridProps, GridValidRowModel, GridColDef } from '@mui/x-data-grid';

export interface DataGridCompValidRowModel extends GridValidRowModel {}

export type DataGridCompColDef<R extends DataGridCompValidRowModel = DataGridCompValidRowModel> = GridColDef<R> & {
  isTranslation?: boolean;
};

export interface DataGridCompProps<R extends DataGridCompValidRowModel = DataGridCompValidRowModel>
  extends Omit<DataGridProps<R>, 'rows'> {
  rows?: R[];
}

export const dataGridCompDefaultProps: Partial<DataGridCompProps<DataGridCompValidRowModel>> = {
  columns: [],
};
