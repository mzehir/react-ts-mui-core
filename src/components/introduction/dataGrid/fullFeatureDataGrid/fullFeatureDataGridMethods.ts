import { GridColDef } from '@mui/x-data-grid';
import { DataGridCompValidRowModel } from '../../../base/dataGrid/dataGridHelper';

export const fullFeatureDataGridPropsprepareColumn = <R extends DataGridCompValidRowModel>(
  column: GridColDef<R>,
): GridColDef<R> => {
  const result: GridColDef = {
    field: column.field,
    type: column.type,
    display: column.display,
    headerName: column.headerName,
    description: column.description,
    align: column.align,
    headerAlign: column.headerAlign,
    headerClassName: column.headerClassName,
    cellClassName: column.cellClassName,
    flex: column.flex,
    width: column.width,
    minWidth: column.minWidth,
    maxWidth: column.maxWidth,
    hideable: column.hideable,
    sortable: column.sortable,
    resizable: column.resizable,
    editable: column.editable,
    filterable: column.filterable,
    hideSortIcons: column.hideSortIcons,
    disableColumnMenu: column.disableColumnMenu,
    disableReorder: column.disableReorder,
    disableExport: column.disableExport,
    valueGetter: column.valueGetter,
    valueSetter: column.valueSetter,
    valueFormatter: column.valueFormatter,
    valueParser: column.valueParser,
    renderHeader: column.renderHeader,
    renderCell: column.renderCell,
    renderEditCell: column.renderEditCell,
    preProcessEditCellProps: column.preProcessEditCellProps,
    rowSpanValueGetter: column.rowSpanValueGetter,
    colSpan: column.colSpan,
    sortingOrder: column.sortingOrder,
    sortComparator: column.sortComparator,
    getSortComparator: column.getSortComparator,
    filterOperators: column.filterOperators,
    getApplyQuickFilterFn: column.getApplyQuickFilterFn,
  };

  return result;
};
