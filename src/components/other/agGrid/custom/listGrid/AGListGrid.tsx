import React from 'react';
import useLanguageContext from '../../../../../hooks/useLanguageContext';
import { AgListGridProps } from './agListGridTypes';
import { prepareOperationColumn, prepareColumns } from './agListGridHelper';
import { ColumnFilterModel } from '../../helper/column/columnFilter/columnFilterParams';
import { setLisGridInitialFilters } from './helper/agListGridInitialFilterHelper';
import { transformAgListGridFiltersForRequest } from './helper/transformAgListGridFiltersForRequest';
import { AGGridAddButton } from '../../helper/buttons/AGGridAddButton';
import { GridReadyEvent, IDatasource } from 'ag-grid-community';
import AgGridComp from '../../base/AgGrid';
import BoxComp from '../../../../base/box/Box';

const AGListGridComp = ({
  columns,
  addButtonProps,
  onView,
  onEdit,
  onDelete,
  operationItems,
  gridCacheSettings,
  triggerGetList,
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

  const onGridReady = React.useCallback(
    async (gridParams: GridReadyEvent) => {
      await setLisGridInitialFilters(gridParams, columns);

      try {
        const dataSource: IDatasource = {
          rowCount: totalRowCount,
          getRows: async (rowParams) => {
            gridParams.api.setGridOption('loading', true);

            const filterModel: ColumnFilterModel = gridParams.api.getFilterModel();
            const requestFilterDto =
              Object.keys(filterModel).length > 0 ? transformAgListGridFiltersForRequest(filterModel) : [];

            const { data: pageData } = await triggerGetList({
              maxResultCount: (rowParams.endRow - rowParams.startRow).toString(),
              skipCount: rowParams.startRow.toString(),
              filterParams: requestFilterDto,
            });

            gridParams.api.setGridOption('loading', false);

            if (!pageData?.data?.items || !Array.isArray(pageData.data.items)) {
              throw new Error('Invalid data format received from API');
            }

            totalRowCount !== pageData?.data?.totalCount && setTotalRowCount(pageData?.data?.totalCount ?? 0);

            const rowsThisPage = pageData.data.items;
            const lastRow =
              pageData.data.totalCount !== undefined && pageData.data.totalCount <= rowParams.endRow
                ? pageData.data.totalCount
                : -1;

            setTimeout(() => {
              if (rowsThisPage.length === 0) {
                gridParams.api.showNoRowsOverlay();
              } else {
                gridParams.api.hideOverlay();
              }
            }, 0);

            rowParams.successCallback(rowsThisPage, lastRow);
          },
        };

        gridParams.api.setGridOption('datasource', dataSource);
      } catch (error) {
        console.error('Error initializing grid:', error);
      }
    },
    [triggerGetList, totalRowCount, columns],
  );

  return (
    <BoxComp
      display={'flex'}
      flexDirection={'column'}
      flexGrow={'1'}
      overflow={'hidden'}
      gap={'5px'}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {addButtonProps && (
        <BoxComp display={'flex'} justifyContent={'end'}>
          <AGGridAddButton
            text={addButtonProps.text}
            icon={addButtonProps.icon}
            onClick={(event) => {
              addButtonProps.onClick(event);
            }}
          />
        </BoxComp>
      )}

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
