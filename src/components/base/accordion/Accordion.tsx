import React from 'react';
import { AccordionCompProps, accordionCompDefaultProps } from './accordionHelper';
import Accordion from '@mui/material/Accordion';

const AccordionComp: React.FC<AccordionCompProps> = (props) => {
  const { children, ...accordionProps } = { ...accordionCompDefaultProps, ...props };

  return <Accordion {...accordionProps}>{children}</Accordion>;
};

export default AccordionComp;
