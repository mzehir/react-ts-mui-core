import React from 'react';
import TypographyComp from '../../../../components/base/typography/Typography';

const HeaderSection: React.FC = () => {
  return (
    <React.Fragment>
      <TypographyComp component="h1" variant="h4" align="center" gutterBottom>
        common.lastStepToSignIn
      </TypographyComp>

      <TypographyComp component="h2" variant="body1" align="center">
        common.enterTheVerificationCodeSentToYourEmailOrPhone
      </TypographyComp>
    </React.Fragment>
  );
};

export default HeaderSection;
