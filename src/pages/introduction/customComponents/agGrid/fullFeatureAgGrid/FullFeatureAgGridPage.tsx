import React from 'react';
import { useLazyGetEmployeesQuery } from '../../../../../redux/slices/services/introductionApiSlices';
import FullFeatureAgGrid from '../../../../../components/introduction/agGrid/FullFeatureAgGrid';
import DividerComp from '../../../../../components/base/divider/Divider';
import TypographyComp from '../../../../../components/base/typography/Typography';
import { employeeColumns } from './fullFeatureAgGridPageTypes';
import { GridCacheSettings } from '../../../../../components/introduction/agGrid/fullFeatureAgGridTypes';
import { GridReadyEvent, IDatasource } from 'ag-grid-community';
import MoodIcon from '@mui/icons-material/Mood';

const FullFeatureAgGridPage: React.FC = () => {
  const [triggerGetEmployees] = useLazyGetEmployeesQuery();
  const [totalRowCount, setTotalRowCount] = React.useState<number>(1000);

  const gridSettings = React.useMemo<GridCacheSettings>(
    () => ({
      maxConcurrentDatasourceRequests: 1,
      cacheBlockSize: 50,
      totalRowCount: totalRowCount,
      serverSideInitialRowCount: Math.ceil(totalRowCount * 1.1),
      cacheOverflowSize: 2,
    }),
    [totalRowCount],
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
              const lastRow = pageData.data.totalCount <= params.endRow ? pageData.data.totalCount : -1;

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

  const handleView = (row: unknown) => {
    console.log('View clicked for:', row);
  };

  const handleEdit = (row: unknown) => {
    console.log('Edit clicked for:', row);
  };

  const handleDelete = (row: unknown) => {
    console.log('Delete clicked for:', row);
  };

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.fullFeatureAgGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <FullFeatureAgGrid
        columns={employeeColumns}
        onGridReady={onGridReady}
        gridSettings={gridSettings}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        operationItems={[
          {
            type: 'iconButton',
            icon: <MoodIcon />,
            color: 'warning',
            onClick(row: unknown) {
              console.log('operationItem clicked for:', row);
            },
          },
        ]}
      />
    </>
  );
};

export default FullFeatureAgGridPage;
