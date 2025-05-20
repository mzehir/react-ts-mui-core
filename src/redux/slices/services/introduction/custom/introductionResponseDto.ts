import { ApiSliceGetListMethodResponseDto } from '../../../apiSliceHelper/getMethodsAndTypes/getList/getListResponseType';
import { Department } from '../../../../../utils/enums/introduction/department';
import { Gender } from '../../../../../utils/enums/introduction/gender';
import { PerformanceRating } from '../../../../../utils/enums/introduction/performanceRating';
import { Position } from '../../../../../utils/enums/introduction/position';
import { Status } from '../../../../../utils/enums/introduction/statu';

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
  status: Status;
  performanceRating: PerformanceRating;
}

export type employeesResponseDto = ApiSliceGetListMethodResponseDto<EmployeeRowType>;

export interface EmployeeReportRowType {
  id: number;
  columnName: string;
  minValue: number;
  maxValue: number;
  averageValue: number;
  sumValue: number;
  rowCount: number;
}

export type employeesReportResponseDto = ApiSliceGetListMethodResponseDto<EmployeeReportRowType>;
