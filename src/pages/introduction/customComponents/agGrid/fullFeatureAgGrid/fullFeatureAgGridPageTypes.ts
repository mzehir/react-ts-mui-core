import { AgGridColDefType } from '../../../../../components/custom/agGrid/types/agGridColDefType';
import { ValueFormatterParams } from 'ag-grid-community';

export const employeeColumns: AgGridColDefType[] = [
  { field: 'id', cellDataType: 'text', headerName: 'introduction.id2', width: 150, hide: false },
  {
    field: 'name',
    cellDataType: 'text',
    headerName: 'introduction.name',
    width: 150,
    customFilter: {
      name: 'name',
      componentType: 'agTextColumnFilter',
      componentProps: {
        initialFilterValue: 'Mehmet',
        defaultOption: 'equals',
        filterOptions: ['equals', 'notEqual', 'contains', 'notContains', 'startsWith', 'endsWith', 'blank', 'notBlank'],
        filterPlaceholder: 'Filtrele',
        maxNumConditions: 1,
        buttons: ['apply', 'clear', 'reset', 'cancel'],
      },
    },
  },
  { field: 'surname', cellDataType: 'text', headerName: 'introduction.surname', width: 150 },
  {
    field: 'gender',
    cellDataType: 'text',
    headerName: 'introduction.gender',
    width: 150,
    valueFormatter: (params: ValueFormatterParams) => {
      if (params.value === 'MALE') {
        return 'Male';
      } else if (params.value === 'FEMALE') {
        return 'Female';
      } else {
        return 'params.value';
      }
    },
    customFilter: {
      name: 'gender',
      componentType: 'agRadioCustomFilter',
      componentProps: {
        initialFilterValue: 'MALE',
        defaultOption: 'equals',
        filterOptions: ['equals'],
        label: 'Bir cinsiyet seç',
        items: [
          { label: 'Erkek', value: 'MALE' },
          { label: 'Kadın', value: 'FEMALE' },
        ],
        buttons: ['apply', 'clear', 'reset', 'cancel'],
      },
    },
  },
  { field: 'age', cellDataType: 'text', headerName: 'introduction.age', width: 150 },
  { field: 'birthDate', cellDataType: 'text', headerName: 'introduction.birthDate', width: 150 },
  { field: 'phone', cellDataType: 'text', headerName: 'introduction.phone', width: 150 },
  { field: 'email', cellDataType: 'text', headerName: 'introduction.email', width: 250 },
  { field: 'address', cellDataType: 'text', headerName: 'introduction.address', width: 350 },
  { field: 'department', cellDataType: 'text', headerName: 'introduction.department', width: 150 },
  { field: 'position', cellDataType: 'text', headerName: 'introduction.position', width: 150 },
  { field: 'salary', cellDataType: 'text', headerName: 'introduction.salary', width: 150 },
  { field: 'status', cellDataType: 'boolean', headerName: 'introduction.status', width: 150 },
  { field: 'performanceRating', cellDataType: 'text', headerName: 'introduction.performanceRating', width: 200 },
];
