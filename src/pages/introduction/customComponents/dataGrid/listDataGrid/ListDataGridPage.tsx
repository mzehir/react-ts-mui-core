import React from 'react';
import { employeeColumns, employeeRows } from './listDataGridPageTypes';
import ListDataGrid from '../../../../../components/introduction/dataGrid/listDataGrid/ListDataGrid';
import TypographyComp from '../../../../../components/base/typography/Typography';
import DividerComp from '../../../../../components/base/divider/Divider';
import BoxComp from '../../../../../components/base/box/Box';
import MoodIcon from '@mui/icons-material/Mood';

const ListDataGridPage: React.FC = () => {
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
          introduction.listDataGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <BoxComp sx={{ height: 250, width: '100%' }}>
        <ListDataGrid
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
