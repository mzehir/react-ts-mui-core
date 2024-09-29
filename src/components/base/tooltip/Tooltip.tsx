import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import { tooltipCompDefaultProps, TooltipCompProps } from './tooltipHelper';
import Tooltip from '@mui/material/Tooltip';

const TooltipComp: React.FC<TooltipCompProps> = (props) => {
  const { title, children, isTranslation, ...tooltipProps } = { ...tooltipCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return (
    <Tooltip title={isTranslation ? childrenTranslate(title, translate) : title} {...tooltipProps}>
      {children}
    </Tooltip>
  );
};

export default TooltipComp;
