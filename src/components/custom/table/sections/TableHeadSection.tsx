import TableHeadComp from '../../../base/tableHead/TableHead';
import TableRowComp from '../../../base/tableRow/TableRow';
import TableCellComp from '../../../base/tableCell/TableCell';
import { CustomTableProps } from '../customTableHelper';
import { styled } from '@mui/material/styles';

const StyledTableHead = styled(TableHeadComp)(({ theme }) => ({
  borderTop: `1px dotted ${theme.palette.divider}`,
}));

const StickyTableHeadColumn = styled(TableCellComp)(({ theme }) => ({
  background: theme.customTable?.stickyColumn?.backgroundSecondary,
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

const TableHeadSection = <T extends object>({
  cells,
  columnVerticalLinesVisible,
  stickyColumnVisible,
  stickyColumnWidth,
}: {
  cells: CustomTableProps<T>['cells'];
  columnVerticalLinesVisible: CustomTableProps<T>['columnVerticalLinesVisible'];
  stickyColumnVisible: boolean;
  stickyColumnWidth: CustomTableProps<T>['stickyColumnWidth'];
}): JSX.Element => {
  return (
    <StyledTableHead>
      <TableRowComp>
        {stickyColumnVisible && (
          <StickyTableHeadColumn
            align="center"
            style={{
              minWidth: stickyColumnWidth,
            }}
            rowIndex={1}
          />
        )}

        {cells.map((cell, index) => (
          <TableCellComp
            key={index.toString()}
            isTranslation={true}
            align={cell.settings?.head?.tableCell?.align}
            style={{
              minWidth: cell.settings?.head?.tableCell?.minWidth ? cell.settings.head.tableCell.minWidth : 200,
            }}
            sx={{
              ...(columnVerticalLinesVisible ? { boxShadow: (theme) => `1px 0 0 0 ${theme.palette.divider}` } : {}),
            }}
          >
            {cell.label}
          </TableCellComp>
        ))}
      </TableRowComp>
    </StyledTableHead>
  );
};

export default TableHeadSection;
