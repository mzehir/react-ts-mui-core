import React from 'react';
import { AccordionSummaryCompProps, accordionSummaryCompDefaultProps } from './accordionSummaryHelper';
import AccordionSummary from '@mui/material/AccordionSummary';

const AccordionSummaryComp: React.FC<AccordionSummaryCompProps> = (props) => {
  const { children, ...accordionSummaryProps } = { ...accordionSummaryCompDefaultProps, ...props };

  return <AccordionSummary {...accordionSummaryProps}>{children}</AccordionSummary>;
};

export default AccordionSummaryComp;
