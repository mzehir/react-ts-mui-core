import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import { DialogActionsCompProps, dialogActionsCompDefaultProps } from './dialogActionsHelper';

const DialogActionsComp: React.FC<DialogActionsCompProps> = (props) => {
  const { children, ...dialogActionsProps } = { ...dialogActionsCompDefaultProps, ...props };

  return <DialogActions {...dialogActionsProps}>{children}</DialogActions>;
};

export default DialogActionsComp;
