import React from 'react';
import eventBus from '../../../utils/eventBus/eventBusInstance';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { FilterOpenedEvent, GridReadyEvent, IDatasource } from 'ag-grid-community';
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

  const initialFilterModelPrepare = React.useCallback(() => {
    const columnsContainingDefaultFilterValue =
      columns.filter(
        (column) =>
          column.customFilter &&
          column.customFilter.componentProps &&
          column?.customFilter?.componentProps?.initialFilterValue,
      ) ?? [];

    if (columnsContainingDefaultFilterValue.length > 0) {
      interface FilterModelItem {
        type: string;
        filter: string | number | boolean;
      }

      const filterModel = columnsContainingDefaultFilterValue.reduce<Record<string, FilterModelItem>>((acc, column) => {
        const fieldName = column.field as string;
        const defaultOption = column.customFilter?.componentProps?.defaultOption;
        const initialFilterValue = column.customFilter?.componentProps?.initialFilterValue;

        if (defaultOption && initialFilterValue && fieldName) {
          acc[fieldName] = {
            type: defaultOption,
            filter: initialFilterValue,
          };
        }
        return acc;
      }, {});

      return filterModel;
    } else {
      return {};
    }
  }, [columns]);

  const onGridReady = React.useCallback(
    async (gridParams: GridReadyEvent) => {
      const initialFilterModel = initialFilterModelPrepare();

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

      try {
        const dataSource: IDatasource = {
          rowCount: totalRowCount,
          getRows: async (rowParams) => {
            //! filterModel backend hazır olduğunda kullanılacak
            const filterModel = gridParams.api.getFilterModel();
            console.log(filterModel);

            try {
              let requestDtoFilter = {};
              const filterModelKeys = Object.keys(filterModel);
              if (filterModelKeys.length > 0) {
                for (let i = 0; i < filterModelKeys.length; i++) {
                  const key = filterModelKeys[i];
                  if (filterModel[key].filterType === 'date') {
                    requestDtoFilter = {
                      ...requestDtoFilter,
                      [key]: {
                        type: filterModel[key].type,
                        ...(filterModel[key].type === 'inRange'
                          ? {
                              value: { dateFrom: filterModel[key].dateFrom, dateTo: filterModel[key].dateTo },
                            }
                          : {
                              value: filterModel[key].dateFrom,
                            }),
                      },
                    };
                  } else {
                    requestDtoFilter = {
                      ...requestDtoFilter,
                      [key]: {
                        type: filterModel[key].type,
                        value: filterModel[key].filter,
                      },
                    };
                  }
                }
              }

              const { data: pageData } = await triggerGetEmployees({
                maxResultCount: (rowParams.endRow - rowParams.startRow).toString(),
                skipCount: rowParams.startRow.toString(),
                ...requestDtoFilter,
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
    [triggerGetEmployees, totalRowCount, initialFilterModelPrepare],
  );

  const onFilterOpened = (event: FilterOpenedEvent) => {
    eventBus.emit('agGrid:onFilterOpened', {
      type: event.type,
      source: event.source,
      field: event.column.getId() ?? '',
    });
  };

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
        onFilterOpened={onFilterOpened}
      />
    </BoxComp>
  );
};

export default FullFeatureAgGrid;
