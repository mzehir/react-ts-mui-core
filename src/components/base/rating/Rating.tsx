import React from 'react';
import Rating from '@mui/material/Rating';
import { RatingCompProps, ratingCompDefaultProps } from './ratingHelper';

const RatingComp: React.FC<RatingCompProps> = (props) => {
  const { ...ratingProps } = { ...ratingCompDefaultProps, ...props };

  return <Rating {...ratingProps} />;
};

export default RatingComp;
