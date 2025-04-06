import React from 'react';
import useLanguageContext from '../../../../hooks/useLanguageContext';
import { styled } from '@mui/material/styles';
import { ListDataGridProps, ListDataGridRef } from './listDataGridTypes';
import { listDataGridPropsPrepareColumn, listDataGridPropsPrepareOperationsColumn } from './listDataGridMethods';
import { useGridApiRef, GridRenderCellParams } from '@mui/x-data-grid';
import DataGridComp from '../../../base/dataGrid/DataGrid';
import BoxComp from '../../../base/box/Box';
import IconButtonComp from '../../../base/iconButton/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledDataGrid = styled(DataGridComp)(({ theme }) => ({
  '& .MuiDataGrid-columnHeader[data-field="operations"]': {
    position: 'sticky',
    left: 0,
    zIndex: 4,
    backgroundColor: theme.palette.background.paper,
    '&::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '1px',
      backgroundColor: theme.palette.divider,
    },
  },
  '& .MuiDataGrid-cell[data-field="operations"]': {
    position: 'sticky',
    left: 0,
    zIndex: 3,
    backgroundColor: theme.palette.background.paper,
    '&::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '1px',
      backgroundColor: theme.palette.divider,
    },
  },
}));

const ListDataGrid = React.forwardRef<ListDataGridRef, ListDataGridProps>((props, ref) => {
  const { columns, rows, onView, onEdit, onDelete, operationItems } = props;
  const { translate } = useLanguageContext();
  const apiRef = useGridApiRef();

  const operationsColumn = React.useMemo(
    () => ({
      ...listDataGridPropsPrepareOperationsColumn({
        visibleOnView: onView ? true : false,
        visibleOnEdit: onEdit ? true : false,
        visibleOnDelete: onDelete ? true : false,
        otherItemsLength: operationItems && operationItems.length > 0 ? operationItems.length : 0,
      }),
      renderCell: (params: GridRenderCellParams) => (
        <BoxComp sx={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
          {onView && (
            <IconButtonComp
              color="primary"
              size="small"
              onClick={() => {
                onView(params.row);
              }}
            >
              <RemoveRedEyeIcon />
            </IconButtonComp>
          )}

          {onEdit && (
            <IconButtonComp
              color="success"
              size="small"
              onClick={() => {
                onEdit(params.row);
              }}
            >
              <EditIcon />
            </IconButtonComp>
          )}

          {onDelete && (
            <IconButtonComp
              color="error"
              size="small"
              onClick={() => {
                onDelete(params.row);
              }}
            >
              <DeleteIcon />
            </IconButtonComp>
          )}

          {operationItems?.map((item, index) => {
            if (
              item.type === 'iconButton' &&
              (item.visable ?? true) &&
              (item.visablePrepare ? item.visablePrepare(params.row) : true)
            ) {
              return (
                <IconButtonComp
                  key={index.toString()}
                  size="small"
                  color={item.color ?? 'default'}
                  disabled={item.disabledPrepare?.(params.row) ?? item.disabled ?? false}
                  onClick={() => {
                    item.onClick(params.row);
                  }}
                >
                  {item.icon}
                </IconButtonComp>
              );
            } else {
              return null;
            }
          })}
        </BoxComp>
      ),
    }),
    [onView, onEdit, onDelete, operationItems],
  );

  const preparedColumns = React.useMemo(() => {
    const hasOperations = onView || onEdit || onDelete || (operationItems && operationItems.length > 0);

    const preparedCols = columns.map((column) => ({
      ...listDataGridPropsPrepareColumn(column),
      headerName: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
    }));

    return hasOperations ? [operationsColumn, ...preparedCols] : preparedCols;
  }, [columns, translate, onView, onEdit, onDelete, operationItems, operationsColumn]);

  React.useImperativeHandle(ref, () => ({
    getDataGrid: () => apiRef.current,
  }));

  const handleScroll = React.useCallback(() => {
    const gridContainer = apiRef.current?.rootElementRef?.current;
    if (!gridContainer) return;

    const { scrollTop, scrollHeight, clientHeight } = gridContainer;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;

    if (isNearBottom) {
      alert('veri çekilecek');
    }
  }, [apiRef]);

  React.useEffect(() => {
    const gridContainer = apiRef.current?.rootElementRef?.current;

    if (gridContainer) {
      gridContainer.addEventListener('scroll', handleScroll);
      return () => gridContainer.removeEventListener('scroll', handleScroll);
    }
  }, [apiRef, handleScroll]);

  return (
    <StyledDataGrid
      apiRef={apiRef}
      columns={preparedColumns}
      rows={rows}
      showCellVerticalBorder={true}
      showColumnVerticalBorder={true}
      hideFooter={true}
      hideFooterPagination={true}
      hideFooterSelectedRowCount={true}
      disableVirtualization={true}
    />
  );
});

ListDataGrid.displayName = 'ListDataGrid';

export default React.memo(ListDataGrid);
