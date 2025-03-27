import React from 'react';
import Switch from '@mui/material/Switch';
import { SwitchCompProps, switchCompDefaultProps } from './switchHelper';

const SwitchComp: React.FC<SwitchCompProps> = (props) => {
  const { ...switchProps } = { ...switchCompDefaultProps, ...props };

  return <Switch {...switchProps} />;
};

export default SwitchComp;
