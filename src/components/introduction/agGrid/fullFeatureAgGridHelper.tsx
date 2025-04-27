import { ICellRendererParams } from 'ag-grid-community';
// import { CustomCellRendererProps } from 'ag-grid-react';
import { AgGridColDefType } from '../../custom/agGrid/types/agGridColDefType';
// import AgGridCellSkeletonComp from '../../custom/agGrid/components/AgGridCellSkeleton';
import { OperationColumnItemFields } from './fullFeatureAgGridTypes';
import { fullFeatureAgGridPropsPrepareColumn } from './fullFeatureAgGridMethods';
import IconButtonComp from '../../base/iconButton/IconButton';
import { Stack } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const prepareOperationColumn = (
  onView?: (row: unknown) => void,
  onEdit?: (row: unknown) => void,
  onDelete?: (row: unknown) => void,
  operationItems?: OperationColumnItemFields[],
): AgGridColDefType | null => {
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
  columns: AgGridColDefType[],
  translate: (key: string) => string,
  operationColumn: AgGridColDefType | null,
): AgGridColDefType[] => {
  const baseColumns = columns.map((column: AgGridColDefType) => {
    return {
      ...fullFeatureAgGridPropsPrepareColumn(column, translate),
      // cellRenderer: (props: CustomCellRendererProps) => {
      //   if (props.value !== undefined) {
      //     return props.valueFormatted ?? props.value;
      //   } else {
      //     return <AgGridCellSkeletonComp />;
      //   }
      // },
    };
  });

  return operationColumn ? [...baseColumns, operationColumn] : baseColumns;
};
