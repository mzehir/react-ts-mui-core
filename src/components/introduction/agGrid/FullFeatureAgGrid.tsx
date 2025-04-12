import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import BoxComp from '../../base/box/Box';
import { fullFeatureAgGridPropsPrepareColumn } from './fullFeatureAgGridMethods';
import { FullFeatureAgGridProps, DEFAULT_GRID_SETTINGS } from './fullFeatureAgGridTypes';
import AgGridComp from '../../custom/agGrid/AgGrid';

const FullFeatureAgGrid = <T,>({ columns, onGridReady, gridSettings = {} }: FullFeatureAgGridProps<T>) => {
  const { translate } = useLanguageContext();

  const preparedGridSettings = React.useMemo(
    () => ({
      ...DEFAULT_GRID_SETTINGS,
      ...gridSettings,
    }),
    [gridSettings],
  );

  const preparedMaxBlocksInCache = React.useMemo(() => {
    return Math.ceil(preparedGridSettings.totalRowCount / preparedGridSettings.cacheBlockSize);
  }, [preparedGridSettings.totalRowCount, preparedGridSettings.cacheBlockSize]);

  const preparedColumns = React.useMemo(() => {
    return columns.map((column) => fullFeatureAgGridPropsPrepareColumn(column, translate));
  }, [columns, translate]);

  return (
    <BoxComp sx={{ width: '100%', height: '80%' }}>
      <AgGridComp
        rowModelType={'infinite'}
        columnDefs={preparedColumns}
        onGridReady={onGridReady}
        maxConcurrentDatasourceRequests={preparedGridSettings.maxConcurrentDatasourceRequests}
        cacheBlockSize={preparedGridSettings.cacheBlockSize}
        serverSideInitialRowCount={preparedGridSettings.serverSideInitialRowCount}
        maxBlocksInCache={preparedMaxBlocksInCache}
        cacheOverflowSize={preparedGridSettings.cacheOverflowSize}
        rowBuffer={preparedGridSettings.rowBuffer}
      />
    </BoxComp>
  );
};

export default FullFeatureAgGrid;
