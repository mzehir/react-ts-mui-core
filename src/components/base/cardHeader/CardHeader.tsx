import React from 'react';
import { CardHeaderCompProps, cardHeaderCompDefaultProps } from './cardHeaderHelper';
import CardHeader from '@mui/material/CardHeader';

const CardHeaderComp: React.FC<CardHeaderCompProps> = (props) => {
  const { ...cardHeaderProps } = { ...cardHeaderCompDefaultProps, ...props };

  return <CardHeader {...cardHeaderProps} />;
};

export default CardHeaderComp;
