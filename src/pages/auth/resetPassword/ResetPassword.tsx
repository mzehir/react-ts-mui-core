import React from 'react';
import styled from '@emotion/styled';
import LogoSection from './sections/Logo';
import HeaderSection from './sections/Header';
import BodySection from './sections/Body';
import PaperComp from '../../../components/base/paper/Paper';

const Wrapper = styled(PaperComp)`
  width: 100%;
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const ResetPasswordPage: React.FC = () => {
  return (
    <React.Fragment>
      <LogoSection />

      <Wrapper>
        <HeaderSection />

        <br />

        <BodySection />
      </Wrapper>
    </React.Fragment>
  );
};

export default ResetPasswordPage;
