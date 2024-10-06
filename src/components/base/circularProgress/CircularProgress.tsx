import React from 'react';
import { CircularProgressCompProps, circularProgressCompDefaultProps } from './circularProgressHelper';
import CircularProgress from '@mui/material/CircularProgress';

const CircularProgressComp: React.FC<CircularProgressCompProps> = (props) => {
  const { ...circularProgressProps } = { ...circularProgressCompDefaultProps, ...props };

  return <CircularProgress {...circularProgressProps} />;
};

export default CircularProgressComp;
