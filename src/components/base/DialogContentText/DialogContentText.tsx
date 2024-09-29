import React from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogContentTextCompProps, dialogContentTextCompDefaultProps } from './dialogContentTextHelper';

const DialogContentTextComp: React.FC<DialogContentTextCompProps> = (props) => {
  const { children, ...dialogContentTextProps } = { ...dialogContentTextCompDefaultProps, ...props };

  return <DialogContentText {...dialogContentTextProps}>{children}</DialogContentText>;
};

export default DialogContentTextComp;
