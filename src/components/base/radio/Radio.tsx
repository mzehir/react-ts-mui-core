import React from 'react';
import Radio from '@mui/material/Radio';
import { RadioCompProps, radioCompDefaultProps } from './radioHelper';

const RadioComp: React.FC<RadioCompProps> = (props) => {
  const { ...radioProps } = { ...radioCompDefaultProps, ...props };

  return <Radio {...radioProps} />;
};

export default RadioComp;
