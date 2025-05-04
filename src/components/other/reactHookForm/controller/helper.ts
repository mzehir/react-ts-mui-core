import { Control, FieldValues, Path } from 'react-hook-form';
import { RHFRadioGroupCompItemProp } from './sections/RHFRadioGroupComp';
import { Item as SelectItem } from '../../base/select/selectHelper';
import { Item as AsyncSelectItem } from '../../custom/selects/asyncSelectHelper';

export type componentFields =
  | {
      componentType: 'textField' | 'passwordTextField';
      label?: string;
      placeholder?: string;
      helperText?: string;
      //
      isLabelTranslation?: boolean;
      isPlaceholderTranslation?: boolean;
      isHelperTextTranslation?: boolean;
      isValueTranslation?: boolean;
      //
      error?: boolean;
      disabled?: boolean;
      required?: boolean;
    }
  | {
      componentType: 'numericTextField';
      label?: string;
      placeholder?: string;
      helperText?: string;
      //
      isLabelTranslation?: boolean;
      isPlaceholderTranslation?: boolean;
      isHelperTextTranslation?: boolean;
      //
      isPrefix?: boolean;
      //
      error?: boolean;
      disabled?: boolean;
      required?: boolean;
    }
  | {
      componentType: 'phoneTextField';
      label?: string;
      placeholder?: string;
      helperText?: string;
      //
      isLabelTranslation?: boolean;
      isPlaceholderTranslation?: boolean;
      isHelperTextTranslation?: boolean;
      //
      error?: boolean;
      disabled?: boolean;
      required?: boolean;
    }
  | {
      componentType: 'checkbox';
      label: string;
      helperText?: string;
      //
      isLabelTranslation?: boolean;
      isHelperTextTranslation?: boolean;
      //
      error?: boolean;
      disabled?: boolean;
      required?: boolean;
    }
  | {
      componentType: 'radio';
      label: string;
      helperText?: string;
      //
      isLabelTranslation?: boolean;
      isHelperTextTranslation?: boolean;
      isItemTextTranslation?: boolean;
      //
      error?: boolean;
      disabled?: boolean;
      required?: boolean;
      //
      items: RHFRadioGroupCompItemProp[];
    }
  | {
      componentType: 'select';
      label: string;
      multiple?: boolean;
      helperText?: string;
      //
      isLabelTranslation?: boolean;
      isHelperTextTranslation?: boolean;
      isItemTextTranslation?: boolean;
      //
      error?: boolean;
      disabled?: boolean;
      required?: boolean;
      //
      items: SelectItem[];
    }
  | {
      componentType: 'asyncSelect';
      label: string;
      multiple?: boolean;
      helperText?: string;
      //
      isLabelTranslation?: boolean;
      isHelperTextTranslation?: boolean;
      //
      error?: boolean;
      disabled?: boolean;
      required?: boolean;
      //
      shouldFetchOnEveryOpenMenu?: boolean;
      fetchItemsData: () => Promise<AsyncSelectItem[]>;
      fetchValueItemsData: (value: unknown, multiple: boolean) => Promise<AsyncSelectItem[]>;
      isSearhAndFilter?: boolean;
    }
  | {
      componentType: 'datePicker';
      label?: string;
      helperText?: string;
      //
      isLabelTranslation?: boolean;
      isHelperTextTranslation?: boolean;
      //
      error?: boolean;
      disabled?: boolean;
      required?: boolean;
    };

export interface CustomControllerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  componentFields: componentFields;
}
