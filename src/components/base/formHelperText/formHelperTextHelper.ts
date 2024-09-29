import { FormHelperTextProps } from '@mui/material/FormHelperText';

export interface FormHelperTextCompProps extends FormHelperTextProps {
  isTranslation?: boolean;
}

export const formHelperTextCompDefaultProps: FormHelperTextCompProps = {
  isTranslation: false,
};
