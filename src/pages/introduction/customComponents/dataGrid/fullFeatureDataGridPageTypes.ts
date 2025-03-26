import { DataGridCompColDef } from '../../../../components/base/dataGrid/dataGridHelper';

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
  {
    id: 10000000003,
    name: 'Mehmet',
    surname: 'Demir',
    gender: Gender.MALE,
    age: '35',
    birthDate: '10.01.1987',
    phone: '5339876543',
    email: 'mehmet_demir@gmail.com',
    address: 'Çankaya Mahallesi, Atatürk Caddesi, No:45, Ankara',
    department: Department.FINANCE,
    position: Position.ACCOUNTANT,
    salary: 55000,
    status: EmployeeStatus.ON_LEAVE,
    performanceRating: PerformanceRating.AVERAGE,
  },
  {
    id: 10000000004,
    name: 'Zeynep',
    surname: 'Kaya',
    gender: Gender.FEMALE,
    age: '32',
    birthDate: '20.09.1990',
    phone: '5354567890',
    email: 'zeynep_kaya@gmail.com',
    address: 'Karşıyaka Mahallesi, Sahil Caddesi, No:67, İzmir',
    department: Department.MARKETING,
    position: Position.MARKETING_SPECIALIST,
    salary: 48000,
    status: EmployeeStatus.ACTIVE,
    performanceRating: PerformanceRating.EXCELLENT,
  },
  {
    id: 10000000005,
    name: 'Ali',
    surname: 'Öztürk',
    gender: Gender.MALE,
    age: '40',
    birthDate: '05.12.1982',
    phone: '5367890123',
    email: 'ali_ozturk@gmail.com',
    address: 'Nilüfer Mahallesi, Gazi Caddesi, No:89, Bursa',
    department: Department.SALES,
    position: Position.SALES_REPRESENTATIVE,
    salary: 52000,
    status: EmployeeStatus.TERMINATED,
    performanceRating: PerformanceRating.POOR,
  },
  {
    id: 10000000006,
    name: 'Fatma',
    surname: 'Şahin',
    gender: Gender.FEMALE,
    age: '38',
    birthDate: '30.07.1984',
    phone: '5378901234',
    email: 'fatma_sahin@gmail.com',
    address: 'Muratpaşa Mahallesi, Cumhuriyet Caddesi, No:12, Antalya',
    department: Department.OPERATIONS,
    position: Position.MANAGER,
    salary: 75000,
    status: EmployeeStatus.ACTIVE,
    performanceRating: PerformanceRating.GOOD,
  },
  {
    id: 10000000007,
    name: 'Can',
    surname: 'Yıldız',
    gender: Gender.MALE,
    age: '27',
    birthDate: '18.04.1995',
    phone: '5389012345',
    email: 'can_yildiz@gmail.com',
    address: 'Konak Mahallesi, İzmir Caddesi, No:34, İzmir',
    department: Department.IT,
    position: Position.JUNIOR_DEVELOPER,
    salary: 35000,
    status: EmployeeStatus.ACTIVE,
    performanceRating: PerformanceRating.AVERAGE,
  },
  {
    id: 10000000008,
    name: 'Elif',
    surname: 'Aydın',
    gender: Gender.FEMALE,
    age: '33',
    birthDate: '22.11.1989',
    phone: '5390123456',
    email: 'elif_aydin@gmail.com',
    address: 'Yenişehir Mahallesi, Atatürk Caddesi, No:56, Mersin',
    department: Department.CUSTOMER_SERVICE,
    position: Position.TEAM_LEAD,
    salary: 58000,
    status: EmployeeStatus.RESIGNED,
    performanceRating: PerformanceRating.EXCELLENT,
  },
];
