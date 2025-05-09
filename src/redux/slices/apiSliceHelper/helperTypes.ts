interface InRangeFilterValue {
  min: number | string;
  max: number | string;
}

export type ApiSliceGetMethodRequestFilterParams =
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

// Defined to bring data to agGrid for now
export interface ApiSliceGetMethodRequestDto {
  maxResultCount: string;
  skipCount: string;
  filterParams?: ApiSliceGetMethodRequestFilterParams[];
}
