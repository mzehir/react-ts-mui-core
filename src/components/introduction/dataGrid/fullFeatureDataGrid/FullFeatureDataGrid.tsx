import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import useLanguageContext from '../../../../hooks/useLanguageContext';
import { FullFeatureDataGridProps, FullFeatureDataGridRef } from './fullFeatureDataGridTypes';
import { fullFeatureDataGridPropsprepareColumn } from './fullFeatureDataGridMethods';
import DataGridComp from '../../../base/dataGrid/DataGrid';
import { useGridApiRef } from '@mui/x-data-grid';

const FullFeatureDataGrid = forwardRef<FullFeatureDataGridRef, FullFeatureDataGridProps>((props, ref) => {
  const { columns, rows, onCellClick } = props;
  const { translate } = useLanguageContext();

  const apiRef = useGridApiRef();
  const preparedColumns = useMemo(
    () =>
      columns.map((column) => ({
        ...fullFeatureDataGridPropsprepareColumn(column),
        headerName: translate(column.headerName as string),
      })),
    [columns, translate],
  );

  useImperativeHandle(ref, () => ({
    getDataGrid: () => apiRef.current,
  }));

  return <DataGridComp apiRef={apiRef} columns={preparedColumns} rows={rows} onCellClick={onCellClick} />;
});

FullFeatureDataGrid.displayName = 'FullFeatureDataGrid';

export default React.memo(FullFeatureDataGrid);
