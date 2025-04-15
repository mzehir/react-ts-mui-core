export interface AgGridRadioCustomFilterCompItemProp {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface AgGridRadioCustomFilterCompProps {
  label: string;
  isLabelTranslation?: boolean;
  items: AgGridRadioCustomFilterCompItemProp[];
  isItemTextTranslation?: boolean;
  disabled?: boolean;
}
