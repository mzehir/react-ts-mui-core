import React from 'react';
import FullFeatureAgGrid from '../../../../../components/introduction/agGrid/FullFeatureAgGrid';
import DividerComp from '../../../../../components/base/divider/Divider';
import TypographyComp from '../../../../../components/base/typography/Typography';

const FullFeatureAgGridPage: React.FC = () => {
  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.fullFeatureAgGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <FullFeatureAgGrid />
    </>
  );
};

export default FullFeatureAgGridPage;
