import React from 'react';
import { CardContentCompProps, cardContentCompDefaultProps } from './cardContentHelper';
import CardContent from '@mui/material/CardContent';

const CardContentComp: React.FC<CardContentCompProps> = (props) => {
  const { children, ...cardContentProps } = { ...cardContentCompDefaultProps, ...props };

  return <CardContent {...cardContentProps}>{children}</CardContent>;
};

export default CardContentComp;
