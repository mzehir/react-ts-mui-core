interface TableCellSettings {
  minWidth?: number;
  width?: number;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  //
  prepareCellTextMethod?: (cellText: string) => string;
}

interface TableCellHeadBodySettings {
  tableCell?: TableCellSettings;
}

interface TableCellConfig {
  head?: TableCellHeadBodySettings;
  body?: TableCellHeadBodySettings;
}

export interface TableCell {
  key: string | 'spacer';
  label?: string;
  settings?: TableCellConfig;
}

export interface CustomTableProps<T extends object> {
  cells: TableCell[];
  rows: T[];
  onEditClick?: (event: React.MouseEvent<HTMLButtonElement>, row: T) => void;
  onViewClick?: (event: React.MouseEvent<HTMLButtonElement>, row: T) => void;
  onDeleteClick?: (event: React.MouseEvent<HTMLButtonElement>, row: T) => void;
  onAddClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
