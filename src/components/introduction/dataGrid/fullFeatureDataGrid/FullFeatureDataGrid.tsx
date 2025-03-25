import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import { FullFeatureDataGridProps, FullFeatureDataGridRef } from './fullFeatureDataGridTypes';
import { fullFeatureDataGridPropsprepareColumn } from './fullFeatureDataGridMethods';
import DataGridComp from '../../../base/dataGrid/DataGrid';
import { useGridApiRef } from '@mui/x-data-grid';

const FullFeatureDataGrid = forwardRef<FullFeatureDataGridRef, FullFeatureDataGridProps>((props, ref) => {
  const { columns, rows, onCellClick } = props;

  const apiRef = useGridApiRef();
  const preparedColumns = useMemo(
    () => columns.map((column) => fullFeatureDataGridPropsprepareColumn(column)),
    [columns],
  );

  useImperativeHandle(ref, () => ({
    getDataGrid: () => apiRef.current,
  }));

  return (
    <DataGridComp
      apiRef={apiRef}
      columns={preparedColumns}
      rows={rows}
      //! DataGrid Events
      //! DataGrid Events
      //! DataGrid Events
      //! DataGrid Events
      //! DataGrid Events
      onCellClick={onCellClick}
      //! DataGrid Events
      //! DataGrid Events
      //! DataGrid Events
      //! DataGrid Events
      //! DataGrid Events
    />
  );
});

FullFeatureDataGrid.displayName = 'FullFeatureDataGrid';

export default React.memo(FullFeatureDataGrid);
