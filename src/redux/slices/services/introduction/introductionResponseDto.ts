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

interface InRangeFilterValue {
  min: number | string;
  max: number | string;
}

export type TFilterParams =
  // 🔤 Equality for Text/Number/Date
  | {
      filterType: 'equals' | 'notEqual' | 'contains' | 'notContains' | 'startsWith' | 'endsWith';
      filterKey: string;
      filterValue: string | number;
    }
  // 🔢 Comparisons
  | {
      filterType: 'lessThan' | 'lessThanOrEqual' | 'greaterThan' | 'greaterThanOrEqual';
      filterKey: string;
      filterValue: number | string;
    }
  // 📅 Range Filter
  | {
      filterType: 'inRange';
      filterKey: string;
      filterValue: InRangeFilterValue;
    }
  // ⬜ Blank/Not Blank Checks
  | {
      filterType: 'blank' | 'notBlank';
      filterKey: string;
      filterValue?: null;
    };

export interface employeesRequestDto {
  maxResultCount: string;
  skipCount: string;
  filterParams?: TFilterParams[];
  name?: INameRequest;
  gender?: IGenderRequest;
  birthDate?: BirthDateFilter;
}
