import React from 'react';
import useLanguageContext from '../../../../../hooks/useLanguageContext';
import { GridReadyEvent, IDatasource } from 'ag-grid-community';
import { ColumnType } from '../../helper/column/columnType';
import { AgListGridProps } from './agListGridTypes';
import {
  prepareOperationColumn,
  prepareColumns,
  prepareInitialFilterModel,
  prepareRequestDtoFilters,
} from './agListGridHelper';
import AgGridComp from '../../base/AgGrid';
import BoxComp from '../../../../base/box/Box';
import { ColumnFilterModel } from '../../helper/column/columnFilter/columnFilterParams';

const AGListGridComp = ({
  columns,
  onView,
  onEdit,
  onDelete,
  operationItems,
  gridCacheSettings,
  triggerGetEmployees,
}: AgListGridProps) => {
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

  const columnDefs = React.useMemo(
    () => prepareColumns(columns, translate, operationColumn),
    [columns, translate, operationColumn],
  );

  const setGridInitialFilters = async (gridParams: GridReadyEvent, columns: ColumnType[]) => {
    const initialFilterModel = prepareInitialFilterModel(columns);

    if (Object.keys(initialFilterModel).length > 0) {
      const initialFilterModelKeys = Object.keys(initialFilterModel);

      for (let i = 0; i < initialFilterModelKeys.length; i++) {
        const columnName = initialFilterModelKeys[i];
        const matchedColumnFilterInstance = await gridParams.api.getColumnFilterInstance(columnName);

        if (matchedColumnFilterInstance) {
          matchedColumnFilterInstance?.setModel({
            type: initialFilterModel[columnName]?.type,
            filter: initialFilterModel[columnName]?.filter,
          });
        }
      }

      gridParams.api.onFilterChanged();
    }
  };

  const onGridReady = React.useCallback(
    async (gridParams: GridReadyEvent) => {
      await setGridInitialFilters(gridParams, columns);

      try {
        const dataSource: IDatasource = {
          rowCount: totalRowCount,
          getRows: async (rowParams) => {
            const filterModel = gridParams.api.getFilterModel();

            const requestFilterDto =
              Object.keys(filterModel).length > 0 ? prepareRequestDtoFilters(filterModel as ColumnFilterModel) : {};

            const { data: pageData } = await triggerGetEmployees({
              maxResultCount: (rowParams.endRow - rowParams.startRow).toString(),
              skipCount: rowParams.startRow.toString(),
              ...requestFilterDto,
            });

            if (!pageData?.data?.items || !Array.isArray(pageData.data.items)) {
              throw new Error('Invalid data format received from API');
            }

            totalRowCount !== pageData?.data?.totalCount && setTotalRowCount(pageData?.data?.totalCount ?? 0);

            const rowsThisPage = pageData.data.items;
            const lastRow =
              pageData.data.totalCount !== undefined && pageData.data.totalCount <= rowParams.endRow
                ? pageData.data.totalCount
                : -1;

            rowParams.successCallback(rowsThisPage, lastRow);
          },
        };

        gridParams.api.setGridOption('datasource', dataSource);
      } catch (error) {
        console.error('Error initializing grid:', error);
      }
    },
    [triggerGetEmployees, totalRowCount, columns],
  );

  return (
    <BoxComp sx={{ width: '100%', height: '80%' }}>
      <AgGridComp
        rowModelType={'infinite'}
        columnDefs={columnDefs}
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

export default AGListGridComp;
