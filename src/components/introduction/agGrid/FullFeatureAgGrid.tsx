import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import BoxComp from '../../base/box/Box';
import { fullFeatureAgGridPropsPrepareColumn } from './fullFeatureAgGridMethods';
import { FullFeatureAgGridProps, DEFAULT_GRID_SETTINGS } from './fullFeatureAgGridTypes';
import AgGridComp from '../../custom/agGrid/AgGrid';

import { ICellRendererParams } from 'ag-grid-community';

import IconButtonComp from '../../base/iconButton/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import { AgGridCompColDef } from '../../custom/agGrid/agGridHelper';

const FullFeatureAgGrid = <T,>({
  columns,
  onGridReady,
  gridSettings = {},
  onView,
  onEdit,
  onDelete,
  operationItems,
}: FullFeatureAgGridProps<T>) => {
  const { translate } = useLanguageContext();

  const preparedGridSettings = React.useMemo(
    () => ({
      ...DEFAULT_GRID_SETTINGS,
      ...gridSettings,
    }),
    [gridSettings],
  );

  const preparedMaxBlocksInCache = React.useMemo(() => {
    return Math.ceil(preparedGridSettings.totalRowCount / preparedGridSettings.cacheBlockSize);
  }, [preparedGridSettings.totalRowCount, preparedGridSettings.cacheBlockSize]);

  const operationColumn = React.useMemo(() => {
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
      cellRenderer: (params: ICellRendererParams<T>) => {
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
    } as AgGridCompColDef;
  }, [onView, onEdit, onDelete, operationItems]);

  const preparedColumns = React.useMemo(() => {
    const baseColumns = columns.map((column) => fullFeatureAgGridPropsPrepareColumn(column, translate));
    return operationColumn ? [...baseColumns, operationColumn] : baseColumns;
  }, [columns, translate, operationColumn]);

  return (
    <BoxComp sx={{ width: '100%', height: '80%' }}>
      <AgGridComp
        rowModelType={'infinite'}
        columnDefs={preparedColumns}
        onGridReady={onGridReady}
        maxConcurrentDatasourceRequests={preparedGridSettings.maxConcurrentDatasourceRequests}
        cacheBlockSize={preparedGridSettings.cacheBlockSize}
        serverSideInitialRowCount={preparedGridSettings.serverSideInitialRowCount}
        maxBlocksInCache={preparedMaxBlocksInCache}
        cacheOverflowSize={preparedGridSettings.cacheOverflowSize}
        rowBuffer={preparedGridSettings.rowBuffer}
      />
    </BoxComp>
  );
};

export default FullFeatureAgGrid;
