import useLanguageContext from '../../../../hooks/useLanguageContext';
import TableRowComp from '../../../base/tableRow/TableRow';
import TableCellComp from '../../../base/tableCell/TableCell';
import TableFooterComp from '../../../base/tableFooter/TableFooter';
import { processSummary } from '../customTableMethods';
import { CustomTableProps } from '../customTableTypes';
import { styled } from '@mui/material/styles';
import React from 'react';
import { formatCurrency, formatNumber } from '../../../../utils/methods/format';

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
  operationsColumnWidth,
}: {
  cells: CustomTableProps<T>['cells'];
  rows: CustomTableProps<T>['rows'];
  columnVerticalLinesVisible: CustomTableProps<T>['columnVerticalLinesVisible'];
  stickyColumnVisible: boolean;
  operationsColumnWidth: CustomTableProps<T>['operationsColumnWidth'];
}): JSX.Element => {
  const { translate } = useLanguageContext();

  const renderCellContent = (
    cell: CustomTableProps<object>['cells'][number],
    rows: CustomTableProps<object>['rows'],
  ): React.ReactNode => {
    let _label: string = '';
    let _value: string | number = '';

    if (cell.settings?.footer?.cell?.defaultLabelOpen) {
      _label = translate(`component.${cell.settings?.footer?.cell?.summaryType ?? 'count'}`) + ': ';
    } else if (cell.settings?.footer?.cell?.prepareCustomLabel) {
      const customLabel = cell.settings?.footer?.cell?.prepareCustomLabel?.(cell.key);
      _label = cell.settings?.footer?.cell?.customLabelIsTranslation ? translate(customLabel) : customLabel;
    }

    if (cell.settings?.footer?.cell?.summaryType && cell.settings?.footer?.cell?.summaryType !== 'custom') {
      const _processSummaryValue = processSummary(
        cell.settings?.footer?.cell?.summaryType,
        cell.key,
        rows as Record<string, unknown>[],
      );
      _value = _processSummaryValue;
    } else if (
      cell.settings?.footer?.cell?.summaryType === 'custom' &&
      cell.settings?.footer?.cell?.summaryCustomCalculate
    ) {
      const _summaryCustomCalculateValue = cell.settings?.footer?.cell?.summaryCustomCalculate(
        cell.key,
        rows as Record<string, unknown>[],
      );
      _value = _summaryCustomCalculateValue;
    } else {
      _value = '-';
    }

    if (typeof _value === 'number' && cell.settings?.footer?.cell?.summaryType !== 'count') {
      const formattedValue =
        cell.settings?.footer?.cell?.formatType === 'currency' ? formatCurrency(_value) : formatNumber(_value);

      _value = formattedValue;
    }

    return (
      <>
        {_label}
        {_value}
      </>
    );
  };

  return (
    <TableFooterComp
      sx={{
        position: 'sticky',
        bottom: 0,
        zIndex: 2,
        backgroundColor: (theme) => theme.customTable?.stickyColumn?.backgroundSecondary,
      }}
    >
      <StyledTableFooterRow>
        {stickyColumnVisible && (
          <StickyTableFooterColumn
            align="center"
            style={{
              minWidth: operationsColumnWidth,
            }}
          />
        )}

        {cells.map((cell, cellIndex) =>
          cell.settings?.footer?.cell?.open ? (
            <TableCellComp
              key={cellIndex.toString()}
              align={cell.settings?.head?.cell?.align}
              isTranslation={false}
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                ...(columnVerticalLinesVisible ? { boxShadow: (theme) => `1px 0 0 0 ${theme.palette.divider}` } : {}),
              }}
            >
              {renderCellContent(cell, rows)}
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
