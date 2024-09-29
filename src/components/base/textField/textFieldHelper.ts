import { TextFieldProps } from '@mui/material/TextField';

export interface TextFieldCompProps extends Omit<TextFieldProps, 'children'> {
  isLabelTranslation?: boolean;
  isHelperTextTranslation?: boolean;
  isPlaceholderTranslation?: boolean;
  isValueTranslation?: boolean;
}

export const textFieldCompDefaultProps: TextFieldCompProps = {
  isLabelTranslation: true,
  isHelperTextTranslation: true,
  isPlaceholderTranslation: true,
  isValueTranslation: false,
};
