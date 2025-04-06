import React from 'react';
import { employeeColumns, employeeRows, ListDataGridRef } from './listDataGridPageTypes';
import ListDataGrid from '../../../../../components/introduction/dataGrid/listDataGrid/ListDataGrid';
import TypographyComp from '../../../../../components/base/typography/Typography';
import DividerComp from '../../../../../components/base/divider/Divider';
import BoxComp from '../../../../../components/base/box/Box';
import MoodIcon from '@mui/icons-material/Mood';
import { useLazyGetEmployeesQuery } from '../../../../../redux/slices/services/introductionApiSlices';

const ListDataGridPage: React.FC = () => {
  const listDataGridRef = React.useRef<ListDataGridRef>(null);

  const [triggerGetEmployees] = useLazyGetEmployeesQuery();

  const handleView = (row: unknown) => {
    console.log('View clicked for:', row);
  };

  const handleEdit = (row: unknown) => {
    console.log('Edit clicked for:', row);
  };

  const handleDelete = (row: unknown) => {
    console.log('Delete clicked for:', row);
  };

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await triggerGetEmployees({
        maxResultCount: '40',
        skipCount: '0',
      });

      console.log(data);
    };

    getData();
  }, []);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.listDataGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <BoxComp sx={{ height: 500, width: '100%' }}>
        <ListDataGrid
          ref={listDataGridRef}
          rows={employeeRows}
          columns={employeeColumns}
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
      </BoxComp>
    </>
  );
};

export default ListDataGridPage;
