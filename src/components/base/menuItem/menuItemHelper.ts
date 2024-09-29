import { MenuItemProps } from '@mui/material/MenuItem';

export interface MenuItemCompProps extends MenuItemProps {
  isTranslation?: boolean;
}

export const menuItemCompDefaultProps: MenuItemCompProps = {
  isTranslation: false,
};
