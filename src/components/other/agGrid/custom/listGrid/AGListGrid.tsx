import React, { forwardRef } from 'react';
import useLanguageContext from '../../../../../hooks/useLanguageContext';
import { ApiSliceGetListMethodRequestFilterParams } from '../../../../../redux/slices/apiSliceHelper/getMethodsAndTypes/getList/getListRequestType';
import { AgListGridProps } from './agListGridTypes';
import { prepareOperationColumn, prepareColumns } from './agListGridHelper';
import { ColumnFilterModel } from '../../helper/column/columnFilter/columnFilterParams';
import { setLisGridInitialFilters } from './helper/agListGridInitialFilterHelper';
import { transformAgListGridFiltersForRequest } from './helper/transformAgListGridFiltersForRequest';
import { AGGridAddButton, AGGridSummaryOpenButton } from '../../helper/buttons/AGGridAddButton';
import { disableFloatingInputs, waitForGridHeader } from './helper/agListGridDisableFloatingInputs';
import AGSummaryGrid from '../summaryGrid/AGSummaryGrid';
import { GridReadyEvent, IDatasource } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import AgGridComp from '../../base/AgGrid';
import BoxComp from '../../../../base/box/Box';

const AGListGridComp = forwardRef<AgGridReact, AgListGridProps>(
  (
    {
      columns,
      addButtonProps,
      onView,
      onEdit,
      onDelete,
      operationItems,
      gridCacheSettings,
      triggerGetList,
      triggerGetReport,
    },
    ref,
  ) => {
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

              setTimeout(() => {
                disableFloatingInputs();
              }, 50);
            },
          };

          gridParams.api.setGridOption('datasource', dataSource);
        } catch (error) {
          console.error('Error initializing grid:', error);
        }
      },
      [triggerGetList, totalRowCount, columns],
    );

    const useDisableFloatingFilterInputs = () => {
      React.useEffect(() => {
        const observer = new MutationObserver(() => {
          disableFloatingInputs();
        });

        waitForGridHeader(observer);

        return () => observer.disconnect();
      }, []);
    };

    useDisableFloatingFilterInputs();

    const [summaryGridOpen, setSummaryGridOpen] = React.useState(false);
    const [activeFilterModel, setActiveFilterModel] = React.useState<ApiSliceGetListMethodRequestFilterParams[]>([]);

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
          <BoxComp display={'flex'} justifyContent={'end'} gap={'5px'}>
            <AGGridSummaryOpenButton
              onClick={() => {
                // @ts-expect-error finalise ref as MutableRefObject
                const filterModel = ref?.current?.api?.getFilterModel();

                const requestFilterDto =
                  Object.keys(filterModel).length > 0 ? transformAgListGridFiltersForRequest(filterModel) : [];

                setActiveFilterModel(requestFilterDto);
                setSummaryGridOpen(true);
              }}
            />

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
          ref={ref}
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

        {summaryGridOpen && (
          <AGSummaryGrid
            open={summaryGridOpen}
            setOpen={setSummaryGridOpen}
            listGridColumnDefs={columnDefs}
            triggerGetReport={triggerGetReport}
            filters={activeFilterModel}
          />
        )}
      </BoxComp>
    );
  },
);

AGListGridComp.displayName = 'AGListGridComp';

export default AGListGridComp;
