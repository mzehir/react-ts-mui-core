import React from 'react';
import { useLazyGetEmployeesQuery } from '../../../../../redux/slices/services/introductionApiSlices';
import FullFeatureAgGrid from '../../../../../components/introduction/agGrid/FullFeatureAgGrid';
import DividerComp from '../../../../../components/base/divider/Divider';
import TypographyComp from '../../../../../components/base/typography/Typography';
import { employeeColumns } from './fullFeatureAgGridPageTypes';

const FullFeatureAgGridPage: React.FC = () => {
  const [triggerGetEmployees] = useLazyGetEmployeesQuery();

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
        triggerGetEmployees={triggerGetEmployees}
        gridCacheSettings={{
          maxConcurrentDatasourceRequests: 1,
          cacheBlockSize: 50,
          cacheOverflowSize: 2,
        }}
      />
    </>
  );
};

export default FullFeatureAgGridPage;
