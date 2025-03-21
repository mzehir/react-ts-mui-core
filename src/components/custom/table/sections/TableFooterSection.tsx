import React from 'react';
import useLanguageContext from '../../../../hooks/useLanguageContext';
import { formatCurrency, formatNumber } from '../../../../utils/methods/format';
import TableRowComp from '../../../base/tableRow/TableRow';
import TableCellComp from '../../../base/tableCell/TableCell';
import TableFooterComp from '../../../base/tableFooter/TableFooter';
import { processSummary } from '../customTableMethods';
import { CustomTableProps } from '../customTableTypes';
import { styled } from '@mui/material/styles';

const StyledTableFooterRow = styled(TableRowComp)(({ theme }) => ({
  background: theme.palette.background.default,
}));

const StickyTableFooterColumn = styled(TableCellComp)(({ theme }) => ({
  background: theme.palette.background.default,
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
  shouldForwardProp: (prop) => prop !== 'showVerticalLines',
})<{ showVerticalLines?: boolean }>(({ theme, showVerticalLines }) => ({
  ...(showVerticalLines && {
    borderRight: `1px solid ${theme.palette.divider}`,
  }),
}));

const TableFooterSection = <T extends object>({
  cells,
  rows,
  columnVerticalLinesVisible,
  operationsColumnVisible,
  operationsColumnWidth,
}: {
  cells: CustomTableProps<T>['cells'];
  rows: CustomTableProps<T>['rows'];
  columnVerticalLinesVisible: CustomTableProps<T>['columnVerticalLinesVisible'];
  operationsColumnVisible: boolean;
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
        backgroundColor: (theme) => theme.palette.background.default,
        boxShadow: `
          rgba(0, 0, 0, 0.4) 0px -2px 4px,
          rgba(0, 0, 0, 0.3) 0px -7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px 3px 0px inset,
          rgba(0, 0, 0, 0.1) 0px 0px 5px
        `,
      }}
    >
      <StyledTableFooterRow>
        {operationsColumnVisible && (
          <StickyTableFooterColumn
            align="center"
            style={{
              minWidth: operationsColumnWidth,
            }}
          />
        )}

        {cells.map((cell, cellIndex) =>
          cell.settings?.footer?.cell?.open ? (
            <StyledTableCell
              key={cellIndex.toString()}
              align={cell.settings?.head?.cell?.align}
              isTranslation={false}
              showVerticalLines={columnVerticalLinesVisible}
              sx={{
                fontWeight: 500,
                fontSize: '0.8125rem',
                lineHeight: '1.3928571428571428rem',
              }}
            >
              {renderCellContent(cell, rows)}
            </StyledTableCell>
          ) : (
            <StyledTableCell
              key={cellIndex.toString()}
              isTranslation={false}
              showVerticalLines={columnVerticalLinesVisible}
            />
          ),
        )}
      </StyledTableFooterRow>
    </TableFooterComp>
  );
};

export default TableFooterSection;
