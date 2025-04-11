import { AgGridCompColDef } from '../../../../../components/custom/agGrid/agGridHelper';

export const employeeColumns: AgGridCompColDef[] = [
  { field: 'id', headerName: 'introduction.id2', width: 150, editable: false, hide: true, cellDataType: 'text' },
  { field: 'name', headerName: 'introduction.name', width: 150, editable: true, cellDataType: 'text' },
  { field: 'surname', headerName: 'introduction.surname', width: 150, editable: false, cellDataType: 'text' },
  {
    field: 'gender',
    headerName: 'introduction.gender',
    width: 150,
    editable: false,
    cellDataType: 'text',
    valueFormatter: (params) => {
      if (params.value === 'male') {
        return 'Erkek';
      } else {
        return 'Kadın';
      }
    },
  },
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
];
