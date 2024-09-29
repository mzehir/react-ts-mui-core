import React from 'react';
import { PaperCompProps, paperCompDefaultProps } from './paperHelper';
import Paper from '@mui/material/Paper';

const PaperComp: React.FC<PaperCompProps> = (props) => {
  const { children, ...paperProps } = { ...paperCompDefaultProps, ...props };

  return <Paper {...paperProps}>{children}</Paper>;
};

export default PaperComp;
