import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import BoxComp from '../../base/box/Box';
import { fullFeatureAgGridPropsPrepareColumn } from './fullFeatureAgGridMethods';
import { FullFeatureAgGridProps, DEFAULT_GRID_SETTINGS } from './fullFeatureAgGridTypes';
import AgGridComp from '../../custom/agGrid/AgGrid';

const FullFeatureAgGrid = <T,>({ columns, onGridReady, gridSettings = {} }: FullFeatureAgGridProps<T>) => {
  const { translate } = useLanguageContext();

  const finalGridSettings = React.useMemo(
    () => ({
      ...DEFAULT_GRID_SETTINGS,
      ...gridSettings,
    }),
    [gridSettings],
  );

  const preparedColumns = React.useMemo(() => {
    const preparedCols = columns.map((column) => ({
      ...fullFeatureAgGridPropsPrepareColumn(column),
      headerName: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
      headerTooltip: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
    }));

    return preparedCols;
  }, [columns, translate]);

  const maxBlocksInCache = React.useMemo(() => {
    return Math.ceil(finalGridSettings.totalRowCount / finalGridSettings.cacheBlockSize);
  }, [finalGridSettings.totalRowCount, finalGridSettings.cacheBlockSize]);

  return (
    <BoxComp sx={{ width: '100%', height: '80%' }}>
      <AgGridComp
        columnDefs={preparedColumns}
        rowModelType={'infinite'}
        rowBuffer={finalGridSettings.rowBuffer}
        cacheBlockSize={finalGridSettings.cacheBlockSize}
        cacheOverflowSize={finalGridSettings.cacheOverflowSize}
        maxBlocksInCache={maxBlocksInCache} // Grid'in önbelleğinde tutulacak maksimum blok sayısı => (maxBlocksInCache * cacheBlockSize) kadar satır önbellekte tutulur
        maxConcurrentDatasourceRequests={finalGridSettings.maxConcurrentDatasourceRequests}
        serverSideInitialRowCount={finalGridSettings.serverSideInitialRowCount}
        onGridReady={onGridReady}
      />
    </BoxComp>
  );
};

export default FullFeatureAgGrid;
