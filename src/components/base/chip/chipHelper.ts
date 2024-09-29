import { ChipProps } from '@mui/material/Chip';

export interface ChipCompProps extends ChipProps {
  isTranslation?: boolean;
}

export const chipCompDefaultProps: ChipCompProps = {
  isTranslation: true,
};
