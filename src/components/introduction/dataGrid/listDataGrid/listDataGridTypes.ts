import { GridApi } from '@mui/x-data-grid';
import { DataGridCompColDef, DataGridCompValidRowModel } from '../../../base/dataGrid/dataGridHelper';
import { ReactNode } from 'react';
import { IconButtonColor } from '../../../base/iconButton/iconButtonHelper';

export interface ListDataGridRef {
  getDataGrid: () => GridApi;
}

export type ProcessColumnItemFields =
  | {
      type: 'iconButton';
      icon: ReactNode;
      color?: IconButtonColor;
      visable?: boolean;
      visablePrepare?: (row: unknown) => boolean;
      disabled?: boolean;
      disabledPrepare?: (row: unknown) => boolean;
      onClick: (row: unknown) => void;
    }
  | {
      type: 'button';
      label: string;
      onClick: (row: unknown) => void;
    };

export interface ListDataGridProps {
  columns: DataGridCompColDef[];
  rows: DataGridCompValidRowModel[];
  onView?: (row: unknown) => void;
  onEdit?: (row: unknown) => void;
  onDelete?: (row: unknown) => void;
  operationItems?: ProcessColumnItemFields[];
}
