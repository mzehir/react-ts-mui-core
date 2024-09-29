import React from 'react';
import { AccordionDetailsCompProps, accordionDetailsCompDefaultProps } from './accordionDetailsHelper';
import AccordionDetails from '@mui/material/AccordionDetails';

const AccordionDetailsComp: React.FC<AccordionDetailsCompProps> = (props) => {
  const { children, ...accordionDetailsProps } = { ...accordionDetailsCompDefaultProps, ...props };

  return <AccordionDetails {...accordionDetailsProps}>{children}</AccordionDetails>;
};

export default AccordionDetailsComp;
