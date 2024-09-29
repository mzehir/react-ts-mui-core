import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import { MenuCompProps, menuCompDefaultProps } from './menuHelper';
import Menu from '@mui/material/Menu';

const MenuComp: React.FC<MenuCompProps> = (props) => {
  const { children, isTranslation, ...menuItemProps } = { ...menuCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return <Menu {...menuItemProps}>{isTranslation ? childrenTranslate(children, translate) : children}</Menu>;
};

export default MenuComp;
