import React, { ReactNode } from 'react';
import { styled, Theme } from '@mui/material/styles';
import DialogComp from '../../base/dialog/Dialog';
import DialogTitleComp from '../../base/dialogTitle/DialogTitle';
import DialogContentComp from '../../base/dialogContent/DialogContent';
import DialogActionsComp from '../../base/dialogActions/DialogActions';
import IconButtonComp from '../../base/iconButton/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\
//***************BootstrapDialog***************\\

interface BootstrapDialogProps {
  children?: ReactNode;
  [key: string]: unknown;
}

export const BootstrapDialog = styled(DialogComp)<BootstrapDialogProps>(
  ({ theme }: { theme: Theme } & BootstrapDialogProps) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }),
);

//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\
//***************BootstrapDialogTitle***************\\

interface BootstrapDialogTitleProps {
  children?: ReactNode;
  onClose?: () => void;
  [key: string]: unknown;
}

export const BootstrapDialogTitle: React.FC<BootstrapDialogTitleProps> = (props) => {
  const { children, onClose = () => {}, ...other } = props;

  return (
    <DialogTitleComp sx={{ m: 0, p: 2 }} {...other}>
      {children}

      {onClose ? (
        <IconButtonComp
          aria-label="close"
          onClick={() => onClose()}
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButtonComp>
      ) : null}
    </DialogTitleComp>
  );
};

//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\
//***************BootstrapDialogContent***************\\

interface BootstrapDialogContentProps {
  children?: ReactNode;
  [key: string]: unknown;
}

export const BootstrapDialogContent: React.FC<BootstrapDialogContentProps> = (props) => {
  const { children, ...other } = props;

  return (
    <DialogContentComp dividers {...other}>
      {children}
    </DialogContentComp>
  );
};

//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\
//***************BootstrapDialogActions***************\\

interface BootstrapDialogActionsProps {
  children?: ReactNode;
  [key: string]: unknown;
}

export const BootstrapDialogActions: React.FC<BootstrapDialogActionsProps> = (props) => {
  const { children, ...other } = props;

  return <DialogActionsComp {...other}>{children}</DialogActionsComp>;
};
