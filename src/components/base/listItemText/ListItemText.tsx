import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import { listItemTextCompDefaultProps, ListItemTextCompProps } from './listItemTextHelper';
import ListItemText from '@mui/material/ListItemText';

const ListItemTextComp: React.FC<ListItemTextCompProps> = (props) => {
  const { isTranslation, isPrimaryTranslation, children, primary, ...ListItemIconProps } = {
    ...listItemTextCompDefaultProps,
    ...props,
  };
  const { translate } = useLanguageContext();

  return (
    <ListItemText
      {...(primary ? { primary: isPrimaryTranslation ? childrenTranslate(primary, translate) : primary } : {})}
      {...ListItemIconProps}
    >
      {isTranslation ? childrenTranslate(children, translate) : children}
    </ListItemText>
  );
};

export default ListItemTextComp;
