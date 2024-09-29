import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import AlertTitle from '@mui/material/AlertTitle';
import { AlertTitleCompProps, alertTitleCompDefaultProps } from './alertTitleHelper';

const AlertTitleComp: React.FC<AlertTitleCompProps> = (props) => {
  const { children, isTranslation, ...alertProps } = { ...alertTitleCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return <AlertTitle {...alertProps}>{isTranslation ? childrenTranslate(children, translate) : children}</AlertTitle>;
};

export default AlertTitleComp;
