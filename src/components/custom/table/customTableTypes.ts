import { ReactNode } from 'react';
import { IconButtonColor } from '../../base/iconButton/iconButtonHelper';

export const cellWidthDefinitions = {
  vvs: 50,
  vs: 75,
  s: 100,
  sv: 125,
  svv: 150,
  vvm: 175,
  vm: 200,
  m: 225,
  mv: 250,
  mvv: 275,
  vvl: 300,
  vl: 325,
  l: 350,
  lv: 375,
  lvv: 400,
} as const;

type AlignType = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export type SummaryType = 'sum' | 'min' | 'max' | 'avg' | 'count' | 'custom';

type FormatType = 'decimalThousandSeparator' | 'currency';

interface CellSettingsHeadBody {
  minWidth?: keyof typeof cellWidthDefinitions | number;
  width?: keyof typeof cellWidthDefinitions | number;
  align?: AlignType;
  isTranslation?: boolean;
  prepareCellTextMethod?: (rowData: Record<string, unknown>, cellText?: string | number | string[]) => string;
  renderCustomComponent?: (rowData: Record<string, unknown>, cellText?: string | number | string[]) => React.ReactNode;
}

interface CellSettingsFooter {
  open?: boolean;
  defaultLabelOpen?: boolean;
  prepareCustomLabel?: (key: string) => string;
  customLabelIsTranslation?: boolean;
  summaryType: SummaryType;
  summaryCustomCalculate?: (key: string, rows: unknown[]) => string;
  formatType?: FormatType;
  prepareCustomFormat?: (value: number | string) => number | string;
}

interface CellHeadBodySettings {
  cell?: CellSettingsHeadBody;
}

interface CellFooterSettings {
  cell?: CellSettingsFooter;
}

interface CellSettings {
  head?: CellHeadBodySettings;
  body?: CellHeadBodySettings;
  footer?: CellFooterSettings;
}

export interface Cell {
  key: string | 'spacer';
  label?: string;
  settings?: CellSettings;
}

export type ProcessColumnItemFields =
  | {
      type: 'iconButton';
      icon: ReactNode;
      color?: IconButtonColor;
      visable?: boolean;
      visablePrepare?: (row: unknown) => boolean;
      disabled?: boolean;
      disabledPrepare?: (row: unknown) => boolean;
      onClick: (event: React.MouseEvent<HTMLButtonElement>, row: unknown) => void;
    }
  | {
      type: 'button';
      label: string;
      onClick: (event: React.MouseEvent<HTMLButtonElement>, row: unknown) => void;
    };

export interface CustomTableProps<T extends object> {
  cells: Cell[];
  rows: T[];
  stickyHeaderActive?: boolean;
  columnVerticalLinesVisible?: boolean;
  operationsColumnWidth?: number | string; // 150 || "150px" vs...
  summaryOpen?: boolean;
  onEditClick?: (event: React.MouseEvent<HTMLButtonElement>, row: T) => void;
  onViewClick?: (event: React.MouseEvent<HTMLButtonElement>, row: T) => void;
  onDeleteClick?: (event: React.MouseEvent<HTMLButtonElement>, row: T) => void;
  onAddClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDownloadClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  processColumnItems?: ProcessColumnItemFields[];
  addClickButtonCustomText?: string;
  addClickButtonCustomIcon?: ReactNode;
}
