import { Dayjs } from 'dayjs';

export interface DatePickerComponentProp {
  label: string;
  defaultValue?: Dayjs | null;
  isLabelTranslation?: boolean;
}

export interface DatePickerSummaryProp {
  summaryLabel: string;
  isSummaryLabelTranslation?: boolean;
}
