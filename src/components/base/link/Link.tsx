import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import { linkCompDefaultProps, LinkCompProps } from './linkHelper';
import Link from '@mui/material/Link';

const LinkComp: React.FC<LinkCompProps> = (props) => {
  const { children, isTranslation, ...typographyProps } = { ...linkCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return <Link {...typographyProps}>{isTranslation ? childrenTranslate(children, translate) : children}</Link>;
};

export default LinkComp;
