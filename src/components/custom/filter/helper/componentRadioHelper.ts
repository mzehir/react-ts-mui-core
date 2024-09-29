interface RadioItem {
  label: string;
  value: string | number | boolean;
}

export interface RadioComponentProp {
  label: string;
  items: RadioItem[];
  defaultValue?: number | string;
  isLabelTranslation?: boolean;
  isItemTranslation?: boolean;
}

export interface RadioComponentSummaryProp {
  summaryLabel: string;
  isSummaryLabelTranslation?: boolean;
}
