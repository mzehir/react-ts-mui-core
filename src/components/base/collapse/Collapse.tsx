import React from 'react';
import { collapseCompDefaultProps, CollapseCompProps } from './collapseHelper';
import Collapse from '@mui/material/Collapse';

const CollapseComp: React.FC<CollapseCompProps> = (props) => {
  const { children, ...collapseProps } = { ...collapseCompDefaultProps, ...props };

  return <Collapse {...collapseProps}>{children}</Collapse>;
};

export default CollapseComp;
