import { FilterOptions as TextFilterOptions } from './columnFilterTypeSections/textColumnFilterType';
import { FilterOptions as NumberFilterOptions } from './columnFilterTypeSections/numberColumnFilterType';
import { FilterOptions as DateFilterOptions } from './columnFilterTypeSections/dateColumnFilterType';
import { FilterOptions as RadioFilterOptions } from './columnFilterTypeSections/radioCustomFilterType';
import { FilterOptions as SelectFilterOptions } from './columnFilterTypeSections/selectCustomFilterType';

interface TextColumnFilter {
  type: TextFilterOptions;
  filterType: 'text';
  filter: string | null | undefined;
}

interface NumberColumnFilter {
  type: NumberFilterOptions;
  filterType: 'number';
  filter: number | null | undefined;
  filterTo: number | null | undefined;
}

interface DateColumnFilter {
  type: DateFilterOptions;
  filterType: 'date';
  dateFrom: string | null | undefined;
  dateTo: string | null | undefined;
}

interface RadioColumnFilter {
  type: RadioFilterOptions;
  filterType: 'radio';
  filter: string | boolean | null | undefined;
}

interface SelectColumnFilter {
  type: SelectFilterOptions;
  filterType: 'select';
  filter: string[] | number[] | null | undefined;
}

type ColumnFilter = TextColumnFilter | NumberColumnFilter | DateColumnFilter | RadioColumnFilter | SelectColumnFilter;

export type ColumnFilterModel = Record<string, ColumnFilter>;
