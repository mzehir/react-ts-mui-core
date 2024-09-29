import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import FormLabel from '@mui/material/FormLabel';
import { FormLabelCompProps, formLabelCompDefaultProps } from './formLabelHelper';

const FormLabelComp: React.FC<FormLabelCompProps> = (props) => {
  const { children, isTranslation, ...formLabelProps } = { ...formLabelCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return <FormLabel {...formLabelProps}>{isTranslation ? childrenTranslate(children, translate) : children}</FormLabel>;
};

export default FormLabelComp;
