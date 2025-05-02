import { FilterParamsAgTextColumnFilter } from './agGridColumnFilterType/agTextColumnFilterType';
import { FilterParamsAgNumberColumnFilter } from './agGridColumnFilterType/agNumberColumnFilterType';
import { FilterParamsAgDateColumnFilter } from './agGridColumnFilterType/agDateColumnFilterType';
import { AgGridRadioCustomFilterCompProps } from './agGridColumnFilterType/agGridRadioCustomFilterType';
import { CustomFilterProps } from 'ag-grid-react';

export type AgGridFilterType =
  | 'agTextColumnFilter'
  | 'agNumberColumnFilter'
  | 'agDateColumnFilter'
  | React.ComponentType<Record<string, unknown>>
  | React.ComponentType<CustomFilterProps>;

export type AgGridColumnFilterType =
  | {
      name: string;
      componentType: 'agTextColumnFilter';
      componentProps: FilterParamsAgTextColumnFilter;
    }
  | {
      name: string;
      componentType: 'agNumberColumnFilter';
      componentProps: FilterParamsAgNumberColumnFilter;
    }
  | {
      name: string;
      componentType: 'agDateColumnFilter';
      componentProps: FilterParamsAgDateColumnFilter;
    }
  | {
      name: string;
      componentType: 'agRadioCustomFilter';
      componentProps: AgGridRadioCustomFilterCompProps;
    };
