import React from 'react';
import { avatarCompDefaultProps, AvatarCompProps } from './avatarHelper';
import Avatar from '@mui/material/Avatar';

const AvatarComp: React.FC<AvatarCompProps> = (props) => {
  const { ...avatarProps } = { ...avatarCompDefaultProps, ...props };

  return <Avatar {...avatarProps} />;
};

export default AvatarComp;
