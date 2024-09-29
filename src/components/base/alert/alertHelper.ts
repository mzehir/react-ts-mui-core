import { AlertProps } from '@mui/material/Alert';

export interface AlertCompProps extends AlertProps {
  isTranslation?: boolean;
}

export const alertCompDefaultProps: AlertCompProps = {
  isTranslation: true,
};
