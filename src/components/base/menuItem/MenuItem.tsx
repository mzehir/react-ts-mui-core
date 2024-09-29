import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import { MenuItemCompProps, menuItemCompDefaultProps } from './menuItemHelper';
import MenuItem from '@mui/material/MenuItem';

const MenuItemComp: React.FC<MenuItemCompProps> = (props) => {
  const { children, isTranslation, ...menuItemProps } = { ...menuItemCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return <MenuItem {...menuItemProps}>{isTranslation ? childrenTranslate(children, translate) : children}</MenuItem>;
};

export default MenuItemComp;
