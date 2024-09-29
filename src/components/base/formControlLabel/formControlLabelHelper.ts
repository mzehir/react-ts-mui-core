import { FormControlLabelProps } from '@mui/material/FormControlLabel';

export interface FormControlLabelCompProps extends FormControlLabelProps {
  isTranslation?: boolean;
}

export const formControlLabelCompDefaultProps: Partial<FormControlLabelCompProps> = {
  isTranslation: true,
};
