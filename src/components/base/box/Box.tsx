import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import { BoxCompProps, boxCompDefaultProps } from './boxHelper';
import Box from '@mui/material/Box';

const BoxComp: React.FC<BoxCompProps> = (props) => {
  const { children, isTranslation, ...boxProps } = { ...boxCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return <Box {...boxProps}>{isTranslation ? childrenTranslate(children, translate) : children}</Box>;
};

export default BoxComp;
