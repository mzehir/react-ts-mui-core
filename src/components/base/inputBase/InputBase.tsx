import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import InputBase from '@mui/material/InputBase';
import { InputBaseCompProps, inputBaseCompDefaultProps } from './inputBaseHelper';

const InputBaseComp: React.FC<InputBaseCompProps> = (props) => {
  const { isPlaceholderTranslation, isValueTranslation, placeholder, value, ...inputBaseProps } = {
    ...inputBaseCompDefaultProps,
    ...props,
  };

  const { translate } = useLanguageContext();

  return (
    <InputBase
      {...(placeholder ? { placeholder: isPlaceholderTranslation ? translate(placeholder) : placeholder } : {})}
      {...(value || value === ''
        ? { value: isValueTranslation ? childrenTranslate(value as string, translate) : value }
        : {})}
      {...inputBaseProps}
    />
  );
};

export default InputBaseComp;
