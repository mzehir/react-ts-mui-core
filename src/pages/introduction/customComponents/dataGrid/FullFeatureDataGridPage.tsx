import React, { useRef } from 'react';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import BoxComp from '../../../../components/base/box/Box';
import FullFeatureDataGrid from '../../../../components/introduction/dataGrid/fullFeatureDataGrid/FullFeatureDataGrid';
import {
  FullFeatureDataGridBaseRow,
  FullFeatureDataGridProps,
  FullFeatureDataGridRef,
} from '../../../../components/introduction/dataGrid/fullFeatureDataGrid/fullFeatureDataGridTypes';

import { GridColDef } from '@mui/x-data-grid';

interface CustomRow extends FullFeatureDataGridBaseRow {
  id: number;
  firstName: string | null;
  lastName: string;
  age: number | null;
}

const columns: GridColDef<CustomRow>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows: CustomRow[] = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const FullFeatureDataGridPage: React.FC = () => {
  const fullFeatureDataGridRef = useRef<FullFeatureDataGridRef>(null);

  const handleSomeAction = () => {
    const dataGrid = fullFeatureDataGridRef.current?.getDataGrid();
    if (dataGrid) {
      console.log(dataGrid);
      console.log(dataGrid.getSelectedRows());
    }
  };

  const onCellClick: FullFeatureDataGridProps['onCellClick'] = (params, event, details) => {
    console.log(params);
    console.log(event);
    console.log(details);
  };
  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.fullFeatureDataGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <button
        onClick={() => {
          handleSomeAction();
        }}
      >
        Göster
      </button>

      <BoxComp sx={{ height: 400, width: '100%' }}>
        <FullFeatureDataGrid rows={rows} columns={columns} ref={fullFeatureDataGridRef} onCellClick={onCellClick} />
      </BoxComp>
    </>
  );
};

export default FullFeatureDataGridPage;
