import React from 'react';
import SkeletonComp from '../../../base/skeleton/Skeleton';

const AgGridCellSkeletonComp: React.FC = () => {
  return (
    <>
      <SkeletonComp variant="text" width="100%" height="100%" />
    </>
  );
};

export default AgGridCellSkeletonComp;
