import { InputLabelProps } from '@mui/material/InputLabel';

export interface InputLabelCompProps extends InputLabelProps {
  isTranslation?: boolean;
}

export const inputLabelCompDefaultProps: InputLabelCompProps = {
  isTranslation: true,
};
