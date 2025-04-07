enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

enum Department {
  IT = 'IT',
  HR = 'HR',
  FINANCE = 'Finance',
  MARKETING = 'Marketing',
  SALES = 'Sales',
  OPERATIONS = 'Operations',
  CUSTOMER_SERVICE = 'Customer Service',
}

enum Position {
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

enum EmployeeStatus {
  ACTIVE = 'Active',
  ON_LEAVE = 'On Leave',
  RESIGNED = 'Resigned',
  TERMINATED = 'Terminated',
}

enum PerformanceRating {
  EXCELLENT = 'Excellent',
  GOOD = 'Good',
  AVERAGE = 'Average',
  BELOW_AVERAGE = 'Below Average',
  POOR = 'Poor',
}

interface EmployeeRowType {
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

export interface employeesResponseDto {
  data: {
    items: EmployeeRowType[];
    totalCount: number;
  };
}
