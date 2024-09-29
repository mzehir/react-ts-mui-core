import { MenuProps } from '@mui/material/Menu';

export interface MenuCompProps extends MenuProps {
  isTranslation?: boolean;
}

export const menuCompDefaultProps: MenuCompProps = {
  isTranslation: false,
  open: false,
};
