import React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogCompProps, dialogCompDefaultProps } from './dialogHelper';

const DialogComp: React.FC<DialogCompProps> = (props) => {
  const { children, ...dialogProps } = { ...dialogCompDefaultProps, ...props };

  return <Dialog {...dialogProps}>{children}</Dialog>;
};

export default DialogComp;
