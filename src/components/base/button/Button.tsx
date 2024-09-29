import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import Button from '@mui/material/Button';
import { ButtonCompProps, buttonCompDefaultProps } from './buttonHelper';

const ButtonComp: React.FC<ButtonCompProps> = (props) => {
  const { children, isTranslation, ...buttonProps } = { ...buttonCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return <Button {...buttonProps}>{isTranslation ? childrenTranslate(children, translate) : children}</Button>;
};

export default ButtonComp;
