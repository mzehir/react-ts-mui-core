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

export interface CustomFilterRef {
  getCurrentFilterValues: () => { [key: string]: ValuesValue };
}
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

//***********************************************
//***********************************************
//***********************************************
//***********************************************
//***********************************************

/**
 * Checks if the first string (sub) is a subsequence of the second string (str).
 *
 * A subsequence is a sequence derived from another sequence by deleting some
 * or no elements without changing the order of the remaining elements.
 *
 * @param {string} sub - The potential subsequence.
 * @param {string} str - The string to check against.
 * @returns {boolean} - Returns true if `sub` is a subsequence of `str`, otherwise false.
 *
 * ### Examples:
 *
 * isSubsequence('abc', 'aebdc');
 * ! Returns: true
 * ! Explanation: 'abc' appears in 'aebdc' in the same order.
 *
 * isSubsequence('abc', 'acb');
 * ! Returns: false
 * ! Explanation: Although all characters of 'abc' are in 'acb', their order is not maintained.
 *
 * isSubsequence('hello', 'hepllo');
 * ! Returns: true
 * ! Explanation: 'hello' is a subsequence of 'hepllo'.
 *
 * isSubsequence('test', 'teeeessst');
 * ! Returns: true
 * ! Explanation: 'test' can be formed by selecting characters in order from 'teeeessst'.
 */

export function isSubsequence(sub: string, str: string): boolean {
  let subIndex = 0;
  for (const char of str) {
    if (char === sub[subIndex]) {
      subIndex++;
    }
    if (subIndex === sub.length) {
      return true;
    }
  }
  return false;
}
