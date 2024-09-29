import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';

import InputLabel from '@mui/material/InputLabel';
import { InputLabelCompProps, inputLabelCompDefaultProps } from './inputLabelHelper';

const InputLabelComp: React.FC<InputLabelCompProps> = (props) => {
  const { children, isTranslation, ...inputLabelProps } = { ...inputLabelCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return (
    <InputLabel {...inputLabelProps}>{isTranslation ? childrenTranslate(children, translate) : children}</InputLabel>
  );
};

export default InputLabelComp;
