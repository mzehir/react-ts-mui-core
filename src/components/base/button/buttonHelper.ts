import { ButtonProps } from '@mui/material/Button';

export interface ButtonCompProps extends ButtonProps {
  isTranslation?: boolean;
}

export const buttonCompDefaultProps: ButtonCompProps = {
  isTranslation: true,
};
