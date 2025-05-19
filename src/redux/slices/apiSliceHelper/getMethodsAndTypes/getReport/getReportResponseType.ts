interface ApiSliceGetReportMethodResponseItem {
  id: number;
}

/**
 * @note
 * This request type is currently designed specifically for GET requests that fetch data into ag-Grid.
 * If the default GET service logic differs from ag-Grid-specific data-fetching logic,
 * this type can be renamed for ag-Grid clarity, or separate request types can be defined for both use cases.
 */

export interface ApiSliceGetReportMethodResponseDto<TItem = ApiSliceGetReportMethodResponseItem> {
  data: {
    items: TItem[];
  };
}
