import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import useLanguageContext from '../../../../hooks/useLanguageContext';
import { ListDataGridProps, ListDataGridRef } from './listDataGridTypes';
import { listDataGridPropsPrepareColumn } from './listDataGridMethods';
import DataGridComp from '../../../base/dataGrid/DataGrid';
import { useGridApiRef } from '@mui/x-data-grid';

const ListDataGrid = forwardRef<ListDataGridRef, ListDataGridProps>((props, ref) => {
  const { columns, rows } = props;
  const { translate } = useLanguageContext();

  const apiRef = useGridApiRef();
  const preparedColumns = useMemo(
    () =>
      columns.map((column) => ({
        ...listDataGridPropsPrepareColumn(column),
        headerName: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
      })),
    [columns, translate],
  );

  useImperativeHandle(ref, () => ({
    getDataGrid: () => apiRef.current,
  }));

  return <DataGridComp columns={preparedColumns} rows={rows} />;
});

ListDataGrid.displayName = 'ListDataGrid';

export default React.memo(ListDataGrid);
