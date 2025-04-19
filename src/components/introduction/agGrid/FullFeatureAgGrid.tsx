import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';

import { CustomCellRendererProps } from 'ag-grid-react';
import { FilterChangedEvent, ICellRendererParams, GridReadyEvent, IDatasource } from 'ag-grid-community';
import { fullFeatureAgGridPropsPrepareColumn } from './fullFeatureAgGridMethods';
import { FullFeatureAgGridProps } from './fullFeatureAgGridTypes';
import AgGridComp from '../../custom/agGrid/AgGrid';
import AgGridCellSkeletonComp from '../../custom/agGrid/components/AgGridCellSkeleton';
import { AgGridColDefType } from '../../custom/agGrid/types/agGridColDefType';

import BoxComp from '../../base/box/Box';
import IconButtonComp from '../../base/iconButton/IconButton';
import { Stack } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const operationColumn = React.useMemo(() => {
    if (!onView && !onEdit && !onDelete && (!operationItems || operationItems.length === 0)) {
      return null;
    }

    const ICON_BUTTON_WIDTH = 40;
    let operationColumnItemLength = 0;

    if (onView) operationColumnItemLength++;

    if (onEdit) operationColumnItemLength++;

    if (onDelete) operationColumnItemLength++;

    if (operationItems?.length) {
      operationColumnItemLength += operationItems.filter((item) => {
        return item.type === 'iconButton';
      }).length;
    }

    const operationColumnWidth = operationColumnItemLength * ICON_BUTTON_WIDTH;

    return {
      field: 'operations',
      headerName: '',
      width: operationColumnWidth || 200,
      pinned: 'left' as const,
      sortable: false,
      filter: false,
      cellDataType: 'object' as const,
      cellRenderer: (params: ICellRendererParams) => {
        return (
          <Stack direction="row" spacing={1}>
            {onView && (
              <IconButtonComp size="small" color="primary" onClick={() => onView(params.data)}>
                <RemoveRedEyeIcon />
              </IconButtonComp>
            )}
            {onEdit && (
              <IconButtonComp size="small" color="success" onClick={() => onEdit(params.data)}>
                <EditIcon />
              </IconButtonComp>
            )}
            {onDelete && (
              <IconButtonComp size="small" color="error" onClick={() => onDelete(params.data)}>
                <DeleteIcon />
              </IconButtonComp>
            )}
            {operationItems?.map((item, index) => {
              if (item.type === 'iconButton') {
                const isVisible = item.visablePrepare ? item.visablePrepare(params.data) : (item.visable ?? true);
                const isDisabled = item.disabledPrepare ? item.disabledPrepare(params.data) : (item.disabled ?? false);

                if (!isVisible) return null;

                return (
                  <IconButtonComp
                    key={index}
                    size="small"
                    color={item.color}
                    disabled={isDisabled}
                    onClick={() => item.onClick(params.data)}
                  >
                    {item.icon}
                  </IconButtonComp>
                );
              }

              return null;
            })}
          </Stack>
        );
      },
    } as AgGridColDefType;
  }, [onView, onEdit, onDelete, operationItems]);

  const preparedColumns = React.useMemo(() => {
    const baseColumns = columns.map((column: AgGridColDefType) => {
      return {
        ...fullFeatureAgGridPropsPrepareColumn(column, translate),
        cellRenderer: (props: CustomCellRendererProps) => {
          if (props.value !== undefined) {
            return props.value;
          } else {
            return <AgGridCellSkeletonComp />;
          }
        },
      };
    });

    return operationColumn ? [...baseColumns, operationColumn] : baseColumns;
  }, [columns, translate, operationColumn]);

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
        // GridCacheSettings
        maxConcurrentDatasourceRequests={preparedGridSettings.maxConcurrentDatasourceRequests}
        cacheBlockSize={preparedGridSettings.cacheBlockSize}
        serverSideInitialRowCount={preparedGridSettings.serverSideInitialRowCount}
        maxBlocksInCache={preparedMaxBlocksInCache}
        cacheOverflowSize={preparedGridSettings.cacheOverflowSize}
        rowBuffer={preparedGridSettings.rowBuffer}
        // GridCacheSettings
      />
    </BoxComp>
  );
};

export default FullFeatureAgGrid;
