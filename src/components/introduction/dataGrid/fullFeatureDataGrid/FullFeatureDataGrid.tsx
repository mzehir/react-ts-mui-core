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
    checkboxSelection,
    // Events
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
      checkboxSelection={checkboxSelection}
      // Events
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
