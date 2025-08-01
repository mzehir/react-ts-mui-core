import { ApiSliceGetReportMethodRequestFilterParams } from './getReportRequestType';

export const apiSliceGetReportMethodRequestFilterPrepare = (
  urlParams: string,
  filterParams: ApiSliceGetReportMethodRequestFilterParams[],
): string => {
  let url = urlParams;
  for (let i = 0; i < filterParams.length; i++) {
    const filterParam = filterParams[i];
    const { filterType, filterKey, filterValue } = filterParam;
    if (
      filterType === 'equals' ||
      filterType === 'notEqual' ||
      filterType === 'contains' ||
      filterType === 'notContains' ||
      filterType === 'startsWith' ||
      filterType === 'endsWith'
    ) {
      url += `&${filterKey}=${encodeURIComponent(
        JSON.stringify({
          type: filterType,
          value: filterValue,
        }),
      )}`;
    } else if (
      filterType === 'lessThan' ||
      filterType === 'lessThanOrEqual' ||
      filterType === 'greaterThan' ||
      filterType === 'greaterThanOrEqual'
    ) {
      url += `&${filterKey}=${encodeURIComponent(
        JSON.stringify({
          type: filterType,
          value: filterValue,
        }),
      )}`;
    } else if (filterType === 'inRange') {
      url += `&${filterKey}=${encodeURIComponent(
        JSON.stringify({
          type: filterType,
          min: filterValue.min,
          max: filterValue.max,
        }),
      )}`;
    } else if (filterType === 'blank' || filterType === 'notBlank') {
      url += `&${filterKey}=${encodeURIComponent(
        JSON.stringify({
          type: filterType,
        }),
      )}`;
    } else if (filterType === 'in') {
      url += `&${filterKey}=${encodeURIComponent(
        JSON.stringify({
          type: filterType,
          value: filterValue,
        }),
      )}`;
    }
  }

  return url;
};
