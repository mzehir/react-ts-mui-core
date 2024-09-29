import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import Divider from '@mui/material/Divider';
import { DividerCompProps, dividerCompDefaultProps } from './dividerHelper';

const DividerComp: React.FC<DividerCompProps> = (props) => {
  const { children, isTranslation, ...dividerProps } = { ...dividerCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return (
    <Divider {...dividerProps}>
      {children ? (isTranslation ? childrenTranslate(children, translate) : children) : null}
    </Divider>
  );
};

export default DividerComp;
