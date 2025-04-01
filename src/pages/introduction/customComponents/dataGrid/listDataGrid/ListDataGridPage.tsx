import React from 'react';
import { employeeColumns, employeeRows } from './listDataGridPageTypes';
import ListDataGrid from '../../../../../components/introduction/dataGrid/listDataGrid/ListDataGrid';
import TypographyComp from '../../../../../components/base/typography/Typography';
import DividerComp from '../../../../../components/base/divider/Divider';
import BoxComp from '../../../../../components/base/box/Box';

const ListDataGridPage: React.FC = () => {
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
        <ListDataGrid rows={employeeRows} columns={employeeColumns} />
      </BoxComp>
    </>
  );
};

export default ListDataGridPage;
