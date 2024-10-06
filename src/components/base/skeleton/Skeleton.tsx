import React from 'react';
import { SkeletonCompProps, skeletonCompDefaultProps } from './skeletonHelper';
import Skeleton from '@mui/material/Skeleton';

const SkeletonComp: React.FC<SkeletonCompProps> = (props) => {
  const { ...skeletonProps } = { ...skeletonCompDefaultProps, ...props };

  return <Skeleton {...skeletonProps} />;
};

export default SkeletonComp;
