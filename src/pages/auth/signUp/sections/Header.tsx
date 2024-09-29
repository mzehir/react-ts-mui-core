import React from 'react';
import TypographyComp from '../../../../components/base/typography/Typography';

const HeaderSection: React.FC = () => {
  return (
    <React.Fragment>
      <TypographyComp component="h1" variant="h4" align="center" gutterBottom>
        common.welcomeTo
      </TypographyComp>

      <TypographyComp component="h2" variant="body1" align="center">
        common.registerToContinue
      </TypographyComp>
    </React.Fragment>
  );
};

export default HeaderSection;
