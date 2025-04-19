import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { FilterChangedEvent, GridReadyEvent, IDatasource } from 'ag-grid-community';
import { FullFeatureAgGridProps } from './fullFeatureAgGridTypes';
import { prepareOperationColumn, prepareColumns } from './fullFeatureAgGridHelper';
import AgGridComp from '../../custom/agGrid/AgGrid';
import BoxComp from '../../base/box/Box';

const FullFeatureAgGrid = ({
  columns,
  onView,
  onEdit,
  onDelete,
  operationItems,
  gridCacheSettings,
  triggerGetEmployees,
}: FullFeatureAgGridProps) => {
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

  const operationColumn = React.useMemo(
    () => prepareOperationColumn(onView, onEdit, onDelete, operationItems),
    [onView, onEdit, onDelete, operationItems],
  );

  const preparedColumns = React.useMemo(
    () => prepareColumns(columns, translate, operationColumn),
    [columns, translate, operationColumn],
  );

  const onGridReady = React.useCallback(
    async (params: GridReadyEvent) => {
      const filterModel = params.api.getFilterModel();
      console.log(filterModel);

      try {
        const { data: initialData } = await triggerGetEmployees({
          maxResultCount: '1',
          skipCount: '0',
        });

        if (!initialData?.data?.totalCount) {
          throw new Error('Total count not available in initial response');
        }

        const totalCount = initialData.data.totalCount;
        setTotalRowCount(totalCount);

        const dataSource: IDatasource = {
          rowCount: totalCount,
          getRows: async (params) => {
            try {
              const { data: pageData } = await triggerGetEmployees({
                maxResultCount: (params.endRow - params.startRow).toString(),
                skipCount: params.startRow.toString(),
              });

              if (!pageData?.data?.items || !Array.isArray(pageData.data.items)) {
                throw new Error('Invalid data format received from API');
              }

              const rowsThisPage = pageData.data.items;
              const lastRow =
                pageData.data.totalCount !== undefined && pageData.data.totalCount <= params.endRow
                  ? pageData.data.totalCount
                  : -1;

              params.successCallback(rowsThisPage, lastRow);
            } catch (error) {
              console.error('Error fetching page data:', error);
              params.failCallback();
            }
          },
        };

        params.api.setGridOption('datasource', dataSource);
      } catch (error) {
        console.error('Error initializing grid:', error);
      }
    },
    [triggerGetEmployees],
  );

  const onFilterChanged = (params: FilterChangedEvent) => {
    params.api.refreshInfiniteCache();
  };

  return (
    <BoxComp sx={{ width: '100%', height: '80%' }}>
      <AgGridComp
        rowModelType={'infinite'}
        columnDefs={preparedColumns}
        onGridReady={onGridReady}
        onFilterChanged={onFilterChanged}
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
