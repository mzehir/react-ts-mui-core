import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { ColumnFilterType } from './columnFilter/columnFilterType';

type CellDataType = 'text' | 'number' | 'boolean' | 'date' | 'dateString' | 'object';

type ValueFormatterType =
  | 'stringFormatter' // Basic text display or translation (e.g., using a translate function)
  | 'dateFormatter' // Formatting date values into a specific format (e.g., 26/04/2025 or 2025-04-26)
  | 'phoneFormatter' // Formatting phone numbers into a standardized format (e.g., +90 (532) 123 45 67)
  | 'booleanFormatter' // Converting boolean values into a readable form (e.g., ✔️ / ❌, Yes / No)
  | 'currencyFormatter' // Displaying numbers in a currency format (e.g., $1,234.56 or ₺5.432,10)
  | 'numberFormatter' // Formatting numbers with thousand separators and decimal points (e.g., 1000 → 1,000.00)
  | 'percentFormatter'; // Converting numbers into a percentage format (e.g., 0.85 → %85)

interface ICurrencyFormatterExtraProps {
  isPrefix?: boolean;
  customPrefix?: string;
}
interface IExtraPropsForValueFormatterType {
  currencyFormatterExtraProps: ICurrencyFormatterExtraProps;
  // numberFormatterExtraProps: INumberFormatterExtraProps;
  // percentFormatterExtraProps: IPercentFormatterExtraProps;
}

export type ColumnType = ColDef & {
  isHeaderCellTranslation?: boolean;
  isBodyCellTranslation?: boolean;
  cellDataType: CellDataType;
  customFilter?: ColumnFilterType;
  //
  customValueFormatter?: (params: ValueFormatterParams) => string | number;
  valueFormatterType?: ValueFormatterType;
  extraPropsForValueFormatterType?: IExtraPropsForValueFormatterType;
};
