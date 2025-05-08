import { ICellRendererParams } from 'ag-grid-community';
import { ColumnType } from '../../helper/column/columnType';
import { OperationColumnItemFields } from './agListGridTypes';
import { agListGridPrepareColumn } from './agListGridMethods';
import IconButtonComp from '../../../../base/iconButton/IconButton';
import { Stack } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ColumnFilterModel } from '../../helper/column/columnFilter/columnFilterParams';
import { TFilterParams } from '../../../../../redux/slices/services/introduction/introductionRequestDto';

export const prepareOperationColumn = (
  onView?: (row: unknown) => void,
  onEdit?: (row: unknown) => void,
  onDelete?: (row: unknown) => void,
  operationItems?: OperationColumnItemFields[],
): ColumnType | null => {
  if (!onView && !onEdit && !onDelete && (!operationItems || operationItems.length === 0)) {
    return null;
  }

  const ICON_BUTTON_WIDTH = 40;
  let operationColumnItemLength = 0;

  if (onView) operationColumnItemLength++;
  if (onEdit) operationColumnItemLength++;
  if (onDelete) operationColumnItemLength++;

  if (operationItems?.length) {
    operationColumnItemLength += operationItems.filter((item) => {
      return item.type === 'iconButton';
    }).length;
  }

  const operationColumnWidth = operationColumnItemLength * ICON_BUTTON_WIDTH;

  return {
    field: 'operations',
    headerName: '',
    width: operationColumnWidth || 200,
    pinned: 'left' as const,
    sortable: false,
    filter: false,
    cellDataType: 'object' as const,
    cellRenderer: (params: ICellRendererParams) => {
      return (
        <Stack direction="row" spacing={1}>
          {onView && (
            <IconButtonComp size="small" color="primary" onClick={() => onView(params.data)}>
              <RemoveRedEyeIcon />
            </IconButtonComp>
          )}
          {onEdit && (
            <IconButtonComp size="small" color="success" onClick={() => onEdit(params.data)}>
              <EditIcon />
            </IconButtonComp>
          )}
          {onDelete && (
            <IconButtonComp size="small" color="error" onClick={() => onDelete(params.data)}>
              <DeleteIcon />
            </IconButtonComp>
          )}
          {operationItems?.map((item, index) => {
            if (item.type === 'iconButton') {
              const isVisible = item.visablePrepare ? item.visablePrepare(params.data) : (item.visable ?? true);
              const isDisabled = item.disabledPrepare ? item.disabledPrepare(params.data) : (item.disabled ?? false);

              if (!isVisible) return null;

              return (
                <IconButtonComp
                  key={index}
                  size="small"
                  color={item.color}
                  disabled={isDisabled}
                  onClick={() => item.onClick(params.data)}
                >
                  {item.icon}
                </IconButtonComp>
              );
            }

            return null;
          })}
        </Stack>
      );
    },
  };
};

export const prepareColumns = (
  columns: ColumnType[],
  translate: (key: string) => string,
  operationColumn: ColumnType | null,
): ColumnType[] => {
  const baseColumns = columns.map((column: ColumnType) => {
    return {
      ...agListGridPrepareColumn(column, translate),
    };
  });

  return operationColumn ? [...baseColumns, operationColumn] : baseColumns;
};

interface FilterModelItem {
  type: string;
  filter: string | number | boolean;
  filterType: 'text' | 'number' | 'date' | 'radio';
}

export const prepareInitialFilterModel = (columns: ColumnType[]) => {
  const initialFilteredColumns =
    columns.filter((column) => column?.customFilter?.componentProps?.initialFilterValue) ?? [];

  if (initialFilteredColumns.length > 0) {
    const filterModel = initialFilteredColumns.reduce<Record<string, FilterModelItem>>((acc, column) => {
      const fieldName = column.field as string;
      const defaultOption = column.customFilter?.componentProps?.defaultOption;
      const initialFilterValue = column.customFilter?.componentProps?.initialFilterValue;

      if (defaultOption && initialFilterValue && fieldName) {
        acc[fieldName] = {
          type: defaultOption,
          filter: initialFilterValue,
          filterType:
            column.customFilter?.componentType === 'textColumnFilter'
              ? 'text'
              : column.customFilter?.componentType === 'numberColumnFilter'
                ? 'number'
                : column.customFilter?.componentType === 'dateColumnFilter'
                  ? 'date'
                  : column.customFilter?.componentType === 'radioCustomFilter'
                    ? 'radio'
                    : 'text',
        };
      }
      return acc;
    }, {});

    return filterModel;
  } else {
    return {};
  }
};

// Bu methodun dönüş tipi, bu methodun bağlı olduğu gridin istek attığı endPointler mantığına göre ayarlanacak.
export const prepareRequestDtoFilters = (filterModel: ColumnFilterModel) => {
  let requestDtoFilter = {};
  const filterModelKeys = Object.keys(filterModel);

  for (let i = 0; i < filterModelKeys.length; i++) {
    const key = filterModelKeys[i];
    if (filterModel[key].filterType === 'date') {
      requestDtoFilter = {
        ...requestDtoFilter,
        [key]: {
          type: filterModel[key].type,
          ...(filterModel[key].type === 'inRange'
            ? {
                value: { dateFrom: filterModel[key].dateFrom, dateTo: filterModel[key].dateTo },
              }
            : {
                value: filterModel[key].dateFrom,
              }),
        },
      };
    } else {
      requestDtoFilter = {
        ...requestDtoFilter,
        [key]: {
          type: filterModel[key].type,
          value: filterModel[key].filter,
        },
      };
    }
  }

  return requestDtoFilter;
};

// Bu methodun dönüş tipi, bu methodun bağlı olduğu gridin istek attığı endPointler mantığına göre ayarlanacak.
export const prepareRequestDtoFilters2 = (filterModel: ColumnFilterModel): TFilterParams[] => {
  const filterModelKeys = Object.keys(filterModel);
  const requestDtoFilters: TFilterParams[] = [];

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
          requestDtoFilters.push({
            filterType: 'inRange',
            filterKey: key,
            filterValue: {
              min: filterItem.dateFrom || '',
              max: filterItem.dateTo || '',
            },
          });
        } else {
          requestDtoFilters.push({
            filterType: filterItem.type as 'equals' | 'notEqual' | 'lessThan' | 'greaterThan',
            filterKey: key,
            filterValue: filterItem.dateFrom || '',
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
