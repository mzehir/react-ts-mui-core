import { ChipProps } from '@mui/material/Chip';

export interface ChipCompProps extends ChipProps {
  isTranslation?: boolean;
}

export const chipCompDefaultProps: ChipCompProps = {
  isTranslation: true,
};

// for color
export type ChipCompColor = ChipProps['color'];
