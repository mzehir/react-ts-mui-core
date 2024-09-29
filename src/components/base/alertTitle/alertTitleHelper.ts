import { AlertTitleProps } from '@mui/material/AlertTitle';

export interface AlertTitleCompProps extends AlertTitleProps {
  isTranslation?: boolean;
}

export const alertTitleCompDefaultProps: AlertTitleCompProps = {
  isTranslation: true,
};
