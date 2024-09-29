import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { prepareAllRoutes } from '../../router/routerConstant';
import ButtonComp from '../../components/base/button/Button';
import TypographyComp from '../../components/base/typography/Typography';

const Wrapper = styled('div')`
  padding: ${(props) => props.theme.spacing(6)};
  text-align: center;
  background: transparent;

  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const ServerErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const allRoutes = prepareAllRoutes();
  return (
    <Wrapper>
      <TypographyComp component="h1" variant="h1" align="center" gutterBottom>
        500
      </TypographyComp>
      <TypographyComp component="h2" variant="h5" align="center" gutterBottom>
        common.internalServerError
      </TypographyComp>
      <TypographyComp component="h2" variant="body1" align="center" gutterBottom>
        common.unexpectedServerError
      </TypographyComp>

      <br />

      <ButtonComp variant="contained" color="secondary" onClick={() => navigate(allRoutes.DASHBOARD_PAGE.path)}>
        common.returnToWebsite
      </ButtonComp>
    </Wrapper>
  );
};

export default ServerErrorPage;
