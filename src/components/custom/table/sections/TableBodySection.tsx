import { styled } from '@mui/material/styles';
import TableBodyComp from '../../../base/tableBody/TableBody';
import TableRowComp from '../../../base/tableRow/TableRow';
import TableCellComp from '../../../base/tableCell/TableCell';
import IconButtonComp from '../../../base/iconButton/IconButton';
import { CustomTableProps, ProcessColumnItemFields } from '../customTableTypes';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableBodyRow = styled(TableRowComp)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StickyTableBodyColumn = styled(TableCellComp, {
  shouldForwardProp: (prop) => prop !== 'rowIndex',
})<{ rowIndex: number }>(({ theme, rowIndex }) => ({
  background:
    rowIndex % 2 === 1
      ? theme.customTable?.stickyColumn?.backgroundSecondary
      : theme.customTable?.stickyColumn?.backgroundPrimary,
  position: 'sticky',
  left: 0,
  zIndex: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '1px',
    backgroundColor: theme.palette.divider,
  },
}));

const TableBodySection = <T extends object>({
  cells,
  rows,
  columnVerticalLinesVisible,
  operationsColumnVisible,
  onEditClick,
  onViewClick,
  onDeleteClick,
  processColumnItems,
}: {
  cells: CustomTableProps<T>['cells'];
  rows: CustomTableProps<T>['rows'];
  columnVerticalLinesVisible: CustomTableProps<T>['columnVerticalLinesVisible'];
  operationsColumnVisible: boolean;
  onEditClick: CustomTableProps<T>['onEditClick'];
  onViewClick: CustomTableProps<T>['onViewClick'];
  onDeleteClick: CustomTableProps<T>['onDeleteClick'];
  processColumnItems?: ProcessColumnItemFields[];
}): JSX.Element => {
  return (
    <TableBodyComp>
      {rows.map((row, rowIndex) => (
        <StyledTableBodyRow key={rowIndex.toString()}>
          {operationsColumnVisible && (
            <StickyTableBodyColumn align="center" rowIndex={rowIndex}>
              {onEditClick && (
                <IconButtonComp
                  color="success"
                  size="small"
                  onClick={(event) => {
                    onEditClick(event, row);
                  }}
                >
                  <EditIcon />
                </IconButtonComp>
              )}

              {onViewClick && (
                <IconButtonComp
                  color="primary"
                  size="small"
                  onClick={(event) => {
                    onViewClick(event, row);
                  }}
                >
                  <RemoveRedEyeIcon />
                </IconButtonComp>
              )}

              {onDeleteClick && (
                <IconButtonComp
                  color="error"
                  size="small"
                  onClick={(event) => {
                    onDeleteClick(event, row);
                  }}
                >
                  <DeleteIcon />
                </IconButtonComp>
              )}

              {processColumnItems?.map((item, index) => {
                if (
                  item.type === 'iconButton' &&
                  (item.visable ?? true) &&
                  (item.visablePrepare ? item.visablePrepare(row) : true)
                ) {
                  return (
                    <IconButtonComp
                      key={index.toString()}
                      size="small"
                      color={item.color ?? 'default'}
                      disabled={item.disabledPrepare?.(row) ?? item.disabled ?? false}
                      onClick={(event) => {
                        item.onClick(event, row);
                      }}
                    >
                      {item.icon}
                    </IconButtonComp>
                  );
                } else {
                  return null;
                }
              })}
            </StickyTableBodyColumn>
          )}
          {cells.map((cell, cellIndex) => (
            <TableCellComp
              key={cellIndex.toString()}
              align={cell.settings?.head?.cell?.align}
              isTranslation={cell.settings?.body?.cell?.isTranslation}
              sx={{
                ...(columnVerticalLinesVisible ? { boxShadow: (theme) => `1px 0 0 0 ${theme.palette.divider}` } : {}),
              }}
            >
              {cell.settings?.body?.cell?.renderCustomComponent
                ? cell.settings?.body?.cell?.renderCustomComponent(
                    row as Record<string, unknown>,
                    row[cell.key as keyof T] as string,
                  )
                : cell.settings?.body?.cell?.prepareCellTextMethod
                  ? cell.settings?.body?.cell?.prepareCellTextMethod(
                      row as Record<string, unknown>,
                      row[cell.key as keyof T] as string,
                    )
                  : (row[cell.key as keyof T] as React.ReactNode)}
            </TableCellComp>
          ))}
        </StyledTableBodyRow>
      ))}
    </TableBodyComp>
  );
};

export default TableBodySection;
