import { Department } from '../../../../utils/enums/introduction/department';
import { Gender } from '../../../../utils/enums/introduction/gender';
import { PerformanceRating } from '../../../../utils/enums/introduction/performanceRating';
import { Position } from '../../../../utils/enums/introduction/position';
import { Status } from '../../../../utils/enums/introduction/statu';

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

// --------------------------------------------

export interface INameRequest {
  type: string;
  value: string;
}

export interface IGenderRequest {
  type: string;
  value: string;
}

// --- Date Filter için enum ve arayüzler ---

export enum DateFilterType {
  EQUALS = 'equals',
  NOT_EQUAL = 'notEqual',
  LESS_THAN = 'lessThan',
  GREATER_THAN = 'greaterThan',
  IN_RANGE = 'inRange',
  BLANK = 'blank',
  NOT_BLANK = 'notBlank',
}

export interface DateRangeValue {
  dateFrom?: string;
  dateTo?: string;
}

export interface BaseFilter<T, V = string> {
  type: T;
  value: V;
}

export type BirthDateFilter =
  | BaseFilter<DateFilterType.EQUALS, string>
  | BaseFilter<DateFilterType.NOT_EQUAL, string>
  | BaseFilter<DateFilterType.LESS_THAN, string>
  | BaseFilter<DateFilterType.GREATER_THAN, string>
  | BaseFilter<DateFilterType.IN_RANGE, DateRangeValue>
  | BaseFilter<DateFilterType.BLANK, string>
  | BaseFilter<DateFilterType.NOT_BLANK, string>;

// --------------------------------------------

export interface employeesRequestDto {
  maxResultCount: string;
  skipCount: string;
  name?: INameRequest;
  gender?: IGenderRequest;
  birthDate?: BirthDateFilter;
}

export interface employeesResponseDto {
  data: {
    items: EmployeeRowType[];
    totalCount: number;
  };
}
