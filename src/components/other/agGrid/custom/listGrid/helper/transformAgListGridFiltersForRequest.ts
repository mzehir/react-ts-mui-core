import { ApiSliceGetMethodRequestFilterParams } from '../../../../../../redux/slices/apiSliceHelper/helperTypes';
import { ColumnFilterModel } from '../../../helper/column/columnFilter/columnFilterParams';
import { extractDatePart } from '../../../../../../utils/locale/dateFormats';

// The return type of this method should be structured according to the filter format expected by the API endpoint in use.
// The `ApiSliceGetMethodRequestFilterParams` type is provided as an example,
// but it should be customized based on the backend logic of the developer using this project.
export const transformAgListGridFiltersForRequest = (
  filterModel: ColumnFilterModel,
): ApiSliceGetMethodRequestFilterParams[] => {
  const filterModelKeys = Object.keys(filterModel);
  const requestDtoFilters: ApiSliceGetMethodRequestFilterParams[] = [];

  for (let i = 0; i < filterModelKeys.length; i++) {
    const key = filterModelKeys[i];
    const filterItem = filterModel[key];

    switch (filterItem.filterType) {
      case 'text':
        if (filterItem.type === 'blank' || filterItem.type === 'notBlank') {
          requestDtoFilters.push({
            filterType: filterItem.type,
            filterKey: key,
            filterValue: null,
          });
        } else {
          requestDtoFilters.push({
            filterType: filterItem.type as
              | 'equals'
              | 'notEqual'
              | 'contains'
              | 'notContains'
              | 'startsWith'
              | 'endsWith',
            filterKey: key,
            filterValue: filterItem.filter as string,
          });
        }
        break;

      case 'number':
        if (filterItem.type === 'blank' || filterItem.type === 'notBlank') {
          requestDtoFilters.push({
            filterType: filterItem.type,
            filterKey: key,
            filterValue: null,
          });
        } else if (filterItem.type === 'inRange') {
          requestDtoFilters.push({
            filterType: 'inRange',
            filterKey: key,
            filterValue: {
              min: filterItem.filter || '',
              max: filterItem.filterTo || '',
            },
          });
        } else {
          requestDtoFilters.push({
            filterType: filterItem.type as
              | 'equals'
              | 'notEqual'
              | 'lessThan'
              | 'lessThanOrEqual'
              | 'greaterThan'
              | 'greaterThanOrEqual',
            filterKey: key,
            filterValue: filterItem.filter as number,
          });
        }
        break;

      case 'date':
        if (filterItem.type === 'blank' || filterItem.type === 'notBlank') {
          requestDtoFilters.push({
            filterType: filterItem.type,
            filterKey: key,
            filterValue: null,
          });
        } else if (filterItem.type === 'inRange') {
          const _min = extractDatePart(filterItem.dateFrom as string) ?? ''; // Should be adjusted according to backend's expected date range format
          const _max = extractDatePart(filterItem.dateTo as string) ?? ''; // Should be adjusted according to backend's expected date range format

          requestDtoFilters.push({
            filterType: 'inRange',
            filterKey: key,
            filterValue: {
              min: _min,
              max: _max,
            },
          });
        } else {
          const _dateFrom = extractDatePart(filterItem.dateFrom as string) ?? ''; // Should be adjusted according to backend's expected single date format

          requestDtoFilters.push({
            filterType: filterItem.type as 'equals' | 'notEqual' | 'lessThan' | 'greaterThan',
            filterKey: key,
            filterValue: _dateFrom,
          });
        }
        break;

      case 'radio':
        requestDtoFilters.push({
          filterType: 'equals',
          filterKey: key,
          filterValue: filterItem.filter as string,
        });
        break;
    }
  }

  return requestDtoFilters;
};
