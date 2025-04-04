import { DataGridCompColDef } from '../../../../../components/base/dataGrid/dataGridHelper';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum Department {
  IT = 'IT',
  HR = 'HR',
  FINANCE = 'Finance',
  MARKETING = 'Marketing',
  SALES = 'Sales',
  OPERATIONS = 'Operations',
  CUSTOMER_SERVICE = 'Customer Service',
}

export enum Position {
  JUNIOR_DEVELOPER = 'Junior Developer',
  SENIOR_DEVELOPER = 'Senior Developer',
  TEAM_LEAD = 'Team Lead',
  MANAGER = 'Manager',
  DIRECTOR = 'Director',
  CEO = 'CEO',
  HR_SPECIALIST = 'HR Specialist',
  ACCOUNTANT = 'Accountant',
  MARKETING_SPECIALIST = 'Marketing Specialist',
  SALES_REPRESENTATIVE = 'Sales Representative',
}

export enum EmployeeStatus {
  ACTIVE = 'Active',
  ON_LEAVE = 'On Leave',
  RESIGNED = 'Resigned',
  TERMINATED = 'Terminated',
}

export enum PerformanceRating {
  EXCELLENT = 'Excellent',
  GOOD = 'Good',
  AVERAGE = 'Average',
  BELOW_AVERAGE = 'Below Average',
  POOR = 'Poor',
}

export const employeeColumns: DataGridCompColDef[] = [
  { field: 'id', headerName: 'introduction.id2', width: 150, editable: false },
  { field: 'name', headerName: 'introduction.name', width: 150, editable: false },
  { field: 'surname', headerName: 'introduction.surname', width: 150, editable: false },
  { field: 'gender', headerName: 'introduction.gender', width: 150, editable: false },
  { field: 'age', headerName: 'introduction.age', width: 150, editable: false },
  { field: 'birthDate', headerName: 'introduction.birthDate', width: 150, editable: false },
  { field: 'phone', headerName: 'introduction.phone', width: 150, editable: false },
  { field: 'email', headerName: 'introduction.email', width: 250, editable: false },
  { field: 'address', headerName: 'introduction.address', width: 350, editable: false },
  { field: 'department', headerName: 'introduction.department', width: 150, editable: false },
  { field: 'position', headerName: 'introduction.position', width: 150, editable: false },
  { field: 'salary', headerName: 'introduction.salary', width: 150, editable: false },
  { field: 'status', headerName: 'introduction.status', width: 150, editable: false },
  { field: 'performanceRating', headerName: 'introduction.performanceRating', width: 200, editable: false },
];

export interface EmployeeRowType {
  id: number;
  name: string;
  surname: string;
  gender: Gender;
  age: string;
  birthDate: string;
  phone: string;
  email: string;
  address: string;
  department: Department;
  position: Position;
  salary: number;
  status: EmployeeStatus;
  performanceRating: PerformanceRating;
}

export const employeeRows: EmployeeRowType[] = [
  {
    id: 10000000001,
    name: 'Kemal',
    surname: 'Sarı',
    gender: Gender.MALE,
    age: '30',
    birthDate: '25.03.1992',
    phone: '5419525921',
    email: 'kemal_sari@gmail.com',
    address: 'Ağalar Mahallesi, Cumhuriyet Caddesi, No:79, Kocaali/SAKARYA',
    department: Department.IT,
    position: Position.SENIOR_DEVELOPER,
    salary: 60000.45,
    status: EmployeeStatus.ACTIVE,
    performanceRating: PerformanceRating.EXCELLENT,
  },
  {
    id: 10000000002,
    name: 'Ayşe',
    surname: 'Yılmaz',
    gender: Gender.FEMALE,
    age: '28',
    birthDate: '15.06.1994',
    phone: '5321234567',
    email: 'ayse_yilmaz@gmail.com',
    address: 'Kadıköy Mahallesi, İstiklal Caddesi, No:123, İstanbul',
    department: Department.HR,
    position: Position.HR_SPECIALIST,
    salary: 45000,
    status: EmployeeStatus.ACTIVE,
    performanceRating: PerformanceRating.GOOD,
  },
];
