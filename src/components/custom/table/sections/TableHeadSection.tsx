import TableHeadComp from '../../../base/tableHead/TableHead';
import TableRowComp from '../../../base/tableRow/TableRow';
import TableCellComp from '../../../base/tableCell/TableCell';
import IconButtonComp from '../../../base/iconButton/IconButton';
import { cellWidthDefinitions, CustomTableProps } from '../customTableTypes';
import { styled } from '@mui/material/styles';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

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

const StyledTableCell = styled(TableCellComp, {
  shouldForwardProp: (prop) => prop !== 'isSticky' && prop !== 'showVerticalLines',
})<{ isSticky?: boolean; showVerticalLines?: boolean }>(({ theme, isSticky, showVerticalLines }) => ({
  position: isSticky ? 'sticky' : 'static',
  backgroundColor: isSticky ? theme.customTable?.stickyColumn?.backgroundSecondary : 'inherit',
  ...(showVerticalLines && {
    borderRight: `1px solid ${theme.palette.divider}`,
    '&::after': isSticky
      ? {
          content: '""',
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: theme.palette.divider,
          zIndex: 3,
        }
      : {},
  }),
}));

const TableHeadSection = <T extends object>({
  cells,
  stickyRowActive = false,
  columnVerticalLinesVisible,
  operationsColumnVisible,
  operationsColumnWidth,
  onDownloadClick,
}: {
  cells: CustomTableProps<T>['cells'];
  stickyRowActive?: boolean;
  columnVerticalLinesVisible: CustomTableProps<T>['columnVerticalLinesVisible'];
  operationsColumnVisible: boolean;
  operationsColumnWidth: CustomTableProps<T>['operationsColumnWidth'];
  onDownloadClick?: CustomTableProps<T>['onDownloadClick'];
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
          >
            {onDownloadClick && (
              <IconButtonComp
                size="small"
                color="success"
                disabled={false}
                onClick={(event) => {
                  onDownloadClick(event);
                }}
              >
                <FileDownloadIcon />
              </IconButtonComp>
            )}
          </StickyTableHeadColumn>
        )}

        {cells.map((cell, index) => (
          <StyledTableCell
            key={index.toString()}
            isTranslation={true}
            align={cell.settings?.head?.cell?.align}
            isSticky={stickyRowActive}
            showVerticalLines={columnVerticalLinesVisible}
            style={{
              minWidth:
                cell.settings?.head?.cell?.minWidth && typeof cell.settings?.head?.cell?.minWidth === 'number'
                  ? cell.settings.head.cell.minWidth
                  : cell.settings?.head?.cell?.minWidth
                    ? cellWidthDefinitions[cell.settings?.head?.cell?.minWidth as keyof typeof cellWidthDefinitions]
                    : 200,
            }}
          >
            {cell.label}
          </StyledTableCell>
        ))}
      </TableRowComp>
    </TableHeadComp>
  );
};

export default TableHeadSection;
