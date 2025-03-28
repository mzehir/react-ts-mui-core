import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import useLanguageContext from '../../../../hooks/useLanguageContext';
import { FullFeatureDataGridProps, FullFeatureDataGridRef } from './fullFeatureDataGridTypes';
import { fullFeatureDataGridPropsPrepareColumn } from './fullFeatureDataGridMethods';
import DataGridComp from '../../../base/dataGrid/DataGrid';
import { useGridApiRef } from '@mui/x-data-grid';

const FullFeatureDataGrid = forwardRef<FullFeatureDataGridRef, FullFeatureDataGridProps>((props, ref) => {
  const {
    columns,
    rows,
    // General Setting Boolean
    autoPageSize,
    autosizeOnMount,
    checkboxSelection,
    disableAutosize,
    disableColumnFilter,
    disableColumnMenu,
    disableColumnResize,
    disableColumnSelector,
    disableColumnSorting,
    disableDensitySelector,
    disableEval,
    disableMultipleRowSelection,
    disableRowSelectionOnClick,
    disableVirtualization,
    hideFooter,
    hideFooterPagination,
    hideFooterSelectedRowCount,
    ignoreDiacritics,
    ignoreValueFormatterDuringExport,
    keepNonExistentRowsSelected,
    loading,
    resetPageOnSortFilter,
    rowSelection,
    showCellVerticalBorder,
    showColumnVerticalBorder,
    unstable_rowSpanning,
    virtualizeColumnsWithAutoRowHeight,
    // General Setting Number
    columnHeaderHeight,
    // General Setting Events
    onCellClick,
    onCellDoubleClick,
    onCellEditStart,
    onCellEditStop,
    onCellKeyDown,
    onCellModesModelChange,
    onClipboardCopy,
    onColumnHeaderClick,
    onColumnHeaderContextMenu,
    onColumnHeaderDoubleClick,
    onColumnHeaderEnter,
    onColumnHeaderLeave,
    onColumnHeaderOut,
    onColumnHeaderOver,
    onColumnOrderChange,
    onColumnResize,
    onColumnVisibilityModelChange,
    onColumnWidthChange,
    onDensityChange,
    onFilterModelChange,
    onMenuClose,
    onMenuOpen,
    onPaginationMetaChange,
    onPaginationModelChange,
    onPreferencePanelClose,
    onPreferencePanelOpen,
    onProcessRowUpdateError,
    onResize,
    onRowClick,
    onRowCountChange,
    onRowDoubleClick,
    onRowEditStart,
    onRowEditStop,
    onRowModesModelChange,
    onRowSelectionModelChange,
    onSortModelChange,
  } = props;
  const { translate } = useLanguageContext();

  const apiRef = useGridApiRef();
  const preparedColumns = useMemo(
    () =>
      columns.map((column) => ({
        ...fullFeatureDataGridPropsPrepareColumn(column),
        headerName: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
      })),
    [columns, translate],
  );

  useImperativeHandle(ref, () => ({
    getDataGrid: () => apiRef.current,
  }));

  return (
    <DataGridComp
      apiRef={apiRef}
      columns={preparedColumns}
      rows={rows}
      // General Setting Boolean
      autoPageSize={autoPageSize}
      autosizeOnMount={autosizeOnMount}
      checkboxSelection={checkboxSelection}
      disableAutosize={disableAutosize}
      disableColumnFilter={disableColumnFilter}
      disableColumnMenu={disableColumnMenu}
      disableColumnResize={disableColumnResize}
      disableColumnSelector={disableColumnSelector}
      disableColumnSorting={disableColumnSorting}
      disableDensitySelector={disableDensitySelector}
      disableEval={disableEval}
      disableMultipleRowSelection={disableMultipleRowSelection}
      disableRowSelectionOnClick={disableRowSelectionOnClick}
      disableVirtualization={disableVirtualization}
      hideFooter={hideFooter}
      hideFooterPagination={hideFooterPagination}
      hideFooterSelectedRowCount={hideFooterSelectedRowCount}
      ignoreDiacritics={ignoreDiacritics}
      ignoreValueFormatterDuringExport={ignoreValueFormatterDuringExport}
      keepNonExistentRowsSelected={keepNonExistentRowsSelected}
      loading={loading}
      resetPageOnSortFilter={resetPageOnSortFilter}
      rowSelection={rowSelection}
      showCellVerticalBorder={showCellVerticalBorder}
      showColumnVerticalBorder={showColumnVerticalBorder}
      unstable_rowSpanning={unstable_rowSpanning}
      virtualizeColumnsWithAutoRowHeight={virtualizeColumnsWithAutoRowHeight}
      // General Setting Number
      columnHeaderHeight={columnHeaderHeight}
      // General Setting Events
      onCellClick={onCellClick}
      onCellDoubleClick={onCellDoubleClick}
      onCellEditStart={onCellEditStart}
      onCellEditStop={onCellEditStop}
      onCellKeyDown={onCellKeyDown}
      onCellModesModelChange={onCellModesModelChange}
      onClipboardCopy={onClipboardCopy}
      onColumnHeaderClick={onColumnHeaderClick}
      onColumnHeaderContextMenu={onColumnHeaderContextMenu}
      onColumnHeaderDoubleClick={onColumnHeaderDoubleClick}
      onColumnHeaderEnter={onColumnHeaderEnter}
      onColumnHeaderLeave={onColumnHeaderLeave}
      onColumnHeaderOut={onColumnHeaderOut}
      onColumnHeaderOver={onColumnHeaderOver}
      onColumnOrderChange={onColumnOrderChange}
      onColumnResize={onColumnResize}
      onColumnVisibilityModelChange={onColumnVisibilityModelChange}
      onColumnWidthChange={onColumnWidthChange}
      onDensityChange={onDensityChange}
      onFilterModelChange={onFilterModelChange}
      onMenuClose={onMenuClose}
      onMenuOpen={onMenuOpen}
      onPaginationMetaChange={onPaginationMetaChange}
      onPaginationModelChange={onPaginationModelChange}
      onPreferencePanelClose={onPreferencePanelClose}
      onPreferencePanelOpen={onPreferencePanelOpen}
      onProcessRowUpdateError={onProcessRowUpdateError}
      onResize={onResize}
      onRowClick={onRowClick}
      onRowCountChange={onRowCountChange}
      onRowDoubleClick={onRowDoubleClick}
      onRowEditStart={onRowEditStart}
      onRowEditStop={onRowEditStop}
      onRowModesModelChange={onRowModesModelChange}
      onRowSelectionModelChange={onRowSelectionModelChange}
      onSortModelChange={onSortModelChange}
    />
  );
});

FullFeatureDataGrid.displayName = 'FullFeatureDataGrid';

export default React.memo(FullFeatureDataGrid);
