import React from 'react';
import { CardActionsCompProps, cardActionsCompDefaultProps } from './cardActionsHelper';
import CardActions from '@mui/material/CardActions';

const CardActionsComp: React.FC<CardActionsCompProps> = (props) => {
  const { children, ...cardActionsProps } = { ...cardActionsCompDefaultProps, ...props };

  return <CardActions {...cardActionsProps}>{children}</CardActions>;
};

export default CardActionsComp;
