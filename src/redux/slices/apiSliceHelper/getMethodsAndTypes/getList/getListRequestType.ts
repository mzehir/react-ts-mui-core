interface InRangeFilterValue {
  min: number | string;
  max: number | string;
}

export type ApiSliceGetListMethodRequestFilterParams =
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
    }
  // 📋 Multi-value equality (Select Filter)
  | {
      filterType: 'in';
      filterKey: string;
      filterValue: (string | number)[];
    };

/**
 * @note
 * This request type is currently designed specifically for GET requests that fetch data into ag-Grid.
 * If the default GET service logic differs from ag-Grid-specific data-fetching logic,
 * this type can be renamed for ag-Grid clarity, or separate request types can be defined for both use cases.
 */
export interface ApiSliceGetListMethodRequestDto {
  maxResultCount: string;
  skipCount: string;
  filterParams?: ApiSliceGetListMethodRequestFilterParams[];
}
