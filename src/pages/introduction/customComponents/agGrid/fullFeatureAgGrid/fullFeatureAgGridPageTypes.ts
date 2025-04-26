import { AgGridColDefType } from '../../../../../components/custom/agGrid/types/agGridColDefType';
import {
  Department,
  Gender,
  PerformanceRating,
  Position,
  Status,
} from '../../../../../redux/slices/services/introductionApiDto';

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
        buttons: ['apply', 'clear'],
      },
    },
  },
  { field: 'surname', cellDataType: 'text', headerName: 'introduction.surname', width: 150 },
  {
    field: 'gender',
    cellDataType: 'text',
    headerName: 'introduction.gender',
    width: 150,
    valueFormatter: (params) => {
      const genderValue: `${Gender}` = params.value;

      if (genderValue === 'MALE') {
        return 'introductionAgGrid.male';
      } else if (genderValue === 'FEMALE') {
        return 'introductionAgGrid.female';
      } else {
        return params.value;
      }
    },
    customFilter: {
      name: 'gender',
      componentType: 'agRadioCustomFilter',
      componentProps: {
        initialFilterValue: 'MALE',
        defaultOption: 'equals',
        filterOptions: ['equals'],
        label: 'introductionAgGrid.chooseAGender',
        items: [
          { label: 'introductionAgGrid.male', value: 'MALE' },
          { label: 'introductionAgGrid.female', value: 'FEMALE' },
        ],
        buttons: ['apply', 'clear'],
      },
    },
  },
  { field: 'age', cellDataType: 'text', headerName: 'introduction.age', width: 150 },
  { field: 'birthDate', cellDataType: 'text', headerName: 'introduction.birthDate', width: 150 },
  { field: 'phone', cellDataType: 'text', headerName: 'introduction.phone', width: 150 },
  { field: 'email', cellDataType: 'text', headerName: 'introduction.email', width: 250 },
  { field: 'address', cellDataType: 'text', headerName: 'introduction.address', width: 350 },
  {
    field: 'department',
    cellDataType: 'text',
    headerName: 'introduction.department',
    width: 150,
    valueFormatter: (params) => {
      const departmentValue: `${Department}` = params.value;

      if (departmentValue === 'IT') {
        return 'introductionAgGrid.it';
      } else if (departmentValue === 'HR') {
        return 'introductionAgGrid.hr';
      } else if (departmentValue === 'FINANCE') {
        return 'introductionAgGrid.finance';
      } else if (departmentValue === 'MARKETING') {
        return 'introductionAgGrid.marketing';
      } else if (departmentValue === 'SALES') {
        return 'introductionAgGrid.sales';
      } else if (departmentValue === 'OPERATIONS') {
        return 'introductionAgGrid.operations';
      } else if (departmentValue === 'CUSTOMER_SERVICE') {
        return 'introductionAgGrid.customerService';
      } else {
        return params.value;
      }
    },
  },
  {
    field: 'position',
    cellDataType: 'text',
    headerName: 'introduction.position',
    width: 150,
    valueFormatter: (params) => {
      const positionValue: `${Position}` = params.value;

      if (positionValue === 'JUNIOR_DEVELOPER') {
        return 'introductionAgGrid.juniorDeveloper';
      } else if (positionValue === 'SENIOR_DEVELOPER') {
        return 'introductionAgGrid.seniorDeveloper';
      } else if (positionValue === 'TEAM_LEAD') {
        return 'introductionAgGrid.teamLead';
      } else if (positionValue === 'MANAGER') {
        return 'introductionAgGrid.manager';
      } else if (positionValue === 'DIRECTOR') {
        return 'introductionAgGrid.director';
      } else if (positionValue === 'CEO') {
        return 'introductionAgGrid.ceo';
      } else if (positionValue === 'HR_SPECIALIST') {
        return 'introductionAgGrid.hrSpecialist';
      } else if (positionValue === 'ACCOUNTANT') {
        return 'introductionAgGrid.accountant';
      } else if (positionValue === 'MARKETING_SPECIALIST') {
        return 'introductionAgGrid.marketingSpecialist';
      } else if (positionValue === 'SALES_REPRESENTATIVE') {
        return 'introductionAgGrid.salesRepresentative';
      } else {
        return params.value;
      }
    },
  },
  { field: 'salary', cellDataType: 'text', headerName: 'introduction.salary', width: 150 },
  {
    field: 'status',
    cellDataType: 'boolean',
    headerName: 'introduction.status',
    width: 150,
    valueFormatter: (params) => {
      const statusValue: `${Status}` = params.value;

      if (statusValue === 'ACTIVE') {
        return 'introductionAgGrid.active';
      } else if (statusValue === 'ON_LEAVE') {
        return 'introductionAgGrid.onLeave';
      } else if (statusValue === 'RESIGNED') {
        return 'introductionAgGrid.resigned';
      } else if (statusValue === 'TERMINATED') {
        return 'introductionAgGrid.terminated';
      } else {
        return params.value;
      }
    },
  },
  {
    field: 'performanceRating',
    cellDataType: 'text',
    headerName: 'introduction.performanceRating',
    width: 200,
    valueFormatter: (params) => {
      const performanceRatingValue: `${PerformanceRating}` = params.value;

      if (performanceRatingValue === 'EXCELLENT') {
        return 'introductionAgGrid.excellent';
      } else if (performanceRatingValue === 'GOOD') {
        return 'introductionAgGrid.good';
      } else if (performanceRatingValue === 'AVERAGE') {
        return 'introductionAgGrid.average';
      } else if (performanceRatingValue === 'BELOW_AVERAGE') {
        return 'introductionAgGrid.belowAverage';
      } else if (performanceRatingValue === 'POOR') {
        return 'introductionAgGrid.poor';
      } else {
        return params.value;
      }
    },
  },
];
