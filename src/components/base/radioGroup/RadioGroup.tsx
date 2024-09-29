import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import { RadioGroupCompProps, radioGroupCompDefaultProps } from './radioGroupHelper';

const RadioGroupComp: React.FC<RadioGroupCompProps> = (props) => {
  const { children, ...radioGroupProps } = { ...radioGroupCompDefaultProps, ...props };

  return <RadioGroup {...radioGroupProps}>{children}</RadioGroup>;
};

export default RadioGroupComp;
