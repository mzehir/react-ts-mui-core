interface InRangeFilterValue {
  min: number | string;
  max: number | string;
}

export type ApiSliceGetReportMethodRequestFilterParams =
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

/**
 * @note
 * This request type is currently designed specifically for GET requests that fetch data into ag-Grid.
 * If the default GET service logic differs from ag-Grid-specific data-fetching logic,
 * this type can be renamed for ag-Grid clarity, or separate request types can be defined for both use cases.
 */
export interface ApiSliceGetReportMethodRequestDto {
  filterParams?: ApiSliceGetReportMethodRequestFilterParams[];
}
