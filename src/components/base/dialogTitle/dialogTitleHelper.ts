import { DialogTitleProps } from '@mui/material/DialogTitle';

export interface DialogTitleCompProps extends DialogTitleProps {
  isTranslation?: boolean;
}

export const dialogTitleCompDefaultProps: DialogTitleCompProps = {
  isTranslation: true,
};
