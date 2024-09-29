import React from 'react';
import styled from '@emotion/styled';
import TypographyComp from '../../../components/base/typography/Typography';

const Wrapper = styled('div')`
  padding: ${(props) => props.theme.spacing(6)};
  text-align: center;
  background: transparent;

  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const StudentPage: React.FC = () => {
  return (
    <Wrapper>
      <TypographyComp variant="h2" align="center" gutterBottom>
        introduction.pageVisibleToAdminAndStudent
      </TypographyComp>
    </Wrapper>
  );
};

export default StudentPage;
