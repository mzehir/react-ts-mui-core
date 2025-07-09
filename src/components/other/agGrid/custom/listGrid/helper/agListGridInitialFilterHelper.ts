import { GridReadyEvent } from 'ag-grid-community';
import { ColumnType } from '../../../helper/column/columnType';

interface IDateRangeFilter {
  dateFrom: string;
  dateTo?: string;
}

interface IDefaultFilter {
  filter: string | number | boolean;
  filterTo?: string | number;
}

interface FilterModelItem2 {
  type: string;
  filter: IDefaultFilter | IDateRangeFilter;
  filterType: 'text' | 'number' | 'date' | 'radio' | 'select';
}

const prepareListGridInitialFilterModel = (columns: ColumnType[]): Record<string, FilterModelItem2> => {
  const filterModel: Record<string, FilterModelItem2> = {};

  columns.forEach((column) => {
    const { customFilter } = column;
    const { componentType, componentProps } = customFilter ?? {};
    const initialFields = componentProps?.initialFilterFields as Partial<IDateRangeFilter & IDefaultFilter>;
    const defaultOption = componentProps?.defaultOption;

    if (!initialFields || !defaultOption || !column.field) return;

    const fieldName = column.field;
    const isDate = componentType === 'dateColumnFilter';
    const isInRange = defaultOption === 'inRange';

    let filterValue: IDefaultFilter | IDateRangeFilter;

    if (isDate) {
      const { dateFrom, dateTo } = initialFields;
      filterValue = isInRange ? { dateFrom: dateFrom ?? '', dateTo } : { dateFrom: dateFrom ?? '' };
    } else {
      const { filter, filterTo } = initialFields;
      filterValue = isInRange ? { filter: filter ?? '', filterTo } : { filter: filter ?? '' };
    }

    const filterTypeMap: Record<string, FilterModelItem2['filterType']> = {
      textColumnFilter: 'text',
      numberColumnFilter: 'number',
      dateColumnFilter: 'date',
      radioCustomFilter: 'radio',
      selectCustomFilter: 'select',
    };

    filterModel[fieldName] = {
      type: defaultOption,
      filter: filterValue,
      filterType: filterTypeMap[componentType ?? ''] ?? 'text',
    };
  });

  return filterModel;
};

export const setLisGridInitialFilters = async (gridParams: GridReadyEvent, columns: ColumnType[]) => {
  const initialFilterModel = prepareListGridInitialFilterModel(columns);

  if (Object.keys(initialFilterModel).length > 0) {
    const initialFilterModelKeys = Object.keys(initialFilterModel);

    for (let i = 0; i < initialFilterModelKeys.length; i++) {
      const columnName = initialFilterModelKeys[i];
      const column = initialFilterModel[columnName];
      const matchedColumnFilterInstance = await gridParams.api.getColumnFilterInstance(columnName);

      if (matchedColumnFilterInstance) {
        matchedColumnFilterInstance?.setModel({
          type: column?.type,
          ...column.filter,
          filterType: column?.filterType,
        });
      }
    }

    gridParams.api.onFilterChanged();
  }
};
