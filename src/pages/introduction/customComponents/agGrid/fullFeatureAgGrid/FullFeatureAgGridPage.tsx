import React from 'react';
import FullFeatureAgGrid from '../../../../../components/introduction/agGrid/FullFeatureAgGrid';
import DividerComp from '../../../../../components/base/divider/Divider';
import TypographyComp from '../../../../../components/base/typography/Typography';
import { useLazyGetEmployeesQuery } from '../../../../../redux/slices/services/introductionApiSlices';
import { EmployeeRowType } from '../../../../../redux/slices/services/introductionApiDto';
import { employeeColumns } from './fullFeatureAgGridPageTypes';

const FullFeatureAgGridPage: React.FC = () => {
  const [triggerGetEmployees] = useLazyGetEmployeesQuery();

  const [rows, setRows] = React.useState<EmployeeRowType[]>([]); // Stores all loaded rows
  const [skipCount, setSkipCount] = React.useState(0); // Tracks the number of items to skip
  const [loading, setLoading] = React.useState(false); // Prevents multiple simultaneous data fetches

  const loadData = async () => {
    if (!loading) {
      try {
        setLoading(true);
        const { data } = await triggerGetEmployees({
          maxResultCount: '40', // Number of items to fetch per request
          skipCount: skipCount.toString(), // Offset for pagination
        });

        if (data) {
          if (Array.isArray(data.data.items)) {
            // Append new items to existing rows
            setRows((prev) => [...prev, ...data.data.items]);
            // Increment skip count for next fetch
            setSkipCount((prev) => prev + 40);
          } else {
            console.error('Invalid data format: items is not an array', data);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Load initial data on component mount
  React.useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.fullFeatureAgGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <FullFeatureAgGrid columns={employeeColumns} rows={rows} />
    </>
  );
};

export default FullFeatureAgGridPage;
