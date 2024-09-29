import { DividerProps } from '@mui/material/Divider';

export interface DividerCompProps extends DividerProps {
  isTranslation?: boolean;
}

export const dividerCompDefaultProps: DividerCompProps = {
  isTranslation: true,
};
