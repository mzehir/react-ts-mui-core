import React from 'react';
import { CardCompProps, cardCompDefaultProps } from './cardHelper';
import Card from '@mui/material/Card';

const CardComp: React.FC<CardCompProps> = (props) => {
  const { children, ...cardProps } = { ...cardCompDefaultProps, ...props };

  return <Card {...cardProps}>{children}</Card>;
};

export default CardComp;
