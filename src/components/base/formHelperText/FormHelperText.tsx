import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import { FormHelperTextCompProps, formHelperTextCompDefaultProps } from './formHelperTextHelper';
import FormHelperText from '@mui/material/FormHelperText';

const FormHelperTextComp: React.FC<FormHelperTextCompProps> = (props) => {
  const { children, isTranslation, ...formHelperTextProps } = { ...formHelperTextCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return (
    <FormHelperText {...formHelperTextProps}>
      {isTranslation ? childrenTranslate(children, translate) : children}
    </FormHelperText>
  );
};

export default FormHelperTextComp;
