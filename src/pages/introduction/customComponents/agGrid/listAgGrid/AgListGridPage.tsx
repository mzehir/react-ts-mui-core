import React from 'react';
import { useLazyGetEmployeesQuery } from '../../../../../redux/slices/services/introductionApiSlices';
import AGListGridComp from '../../../../../components/other/agGrid/custom/listGrid/AGListGrid';
import DividerComp from '../../../../../components/base/divider/Divider';
import TypographyComp from '../../../../../components/base/typography/Typography';
import { employeeColumns } from './agListGridPageTypes';
import MoodIcon from '@mui/icons-material/Mood';

const AgListGridPage: React.FC = () => {
  const [triggerGetEmployees] = useLazyGetEmployeesQuery();

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.agListGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <AGListGridComp
        columns={employeeColumns}
        onView={(row: unknown) => console.log('View clicked for:', row)}
        onEdit={(row: unknown) => console.log('Edit clicked for:', row)}
        onDelete={(row: unknown) => console.log('Delete clicked for:', row)}
        triggerGetEmployees={triggerGetEmployees}
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
    </>
  );
};

export default AgListGridPage;
