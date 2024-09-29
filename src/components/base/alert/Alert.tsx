import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import Alert from '@mui/material/Alert';
import { AlertCompProps, alertCompDefaultProps } from './alertHelper';

const AlertComp: React.FC<AlertCompProps> = (props) => {
  const { children, isTranslation, ...alertProps } = { ...alertCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return <Alert {...alertProps}>{isTranslation ? childrenTranslate(children, translate) : children}</Alert>;
};

export default AlertComp;
