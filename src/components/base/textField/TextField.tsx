import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import TextField from '@mui/material/TextField';
import { TextFieldCompProps, textFieldCompDefaultProps } from './textFieldHelper';

const TextFieldComp: React.FC<TextFieldCompProps> = (props) => {
  const {
    isLabelTranslation,
    isHelperTextTranslation,
    isPlaceholderTranslation,
    isValueTranslation,
    label,
    value,
    helperText,
    placeholder,
    ...textFieldProps
  } = {
    ...textFieldCompDefaultProps,
    ...props,
  };

  const { translate } = useLanguageContext();

  return (
    <TextField
      {...(label ? { label: isLabelTranslation ? childrenTranslate(label, translate) : label } : {})}
      {...(placeholder ? { placeholder: isPlaceholderTranslation ? translate(placeholder) : placeholder } : {})}
      {...(value || value === ''
        ? { value: isValueTranslation ? childrenTranslate(value as string, translate) : value }
        : {})}
      {...(helperText
        ? {
            helperText: isHelperTextTranslation ? childrenTranslate(helperText, translate) : helperText,
          }
        : {})}
      {...textFieldProps}
    />
  );
};

export default TextFieldComp;
