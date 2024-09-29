import { FormLabelProps } from '@mui/material/FormLabel';

export interface FormLabelCompProps extends FormLabelProps {
  isTranslation?: boolean;
}

export const formLabelCompDefaultProps: Partial<FormLabelCompProps> = {
  isTranslation: true,
};
