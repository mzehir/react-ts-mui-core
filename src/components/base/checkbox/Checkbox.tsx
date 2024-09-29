import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { CheckboxCompProps, checkboxCompDefaultProps } from './checkboxHelper';

const CheckboxComp: React.FC<CheckboxCompProps> = (props) => {
  const { ...checkboxProps } = { ...checkboxCompDefaultProps, ...props };

  return <Checkbox {...checkboxProps} />;
};

export default CheckboxComp;
