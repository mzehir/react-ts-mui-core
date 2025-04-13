import { FilterParamsAgTextColumnFilter } from './section/agTextColumnFilter';
import { FilterParamsAgNumberColumnFilter } from './section/agNumberColumnFilter';
import { FilterParamsAgDateColumnFilter } from './section/agDateColumnFilter';

export type AgGridFilter = 'agTextColumnFilter' | 'agNumberColumnFilter' | 'agDateColumnFilter' | boolean;

export type AgGridFilterParams =
  | FilterParamsAgTextColumnFilter
  | FilterParamsAgNumberColumnFilter
  | FilterParamsAgDateColumnFilter;
