import {
  ElementSize,
  GridApi,
  GridCallbackDetails,
  GridCellModesModel,
  GridCellParams,
  GridColumnHeaderParams,
  GridColumnOrderChangeParams,
  GridColumnResizeParams,
  GridColumnVisibilityModel,
  GridDensity,
  GridFilterModel,
  GridMenuParams,
  GridPaginationMeta,
  GridPaginationModel,
  GridPreferencePanelParams,
  GridRowModesModel,
  GridRowParams,
  GridRowSelectionModel,
  GridSortModel,
  MuiBaseEvent,
  MuiEvent,
} from '@mui/x-data-grid';
import { DataGridCompColDef, DataGridCompValidRowModel } from '../../../base/dataGrid/dataGridHelper';

export interface FullFeatureDataGridRef {
  getDataGrid: () => GridApi;
}

interface IgnoreValueFormatterDuringExport {
  csvExport?: boolean;
  clipboardExport?: boolean;
}

export interface FullFeatureDataGridProps {
  columns: DataGridCompColDef[];

  rows: DataGridCompValidRowModel[];

  // General Setting Boolean

  autoPageSize?: boolean;

  autosizeOnMount?: boolean;

  checkboxSelection?: boolean;

  disableColumnFilter?: boolean;

  disableAutosize?: boolean;

  disableColumnMenu?: boolean;

  disableColumnResize?: boolean;

  disableColumnSelector?: boolean;

  disableColumnSorting?: boolean;

  disableDensitySelector?: boolean;

  disableEval?: boolean;

  disableMultipleRowSelection?: boolean;

  disableRowSelectionOnClick?: boolean;

  disableVirtualization?: boolean;

  hideFooter?: boolean;

  hideFooterPagination?: boolean;

  hideFooterSelectedRowCount?: boolean;

  ignoreDiacritics?: boolean;

  ignoreValueFormatterDuringExport?: IgnoreValueFormatterDuringExport;

  keepNonExistentRowsSelected?: boolean;

  loading?: boolean;

  resetPageOnSortFilter?: boolean;

  rowSelection?: boolean;

  showCellVerticalBorder?: boolean;

  showColumnVerticalBorder?: boolean;

  unstable_rowSpanning?: boolean;

  virtualizeColumnsWithAutoRowHeight?: boolean;

  // General Setting Number

  columnHeaderHeight?: number;

  // General Setting Events

  onCellClick?: (params: GridCellParams, event: React.MouseEvent, details: GridCallbackDetails) => void;

  onCellDoubleClick?: (params: GridCellParams, event: React.MouseEvent, details: GridCallbackDetails) => void;

  onCellEditStart?: (params: GridCellParams, event: React.KeyboardEvent | React.MouseEvent) => void;

  onCellEditStop?: (params: GridCellParams, event: MuiBaseEvent) => void;

  onCellKeyDown?: (params: GridCellParams, event: React.KeyboardEvent, details: GridCallbackDetails) => void;

  onCellModesModelChange?: (cellModesModel: GridCellModesModel, details: GridCallbackDetails) => void;

  onClipboardCopy?: (params: string) => void;

  onColumnHeaderClick?: (params: GridColumnHeaderParams, event: React.MouseEvent, details: GridCallbackDetails) => void;

  onColumnHeaderContextMenu?: (params: GridColumnHeaderParams, event: React.MouseEvent) => void;

  onColumnHeaderDoubleClick?: (
    params: GridColumnHeaderParams,
    event: React.MouseEvent,
    details: GridCallbackDetails,
  ) => void;

  onColumnHeaderEnter?: (params: GridColumnHeaderParams, event: React.MouseEvent, details: GridCallbackDetails) => void;

  onColumnHeaderLeave?: (params: GridColumnHeaderParams, event: React.MouseEvent, details: GridCallbackDetails) => void;

  onColumnHeaderOut?: (params: GridColumnHeaderParams, event: React.MouseEvent, details: GridCallbackDetails) => void;

  onColumnHeaderOver?: (params: GridColumnHeaderParams, event: React.MouseEvent, details: GridCallbackDetails) => void;

  onColumnOrderChange?: (params: GridColumnOrderChangeParams, event: MuiEvent, details: GridCallbackDetails) => void;

  onColumnResize?: (params: GridColumnResizeParams, event: MuiEvent, details: GridCallbackDetails) => void;

  onColumnVisibilityModelChange?: (model: GridColumnVisibilityModel, details: GridCallbackDetails) => void;

  onColumnWidthChange?: (params: GridColumnResizeParams, event: MuiEvent, details: GridCallbackDetails) => void;

  onDensityChange?: (density: GridDensity) => void;

  onFilterModelChange?: (model: GridFilterModel, details: GridCallbackDetails) => void;

  onMenuClose?: (params: GridMenuParams, event: MuiEvent, details: GridCallbackDetails) => void;

  onMenuOpen?: (params: GridMenuParams, event: MuiEvent, details: GridCallbackDetails) => void;

  onPaginationMetaChange?: (paginationMeta: GridPaginationMeta) => void;

  onPaginationModelChange?: (model: GridPaginationModel, details: GridCallbackDetails) => void;

  onPreferencePanelClose?: (params: GridPreferencePanelParams, event: MuiEvent, details: GridCallbackDetails) => void;

  onPreferencePanelOpen?: (params: GridPreferencePanelParams, event: MuiEvent, details: GridCallbackDetails) => void;

  onProcessRowUpdateError?: (error: unknown) => void;

  onResize?: (params: ElementSize, event: MuiEvent, details: GridCallbackDetails) => void;

  onRowClick?: (params: GridRowParams, event: React.MouseEvent, details: GridCallbackDetails) => void;

  onRowCountChange?: (count: number) => void;

  onRowDoubleClick?: (params: GridRowParams, event: React.MouseEvent, details: GridCallbackDetails) => void;

  onRowEditStart?: (params: GridRowParams, event: React.KeyboardEvent | React.MouseEvent) => void;

  onRowEditStop?: (params: GridRowParams, event: MuiEvent) => void;

  onRowModesModelChange?: (rowModesModel: GridRowModesModel, details: GridCallbackDetails) => void;

  onRowSelectionModelChange?: (rowSelectionModel: GridRowSelectionModel, details: GridCallbackDetails) => void;

  onSortModelChange?: (model: GridSortModel, details: GridCallbackDetails) => void;
}
