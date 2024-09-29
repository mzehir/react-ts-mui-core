import React from 'react';
import IconButton from '@mui/material/IconButton';
import { IconButtonCompProps, iconButtonCompDefaultProps } from './iconButtonHelper';

const IconButtonComp: React.FC<IconButtonCompProps> = (props) => {
  const { children, ...iconButtonProps } = { ...iconButtonCompDefaultProps, ...props };

  return <IconButton {...iconButtonProps}>{children}</IconButton>;
};

export default IconButtonComp;
