enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

enum Department {
  IT = 'IT',
  HR = 'HR',
  FINANCE = 'FINANCE',
  MARKETING = 'MARKETING',
  SALES = 'SALES',
  OPERATIONS = 'OPERATIONS',
  CUSTOMER_SERVICE = 'CUSTOMER_SERVICE',
}

enum Position {
  JUNIOR_DEVELOPER = 'JUNIOR_DEVELOPER',
  SENIOR_DEVELOPER = 'SENIOR_DEVELOPER',
  TEAM_LEAD = 'TEAM_LEAD',
  MANAGER = 'MANAGER',
  DIRECTOR = 'DIRECTOR',
  CEO = 'CEO',
  HR_SPECIALIST = 'HR_SPECIALIST',
  ACCOUNTANT = 'ACCOUNTANT',
  MARKETING_SPECIALIST = 'MARKETING_SPECIALIST',
  SALES_REPRESENTATIVE = 'SALES_REPRESENTATIVE',
}

enum Status {
  ACTIVE = 'ACTIVE',
  ON_LEAVE = 'ON_LEAVE',
  RESIGNED = 'RESIGNED',
  TERMINATED = 'TERMINATED',
}

enum PerformanceRating {
  EXCELLENT = 'EXCELLENT',
  GOOD = 'GOOD',
  AVERAGE = 'AVERAGE',
  BELOW_AVERAGE = 'BELOW_AVERAGE',
  POOR = 'POOR',
}

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
  status: Status;
  performanceRating: PerformanceRating;
}

export interface employeesResponseDto {
  data: {
    items: EmployeeRowType[];
    totalCount: number;
  };
}

export interface INameRequest {
  type: string;
  value: string;
}

export interface employeesRequestDto {
  maxResultCount: string;
  skipCount: string;
  name?: INameRequest;
}
