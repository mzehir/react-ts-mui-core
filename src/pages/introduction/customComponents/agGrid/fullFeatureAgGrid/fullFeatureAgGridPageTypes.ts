import { AgGridColDefType } from '../../../../../components/custom/agGrid/types/agGridColDefType';

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
        defaultOption: 'equals',
        filterOptions: ['equals', 'notEqual', 'contains', 'notContains', 'startsWith', 'endsWith', 'blank', 'notBlank'],
        filterPlaceholder: 'Filtrele',
        maxNumConditions: 1,
        buttons: ['apply', 'clear', 'reset', 'cancel'],
      },
    },
  },
  { field: 'surname', cellDataType: 'text', headerName: 'introduction.surname', width: 150 },
  { field: 'gender', cellDataType: 'text', headerName: 'introduction.gender', width: 150 },
  {
    field: 'age',
    cellDataType: 'number',
    headerName: 'introduction.age',
    width: 150,
    customFilter: {
      name: 'age',
      componentType: 'agNumberColumnFilter',
      componentProps: {
        allowedCharPattern: '\\d\\.',
        defaultOption: 'equals',
        filterOptions: [
          'equals',
          'notEqual',
          'lessThan',
          'lessThanOrEqual',
          'greaterThan',
          'greaterThanOrEqual',
          'inRange',
          'blank',
          'notBlank',
        ],
        filterPlaceholder: 'Filtrele',
        maxNumConditions: 1,
        buttons: ['apply', 'clear', 'reset', 'cancel'],
      },
    },
  },
  { field: 'birthDate', cellDataType: 'text', headerName: 'introduction.birthDate', width: 150 },
  { field: 'phone', cellDataType: 'text', headerName: 'introduction.phone', width: 150 },
  { field: 'email', cellDataType: 'text', headerName: 'introduction.email', width: 250 },
  { field: 'address', cellDataType: 'text', headerName: 'introduction.address', width: 350 },
  { field: 'department', cellDataType: 'text', headerName: 'introduction.department', width: 150 },
  { field: 'position', cellDataType: 'text', headerName: 'introduction.position', width: 150 },
  { field: 'salary', cellDataType: 'text', headerName: 'introduction.salary', width: 150 },
  {
    field: 'status',
    cellDataType: 'boolean',
    headerName: 'introduction.status',
    width: 150,
    customFilter: {
      name: 'status',
      componentType: 'agRadioCustomFilter',
      componentProps: {
        defaultOption: 'equals',
        label: 'Bir statü seç',
        items: [
          { label: 'Aktif', value: 'active' },
          { label: 'Pasif', value: 'passive' },
        ],
        buttons: ['apply', 'clear', 'reset', 'cancel'],
      },
    },
  },
  { field: 'performanceRating', cellDataType: 'text', headerName: 'introduction.performanceRating', width: 200 },
];
