import { ApiSliceGetListMethodRequestDto } from '../../../apiSliceHelper/getMethodsAndTypes/getList/getListRequestType';
import { ApiSliceGetReportMethodRequestDto } from '../../../apiSliceHelper/getMethodsAndTypes/getReport/getReportRequestType';

export interface employeesRequestDto extends ApiSliceGetListMethodRequestDto {}

export interface employeesReportRequestDto extends ApiSliceGetReportMethodRequestDto {}
