import { DataGridProps, GridColDef, GridValidRowModel } from '@mui/x-data-grid';

export interface DataGridCompValidRowModel extends GridValidRowModel {}

export type DataGridCompColDef = GridColDef & {
  isTranslation?: boolean;
};

export interface DataGridCompProps extends Omit<DataGridProps, 'rows'> {
  rows?: DataGridCompValidRowModel[];
}

export const dataGridCompDefaultProps: Partial<DataGridCompProps> = {
  columns: [],
};
