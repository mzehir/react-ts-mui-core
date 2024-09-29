import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

export interface DatePickerCompProps extends DatePickerProps<Dayjs> {
  isLabelTranslation?: boolean;
  isHelperTextTranslation?: boolean;
}

export const datePickerCompDefaultProps: DatePickerCompProps = {
  isLabelTranslation: true,
  isHelperTextTranslation: true,
};
