import { TextColumnFilterParams } from './columnFilterTypeSections/textColumnFilterType';
import { NumberColumnFilterParams } from './columnFilterTypeSections/numberColumnFilterType';
import { DateColumnFilterParams } from './columnFilterTypeSections/dateColumnFilterType';
import { RadioCustomFilterParams } from './columnFilterTypeSections/radioCustomFilterType';
import { CustomFilterProps } from 'ag-grid-react';

export type FilterType =
  | 'agTextColumnFilter'
  | 'agNumberColumnFilter'
  | 'agDateColumnFilter'
  | React.ComponentType<Record<string, unknown>>
  | React.ComponentType<CustomFilterProps>;

export type ColumnFilterType =
  | {
      name: string;
      componentType: 'textColumnFilter';
      componentProps: TextColumnFilterParams;
    }
  | {
      name: string;
      componentType: 'numberColumnFilter';
      componentProps: NumberColumnFilterParams;
    }
  | {
      name: string;
      componentType: 'dateColumnFilter';
      componentProps: DateColumnFilterParams;
    }
  | {
      name: string;
      componentType: 'radioCustomFilter';
      componentProps: RadioCustomFilterParams;
    };
