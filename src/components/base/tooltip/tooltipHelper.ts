import { TooltipProps } from '@mui/material/Tooltip';

export interface TooltipCompProps extends TooltipProps {
  isTranslation?: boolean;
}

export const tooltipCompDefaultProps: Partial<TooltipCompProps> = {
  isTranslation: false,
};
