import useLanguageContext from '../../../../hooks/useLanguageContext';
import TableRowComp from '../../../base/tableRow/TableRow';
import TableCellComp from '../../../base/tableCell/TableCell';
import TableFooterComp from '../../../base/tableFooter/TableFooter';
import { CustomTableProps, processSummary } from '../customTableHelper';
import { styled } from '@mui/material/styles';

const StyledTableFooterRow = styled(TableRowComp)(({ theme }) => ({
  backgroundColor: theme.palette.action.disabled,
}));

const StickyTableFooterColumn = styled(TableCellComp)(({ theme }) => ({
  background: theme.customTable?.footerStickyColumn?.backgroundPrimary,
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

const TableFooterSection = <T extends object>({
  cells,
  rows,
  columnVerticalLinesVisible,
  stickyColumnVisible,
  stickyColumnWidth,
}: {
  cells: CustomTableProps<T>['cells'];
  rows: CustomTableProps<T>['rows'];
  columnVerticalLinesVisible: CustomTableProps<T>['columnVerticalLinesVisible'];
  stickyColumnVisible: boolean;
  stickyColumnWidth: CustomTableProps<T>['stickyColumnWidth'];
}): JSX.Element => {
  const { translate } = useLanguageContext();
  return (
    <TableFooterComp>
      <StyledTableFooterRow>
        {stickyColumnVisible && (
          <StickyTableFooterColumn
            align="center"
            style={{
              minWidth: stickyColumnWidth,
            }}
          />
        )}

        {cells.map((cell, cellIndex) =>
          cell.settings?.footer?.tableCell?.open ? (
            <TableCellComp
              key={cellIndex.toString()}
              align={cell.settings?.head?.tableCell?.align}
              isTranslation={false}
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                ...(columnVerticalLinesVisible ? { boxShadow: (theme) => `1px 0 0 0 ${theme.palette.divider}` } : {}),
              }}
            >
              {cell.settings?.footer?.tableCell?.defaultLabelOpen &&
                translate(`component.${cell.settings?.footer?.tableCell?.summaryType ?? 'count'}`) + ': '}

              {(cell.settings?.footer?.tableCell?.prepareCustomLabel || false) &&
              cell.settings?.footer?.tableCell?.customLabelIsTranslation
                ? translate(cell.settings?.footer?.tableCell?.prepareCustomLabel(cell.key))
                : cell.settings?.footer?.tableCell?.prepareCustomLabel?.(cell.key)}

              {cell.settings?.footer?.tableCell?.summaryType !== 'custom'
                ? processSummary(
                    cell.settings?.footer?.tableCell?.summaryType ?? 'count',
                    cell.key,
                    rows as Record<string, unknown>[],
                  )
                : cell.settings?.footer?.tableCell?.summaryCustomCalculate
                  ? cell.settings?.footer?.tableCell?.summaryCustomCalculate(
                      cell.key,
                      rows as Record<string, unknown>[],
                    )
                  : '-'}
            </TableCellComp>
          ) : (
            <TableCellComp
              key={cellIndex.toString()}
              isTranslation={false}
              sx={{
                ...(columnVerticalLinesVisible ? { boxShadow: (theme) => `1px 0 0 0 ${theme.palette.divider}` } : {}),
              }}
            />
          ),
        )}
      </StyledTableFooterRow>
    </TableFooterComp>
  );
};

export default TableFooterSection;
