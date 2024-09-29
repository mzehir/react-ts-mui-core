import { Item as SelectItem } from '../../../base/select/selectHelper';

export interface SelectComponentProp {
  label: string;
  items: SelectItem[];
  defaultValue?: number | string;
  isLabelTranslation?: boolean;
  isItemTranslation?: boolean;
}

export interface SelectComponentSummaryProp {
  summaryLabel: string;
  isSummaryLabelTranslation?: boolean;
}
