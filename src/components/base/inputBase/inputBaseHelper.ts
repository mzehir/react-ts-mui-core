import { InputBaseProps } from '@mui/material/InputBase';

export interface InputBaseCompProps extends InputBaseProps {
  isPlaceholderTranslation?: boolean;
  isValueTranslation?: boolean;
}

export const inputBaseCompDefaultProps: InputBaseCompProps = {
  isPlaceholderTranslation: true,
  isValueTranslation: false,
};
