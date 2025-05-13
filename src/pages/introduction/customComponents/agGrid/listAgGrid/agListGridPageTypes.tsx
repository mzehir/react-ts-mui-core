import { CustomCellRendererProps } from 'ag-grid-react';
import { ColumnType } from '../../../../../components/other/agGrid/helper/column/columnType';
import { Gender } from '../../../../../utils/enums/introduction/gender';
import { Department } from '../../../../../utils/enums/introduction/department';
import { Position } from '../../../../../utils/enums/introduction/position';
import { Status } from '../../../../../utils/enums/introduction/statu';
import { PerformanceRating } from '../../../../../utils/enums/introduction/performanceRating';
import RatingComp from '../../../../../components/base/rating/Rating';
import BoxComp from '../../../../../components/base/box/Box';
import TypographyComp from '../../../../../components/base/typography/Typography';
import ChipComp from '../../../../../components/base/chip/Chip';
import { ChipCompColor } from '../../../../../components/base/chip/chipHelper';
import StarIcon from '@mui/icons-material/Star';

export const employeeColumns: ColumnType[] = [
  {
    field: 'id',
    cellDataType: 'number',
    headerName: 'introduction.id2',
    width: 150,
    hide: false,
    valueFormatterType: 'numberFormatter',
  },
  {
    field: 'name',
    cellDataType: 'text',
    headerName: 'introduction.name',
    width: 150,
    customFilter: {
      name: 'name',
      componentType: 'textColumnFilter',
      componentProps: {
        // initialFilterFields: {
        //   filter: 'Mehmet',
        // },
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
    customValueFormatter: (params) => {
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
      componentType: 'radioCustomFilter',
      componentProps: {
        // initialFilterFields: {
        //   filter: 'MALE',
        // },
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
  {
    field: 'birthDate',
    cellDataType: 'dateString',
    headerName: 'introduction.birthDate',
    width: 150,
    valueFormatterType: 'dateStringFormatter',
    customFilter: {
      name: 'name',
      componentType: 'dateColumnFilter',
      componentProps: {
        // initialFilterFields: {
        //   dateFrom: '1990-02-14 00:00:00',
        //   dateTo: '1997-12-31 00:00:00',
        // },
        defaultOption: 'inRange',
        filterOptions: ['equals', 'notEqual', 'lessThan', 'greaterThan', 'inRange', 'blank', 'notBlank'],
        filterPlaceholder: 'Filtrele',
        maxNumConditions: 1,
        buttons: ['apply', 'clear'],
        //
        minValidYear: 1900,
        maxValidYear: 2500,
      },
    },
  },
  {
    field: 'phone',
    cellDataType: 'text',
    headerName: 'introduction.phone',
    width: 150,
    valueFormatterType: 'phoneFormatter',
  },
  { field: 'email', cellDataType: 'text', headerName: 'introduction.email', width: 250 },
  { field: 'address', cellDataType: 'text', headerName: 'introduction.address', width: 350 },
  {
    field: 'department',
    cellDataType: 'text',
    headerName: 'introduction.department',
    width: 150,
    customValueFormatter: (params) => {
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
    customValueFormatter: (params) => {
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
  {
    field: 'salary',
    cellDataType: 'number',
    headerName: 'introduction.salary',
    width: 150,
    valueFormatterType: 'currencyFormatter',
    customFilter: {
      name: 'salary',
      componentType: 'numberColumnFilter',
      componentProps: {
        // initialFilterFields: {
        //   filter: 50000,
        //   filterTo: 75000,
        // },
        defaultOption: 'inRange',
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
        buttons: ['apply', 'clear'],
      },
    },
  },
  {
    field: 'status',
    cellDataType: 'text',
    headerName: 'introduction.status',
    width: 150,
    cellRenderer: (params: CustomCellRendererProps) => {
      const status: `${Status}` = params.value;
      let statusLabel: string = '';
      let statusColor: ChipCompColor = 'primary';

      if (status === 'ACTIVE') {
        statusLabel = 'introductionAgGrid.active';
        statusColor = 'success';
      } else if (status === 'ON_LEAVE') {
        statusLabel = 'introductionAgGrid.onLeave';
        statusColor = 'warning';
      } else if (status === 'RESIGNED') {
        statusLabel = 'introductionAgGrid.resigned';
        statusColor = 'error';
      } else if (status === 'TERMINATED') {
        statusLabel = 'introductionAgGrid.terminated';
        statusColor = 'secondary';
      } else {
        statusLabel = 'introductionAgGrid.active';
        statusColor = 'success';
      }

      return (
        <BoxComp sx={{ height: '100%', display: 'flex', gap: '25px', alignItems: 'center' }}>
          <ChipComp variant="filled" color={statusColor} label={statusLabel} size="small" />
        </BoxComp>
      );
    },
  },
  {
    field: 'performanceRating',
    cellDataType: 'text',
    headerName: 'introduction.performanceRating',
    width: 300,
    cellRenderer: (params: CustomCellRendererProps) => {
      const performanceRating: `${PerformanceRating}` = params.value;
      let performanceRatingLabel: string = '';
      let performanceRatingValue: number = 0;

      if (performanceRating === 'EXCELLENT') {
        performanceRatingLabel = 'introductionAgGrid.excellent';
        performanceRatingValue = 5;
      } else if (performanceRating === 'GOOD') {
        performanceRatingLabel = 'introductionAgGrid.good';
        performanceRatingValue = 4;
      } else if (performanceRating === 'AVERAGE') {
        performanceRatingLabel = 'introductionAgGrid.average';
        performanceRatingValue = 3;
      } else if (performanceRating === 'BELOW_AVERAGE') {
        performanceRatingLabel = 'introductionAgGrid.belowAverage';
        performanceRatingValue = 2;
      } else if (performanceRating === 'POOR') {
        performanceRatingLabel = 'introductionAgGrid.poor';
        performanceRatingValue = 1;
      } else {
        performanceRatingLabel = 'introductionAgGrid.poor';
        performanceRatingValue = 0;
      }

      return (
        <BoxComp sx={{ height: '100%', display: 'flex', gap: '25px', alignItems: 'center' }}>
          <RatingComp
            readOnly
            value={performanceRatingValue}
            size="medium"
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />

          <TypographyComp>{performanceRatingLabel}</TypographyComp>
        </BoxComp>
      );
    },
  },
];
