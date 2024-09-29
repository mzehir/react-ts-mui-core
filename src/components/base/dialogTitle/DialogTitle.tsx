import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogTitleCompProps, dialogTitleCompDefaultProps } from './dialogTitleHelper';

const DialogTitleComp: React.FC<DialogTitleCompProps> = (props) => {
  const { children, isTranslation, ...dialogTitleProps } = { ...dialogTitleCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return (
    <DialogTitle {...dialogTitleProps}>{isTranslation ? childrenTranslate(children, translate) : children}</DialogTitle>
  );
};

export default DialogTitleComp;
