import { BoxProps } from '@mui/material/Box';

export interface BoxCompProps extends BoxProps {
  isTranslation?: boolean;
}

export const boxCompDefaultProps: BoxCompProps = {
  isTranslation: false,
};
