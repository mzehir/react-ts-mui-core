import React from 'react';
import { gridCompDefaultProps, GridCompProps } from './gridHelper';
import Grid from '@mui/material/Grid';

const GridComp: React.FC<GridCompProps> = (props) => {
  const { children, ...gridProps } = { ...gridCompDefaultProps, ...props };

  return <Grid {...gridProps}>{children}</Grid>;
};

export default GridComp;
