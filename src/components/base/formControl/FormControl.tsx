import React from 'react';
import FormControl from '@mui/material/FormControl';
import { FormControlCompProps, formControlCompDefaultProps } from './formControlHelper';

const FormControlComp: React.FC<FormControlCompProps> = (props) => {
  const { children, ...formControlProps } = { ...formControlCompDefaultProps, ...props };

  return <FormControl {...formControlProps}>{children}</FormControl>;
};

export default FormControlComp;
