import React from 'react';
import { useLazyGetEmployeesQuery } from '../../../../../redux/slices/services/introduction/custom/introductionApiSlices';
import ContentFitLayout from '../../../../../layouts/pageLayouts/ContentFitLayout';
import AGListGridComp from '../../../../../components/other/agGrid/custom/listGrid/AGListGrid';
import DividerComp from '../../../../../components/base/divider/Divider';
import TypographyComp from '../../../../../components/base/typography/Typography';
import { employeeColumns } from './agListGridPageTypes';
import MoodIcon from '@mui/icons-material/Mood';
import { AgGridReact } from 'ag-grid-react';

const AgListGridPage: React.FC = () => {
  const [triggerGetEmployees] = useLazyGetEmployeesQuery();
  const gridRef = React.useRef<AgGridReact>(null);

  return (
    <ContentFitLayout>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.agListGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <AGListGridComp
        ref={gridRef}
        columns={employeeColumns}
        addButtonProps={{
          onClick(event) {
            console.log('clicked to add row:', event);
            console.log(gridRef.current);
          },
        }}
        onView={(row: unknown) => console.log('Clicked for viewing:', row)}
        onEdit={(row: unknown) => console.log('Clicked for editing:', row)}
        onDelete={(row: unknown) => console.log('Clicked for deletion:', row)}
        triggerGetList={triggerGetEmployees}
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
        gridCacheSettings={{
          maxConcurrentDatasourceRequests: 1,
          cacheBlockSize: 50,
          cacheOverflowSize: 2,
        }}
      />
    </ContentFitLayout>
  );
};

export default AgListGridPage;
