import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { BodyScrollEndEvent } from 'ag-grid-community';

import BoxComp from '../../base/box/Box';
import { fullFeatureAgGridPropsPrepareColumn } from './fullFeatureAgGridMethods';
import AgGridComp from '../../custom/agGrid/AgGrid';
import { AgGridCompColDef } from '../../custom/agGrid/agGridHelper';

interface FullFeatureAgGridProps<T> {
  columns: AgGridCompColDef[];
  rows: T[];
}

const FullFeatureAgGrid = <T,>({ columns, rows }: FullFeatureAgGridProps<T>) => {
  const { translate } = useLanguageContext();

  const onBodyScrollEnd = (event: BodyScrollEndEvent) => {
    const gridApi = event.api;
    const lastRowIndex = gridApi.getDisplayedRowCount() - 1;
    const lastRowNode = gridApi.getDisplayedRowAtIndex(lastRowIndex);

    if (lastRowNode && lastRowNode.rowTop !== null) {
      const lastRowTop = lastRowNode.rowTop;
      const scrollPosition = event.top;
      const viewportHeight = gridApi.getDisplayedRowCount() * 30; // Varsayılan satır yüksekliği 30px

      // Eğer son satır görünür alanın %90'ına yaklaştıysa yeni veri yükle
      if (scrollPosition + viewportHeight >= lastRowTop * 0.9) {
        console.log('İstek atılacak');
      }
    }
  };

  const preparedColumns = React.useMemo(() => {
    const preparedCols = columns.map((column) => ({
      ...fullFeatureAgGridPropsPrepareColumn(column),
      headerName: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
      headerTooltip: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
    }));

    return preparedCols;
  }, [columns, translate]);

  return (
    <BoxComp sx={{ width: '100%', height: '80%' }}>
      <AgGridComp columnDefs={preparedColumns} rowData={rows} onBodyScrollEnd={onBodyScrollEnd} />
    </BoxComp>
  );
};

export default FullFeatureAgGrid;
