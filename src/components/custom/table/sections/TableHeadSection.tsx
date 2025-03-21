import TableHeadComp from '../../../base/tableHead/TableHead';
import TableRowComp from '../../../base/tableRow/TableRow';
import TableCellComp from '../../../base/tableCell/TableCell';
import { cellWidthDefinitions, CustomTableProps } from '../customTableTypes';
import { styled } from '@mui/material/styles';

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
  stickyRowActive = false,
  columnVerticalLinesVisible,
  operationsColumnVisible,
  operationsColumnWidth,
}: {
  cells: CustomTableProps<T>['cells'];
  stickyRowActive?: boolean;
  columnVerticalLinesVisible: CustomTableProps<T>['columnVerticalLinesVisible'];
  operationsColumnVisible: boolean;
  operationsColumnWidth: CustomTableProps<T>['operationsColumnWidth'];
}): JSX.Element => {
  return (
    <TableHeadComp
      sx={{
        ...(stickyRowActive
          ? {
              position: 'sticky',
              top: 0,
              zIndex: 2,
              backgroundColor: (theme) => theme.customTable?.stickyColumn?.backgroundSecondary,
              boxShadow:
                'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
            }
          : {
              borderTop: (theme) => `1px dotted ${theme.palette.divider}`,
            }),
      }}
    >
      <TableRowComp>
        {operationsColumnVisible && (
          <StickyTableHeadColumn
            align="center"
            sx={{
              minWidth: operationsColumnWidth,
            }}
          />
        )}

        {cells.map((cell, index) => (
          <TableCellComp
            key={index.toString()}
            isTranslation={true}
            align={cell.settings?.head?.cell?.align}
            style={{
              minWidth:
                cell.settings?.head?.cell?.minWidth && typeof cell.settings?.head?.cell?.minWidth === 'number'
                  ? cell.settings.head.cell.minWidth
                  : cell.settings?.head?.cell?.minWidth
                    ? cellWidthDefinitions[cell.settings?.head?.cell?.minWidth as keyof typeof cellWidthDefinitions]
                    : 200,
            }}
            sx={{
              ...(columnVerticalLinesVisible ? { boxShadow: (theme) => `1px 0 0 0 ${theme.palette.divider}` } : {}),
            }}
          >
            {cell.label}
          </TableCellComp>
        ))}
      </TableRowComp>
    </TableHeadComp>
  );
};

export default TableHeadSection;
