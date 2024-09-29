import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import Chip from '@mui/material/Chip';
import { ChipCompProps, chipCompDefaultProps } from './chipHelper';

const ChipComp: React.FC<ChipCompProps> = (props) => {
  const { children, label, isTranslation, ...chipProps } = { ...chipCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return (
    <Chip label={isTranslation ? childrenTranslate(children || label, translate) : children || label} {...chipProps} />
  );
};

export default ChipComp;
