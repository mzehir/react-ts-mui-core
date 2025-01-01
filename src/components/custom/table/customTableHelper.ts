type SummaryType = 'sum' | 'min' | 'max' | 'avg' | 'count' | 'custom';
interface TableCellSettings {
  minWidth?: number;
  width?: number;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  isTranslation?: boolean;
  prepareCellTextMethod?: (rowData: Record<string, unknown>, cellText?: string | number) => string;
  renderCustomComponent?: (cellText: unknown) => React.ReactNode;
}

interface FooterTableCellSettings {
  open?: boolean;
  defaultLabelOpen?: boolean;
  prepareCustomLabel?: (key: string) => string;
  customLabelIsTranslation?: boolean;
  summaryType: SummaryType;
  summaryCustomCalculate?: (key: string, rows: unknown[]) => string;
}

interface TableCellHeadBodySettings {
  tableCell?: TableCellSettings;
}

interface TableCellFooterSettings {
  tableCell?: FooterTableCellSettings;
}

interface TableCellConfig {
  head?: TableCellHeadBodySettings;
  body?: TableCellHeadBodySettings;
  footer?: TableCellFooterSettings;
}

export interface TableCell {
  key: string | 'spacer';
  label?: string;
  settings?: TableCellConfig;
}

export interface CustomTableProps<T extends object> {
  cells: TableCell[];
  rows: T[];
  columnVerticalLinesVisible?: boolean;
  stickyColumnWidth?: number | string;
  summaryOpen?: boolean;
  onEditClick?: (event: React.MouseEvent<HTMLButtonElement>, row: T) => void;
  onViewClick?: (event: React.MouseEvent<HTMLButtonElement>, row: T) => void;
  onDeleteClick?: (event: React.MouseEvent<HTMLButtonElement>, row: T) => void;
  onAddClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const cellWidthDefinitions = {
  xxs: 50,
  xs: 75,
  s: 100,
  m: 150,
  m2: 175,
  l: 200,
  xl: 250,
  xxl: 300,
  xxxl: 500,
};

export function processSummary(summaryType: SummaryType, key: string, rows: Record<string, unknown>[]): number {
  // Map through rows and extract the key values
  const values = rows
    .map((row) => {
      const value = row[key];
      // Check if the value is a string or number
      if (typeof value === 'string') {
        const numericValue = Number(value);
        return isNaN(numericValue) ? null : numericValue;
      } else if (typeof value === 'number') {
        return value;
      }
      return null;
    })
    .filter((value): value is number => value !== null); // Filter valid numeric values

  // Perform the operation based on the summaryType
  switch (summaryType) {
    case 'sum':
      return values.reduce((acc, val) => acc + val, 0);
    case 'min':
      return values.length > 0 ? Math.min(...values) : 0;
    case 'max':
      return values.length > 0 ? Math.max(...values) : 0;
    case 'avg':
      return values.length > 0 ? values.reduce((acc, val) => acc + val, 0) / values.length : 0;
    case 'count':
    default:
      return rows.length;
  }
}
