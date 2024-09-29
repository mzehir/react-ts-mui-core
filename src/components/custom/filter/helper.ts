import { Dayjs } from 'dayjs';
import { TextFieldComponentProp, TextFieldComponentSummaryProp } from './helper/componentTextFieldHelper';
import { CheckboxComponentProp, CheckboxComponentSummaryProp } from './helper/componentCheckboxHelper';
import { RadioComponentProp, RadioComponentSummaryProp } from './helper/componentRadioHelper';
import { SelectComponentProp, SelectComponentSummaryProp } from './helper/componentSelectHelper';
import { DatePickerComponentProp, DatePickerSummaryProp } from './helper/componentDatePickerHelper';
import {
  NumaricTextFieldComponentProp,
  NumaricTextFieldComponentSummaryProp,
} from './helper/componentNumaricTextFieldHelper';

export type FilterItemComponent =
  | {
      name: string;
      componentType: 'textField';
      componentProps: TextFieldComponentProp;
      summaryProps: TextFieldComponentSummaryProp;
    }
  | {
      name: string;
      componentType: 'numericTextField';
      componentProps: NumaricTextFieldComponentProp;
      summaryProps: NumaricTextFieldComponentSummaryProp;
    }
  | {
      name: string;
      componentType: 'datePicker';
      componentProps: DatePickerComponentProp;
      summaryProps: DatePickerSummaryProp;
    }
  | {
      name: string;
      componentType: 'checkbox';
      componentProps: CheckboxComponentProp;
      summaryProps: CheckboxComponentSummaryProp;
    }
  | {
      name: string;
      componentType: 'radio';
      componentProps: RadioComponentProp;
      summaryProps: RadioComponentSummaryProp;
    }
  | {
      name: string;
      componentType: 'select';
      componentProps: SelectComponentProp;
      summaryProps: SelectComponentSummaryProp;
    };

export interface CustomFilterProps {
  filterItems: FilterItemComponent[];
  onFilter: (filterValues: unknown) => void;
}

//***********************************************
//***********************************************
//***********************************************
//***********************************************
//***********************************************

export interface ValuesValue {
  value: string | number | boolean | Dayjs | null;
}

export interface HandleValueChangeParams {
  key: string;
  newValue: string | number | boolean | Dayjs | null;
  type?: 'delete' | 'allDelete' | undefined | null;
}
