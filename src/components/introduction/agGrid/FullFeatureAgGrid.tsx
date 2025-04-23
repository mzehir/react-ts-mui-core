import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { GridReadyEvent, IDatasource } from 'ag-grid-community';
import { FullFeatureAgGridProps } from './fullFeatureAgGridTypes';
import { prepareColumns } from './fullFeatureAgGridHelper';
import AgGridComp from '../../custom/agGrid/AgGrid';
import BoxComp from '../../base/box/Box';

const FullFeatureAgGrid = ({ columns, gridCacheSettings, triggerGetEmployees }: FullFeatureAgGridProps) => {
  const { translate } = useLanguageContext();
  const [totalRowCount, setTotalRowCount] = React.useState<number>(1000);

  const preparedGridSettings = React.useMemo(
    () => ({
      maxConcurrentDatasourceRequests: gridCacheSettings?.maxConcurrentDatasourceRequests ?? 1,
      cacheBlockSize: gridCacheSettings?.cacheBlockSize ?? 100,
      totalRowCount: gridCacheSettings?.totalRowCount ?? totalRowCount,
      serverSideInitialRowCount: gridCacheSettings?.serverSideInitialRowCount
        ? gridCacheSettings.serverSideInitialRowCount
        : gridCacheSettings?.totalRowCount
          ? Math.ceil(gridCacheSettings?.totalRowCount * 1.1)
          : Math.ceil((totalRowCount ?? 1000) * 1.1),
      cacheOverflowSize: gridCacheSettings?.cacheOverflowSize ?? 2,
      rowBuffer: gridCacheSettings?.rowBuffer ?? 0,
    }),
    [gridCacheSettings, totalRowCount],
  );

  const preparedMaxBlocksInCache = React.useMemo(() => {
    return Math.ceil(preparedGridSettings.totalRowCount / preparedGridSettings.cacheBlockSize);
  }, [preparedGridSettings.totalRowCount, preparedGridSettings.cacheBlockSize]);

  const preparedColumns = React.useMemo(() => prepareColumns(columns, translate), [columns, translate]);

  const onGridReady = React.useCallback(
    async (gridParams: GridReadyEvent) => {
      try {
        const dataSource: IDatasource = {
          rowCount: totalRowCount,
          getRows: async (rowParams) => {
            //! filterModel backend hazır olduğunda kullanılacak
            const filterModel = gridParams.api.getFilterModel();
            console.log(filterModel);

            try {
              const { data: pageData } = await triggerGetEmployees({
                maxResultCount: (rowParams.endRow - rowParams.startRow).toString(),
                skipCount: rowParams.startRow.toString(),
              });

              if (!pageData?.data?.items || !Array.isArray(pageData.data.items)) {
                throw new Error('Invalid data format received from API');
              }

              if (!pageData?.data?.totalCount) {
                throw new Error('Total count not available in initial response');
              }

              totalRowCount !== pageData?.data?.totalCount && setTotalRowCount(pageData?.data?.totalCount);

              const rowsThisPage = pageData.data.items;
              const lastRow =
                pageData.data.totalCount !== undefined && pageData.data.totalCount <= rowParams.endRow
                  ? pageData.data.totalCount
                  : -1;

              rowParams.successCallback(rowsThisPage, lastRow);
            } catch (error) {
              console.error('Error fetching page data:', error);
              rowParams.failCallback();
            }
          },
        };

        gridParams.api.setGridOption('datasource', dataSource);
      } catch (error) {
        console.error('Error initializing grid:', error);
      }
    },
    [triggerGetEmployees, totalRowCount],
  );

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
