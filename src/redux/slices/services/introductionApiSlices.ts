import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Toastify } from '../../../components/custom/toastify/Toastify';
import { ToastCompProps } from '../../../components/custom/toastify/toastifyHelper';

const baseUrl = 'http://localhost:3000/api';
const defaultContentType = 'application/json; charset=UTF-8';

interface EndpointMessage {
  successMessage?: string;
  errorMessage?: string;
}

interface ExtraOptions {
  headersContentType?: 'none' | 'custom';
  messages?: EndpointMessage;
}

const runToast = (props: ToastCompProps) => {
  Toastify({
    ...props,
    isTranslation: true,
    theme: 'colored',
  });
};

const baseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: ExtraOptions = {}) => {
  try {
    const baseQueryConfig = fetchBaseQuery({
      baseUrl,
      prepareHeaders: (headers) => {
        if (extraOptions.headersContentType !== 'none') {
          headers.set('Content-Type', defaultContentType);
        }
        return headers;
      },
    });

    const result = await baseQueryConfig(args, api, extraOptions);
    if (extraOptions?.messages?.successMessage) {
      runToast({ type: 'success', message: extraOptions.messages.successMessage });
    }
    return result;
  } catch (error) {
    if (extraOptions?.messages?.errorMessage) {
      runToast({ type: 'error', message: extraOptions.messages.errorMessage });
    }
    return { error: { status: 'FETCH_ERROR', error: error } };
  }
};

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

export interface employeesResponseDto {
  data: {
    items: EmployeeRowType[];
    totalCount: number;
  };
}

export const introductionApi = createApi({
  reducerPath: 'introductionApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    // http://localhost:3000/api/employees?maxResultCount=10&skipCount=10
    getEmployees: builder.query<employeesResponseDto, { maxResultCount: string; skipCount: string }>({
      query: ({ maxResultCount, skipCount }) => `/employees?maxResultCount=${maxResultCount}&skipCount=${skipCount}`,
      extraOptions: {
        headersContentType: 'none',
        messages: {
          successMessage: 'introduction.fetchPostsByIdSuccess',
          errorMessage: 'introduction.fetchPostsByIdFailure',
        },
      },
    }),
  }),
});

export const { useGetEmployeesQuery, useLazyGetEmployeesQuery } = introductionApi;
