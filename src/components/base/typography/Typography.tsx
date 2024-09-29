import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import { typographyCompDefaultProps, TypographyCompProps } from './typographyHelper';
import Typography from '@mui/material/Typography';

const TypographyComp: React.FC<TypographyCompProps> = (props) => {
  const { children, isTranslation, ...typographyProps } = { ...typographyCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return (
    <Typography {...typographyProps}>{isTranslation ? childrenTranslate(children, translate) : children}</Typography>
  );
};

export default TypographyComp;
