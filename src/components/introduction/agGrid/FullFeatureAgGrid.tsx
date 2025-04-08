import React from 'react';
import { useLazyGetEmployeesQuery } from '../../../redux/slices/services/introductionApiSlices';
import { EmployeeRowType } from '../../../redux/slices/services/introductionApiDto';
import useLanguageContext from '../../../hooks/useLanguageContext';

import { fullFeatureAgGridPropsPrepareColumn } from './fullFeatureAgGridMethods';
import AgGridComp from '../../custom/agGrid/AgGrid';
import { AgGridCompColDef } from '../../custom/agGrid/agGridHelper';
import BoxComp from '../../base/box/Box';

const FullFeatureAgGrid: React.FC = () => {
  const { translate } = useLanguageContext();

  const [triggerGetEmployees] = useLazyGetEmployeesQuery();

  const [rows, setRows] = React.useState<EmployeeRowType[]>([]); // Stores all loaded rows
  const [skipCount, setSkipCount] = React.useState(0); // Tracks the number of items to skip
  const [loading, setLoading] = React.useState(false); // Prevents multiple simultaneous data fetches

  // Function to load more data when scrolling
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

  const [columns] = React.useState<AgGridCompColDef[]>([
    { field: 'id', headerName: 'introduction.id2', width: 150, editable: false, hide: true, cellDataType: 'text' },
    { field: 'name', headerName: 'introduction.name', width: 150, editable: true, cellDataType: 'text' },
    { field: 'surname', headerName: 'introduction.surname', width: 150, editable: false, cellDataType: 'text' },
    { field: 'gender', headerName: 'introduction.gender', width: 150, editable: false, cellDataType: 'text' },
    { field: 'age', headerName: 'introduction.age', width: 150, editable: false, cellDataType: 'text' },
    { field: 'birthDate', headerName: 'introduction.birthDate', width: 150, editable: false, cellDataType: 'text' },
    { field: 'phone', headerName: 'introduction.phone', width: 150, editable: false, cellDataType: 'text' },
    { field: 'email', headerName: 'introduction.email', width: 250, editable: false, cellDataType: 'text' },
    { field: 'address', headerName: 'introduction.address', width: 350, editable: false, cellDataType: 'text' },
    { field: 'department', headerName: 'introduction.department', width: 150, editable: false, cellDataType: 'text' },
    { field: 'position', headerName: 'introduction.position', width: 150, editable: false, cellDataType: 'text' },
    { field: 'salary', headerName: 'introduction.salary', width: 150, editable: false, cellDataType: 'text' },
    { field: 'status', headerName: 'introduction.status', width: 150, editable: false, cellDataType: 'text' },
    {
      field: 'performanceRating',
      headerName: 'introduction.performanceRating',
      width: 200,
      editable: false,
      cellDataType: 'text',
    },
  ]);

  const preparedColumns = React.useMemo(() => {
    const preparedCols = columns.map((column) => ({
      ...fullFeatureAgGridPropsPrepareColumn(column),
      headerName: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
      headerTooltip: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
    }));

    return preparedCols;
  }, [columns, translate]);

  return (
    <BoxComp sx={{ width: '100%', height: '80%' }}>
      <AgGridComp columnDefs={preparedColumns} rowData={rows} />
    </BoxComp>
  );
};

export default FullFeatureAgGrid;
