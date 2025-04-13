import { AgGridColDef } from '../../../../../components/custom/agGrid/helper/colDef/agGridColDef';

export const employeeColumns: AgGridColDef[] = [
  { field: 'id', cellDataType: 'text', headerName: 'introduction.id2', width: 150, hide: false },
  { field: 'name', cellDataType: 'text', headerName: 'introduction.name', width: 150 },
  { field: 'surname', cellDataType: 'text', headerName: 'introduction.surname', width: 150 },
  { field: 'gender', cellDataType: 'text', headerName: 'introduction.gender', width: 150 },
  { field: 'age', cellDataType: 'text', headerName: 'introduction.age', width: 150 },
  { field: 'birthDate', cellDataType: 'text', headerName: 'introduction.birthDate', width: 150 },
  { field: 'phone', cellDataType: 'text', headerName: 'introduction.phone', width: 150 },
  { field: 'email', cellDataType: 'text', headerName: 'introduction.email', width: 250 },
  { field: 'address', cellDataType: 'text', headerName: 'introduction.address', width: 350 },
  { field: 'department', cellDataType: 'text', headerName: 'introduction.department', width: 150 },
  { field: 'position', cellDataType: 'text', headerName: 'introduction.position', width: 150 },
  { field: 'salary', cellDataType: 'text', headerName: 'introduction.salary', width: 150 },
  { field: 'status', cellDataType: 'text', headerName: 'introduction.status', width: 150 },
  { field: 'performanceRating', cellDataType: 'text', headerName: 'introduction.performanceRating', width: 200 },
];
