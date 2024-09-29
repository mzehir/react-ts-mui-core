import React from 'react';
import DialogContent from '@mui/material/DialogContent';
import { DialogContentCompProps, dialogContentCompDefaultProps } from './dialogContentHelper';

const DialogContentComp: React.FC<DialogContentCompProps> = (props) => {
  const { children, ...dialogContentProps } = { ...dialogContentCompDefaultProps, ...props };

  return <DialogContent {...dialogContentProps}>{children}</DialogContent>;
};

export default DialogContentComp;
