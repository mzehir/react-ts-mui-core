import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import LogoSection from './sections/Logo';
import HeaderSection from './sections/Header';
import BodySection from './sections/Body';
import FooterSection from './sections/Footer';
import PaperComp from '../../../components/base/paper/Paper';
import AlertComp from '../../../components/base/alert/Alert';
import fakeUsersData from '../../../db/users.json';
import { AuthState } from '../../../redux/slices/authSlice';
import GridComp from '../../../components/base/grid/Grid';
import TypographyComp from '../../../components/base/typography/Typography';
import BoxComp from '../../../components/base/box/Box';
import { isTheAppInPromotion } from '../../../appSettings';
import { useNavigate } from 'react-router-dom';
import { prepareAllRoutes } from '../../../router/routerConstant';
import LinkComp from '../../../components/base/link/Link';

const Wrapper = styled(PaperComp)`
  width: 100%;
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const SignUpPage: React.FC = () => {
  return (
    <React.Fragment>
      <LogoSection />

      <Wrapper>
        <HeaderSection />

        <br />

        <BodySection />

        <br />

        <FooterSection />
      </Wrapper>

      <br />

      {isTheAppInPromotion && <FakeUsersSection />}
    </React.Fragment>
  );
};

export default SignUpPage;

const FakeUsersSection: React.FC = () => {
  const navigate = useNavigate();
  const allRoutes = prepareAllRoutes();

  const [fakeUsers, setFakeUsers] = React.useState<AuthState[]>([]);

  useEffect(() => {
    setFakeUsers(fakeUsersData as AuthState[]);
  }, []);

  return (
    <BoxComp width={'100%'}>
      <AlertComp
        severity="info"
        sx={{
          marginTop: '5px',
          marginBottom: '5px',
        }}
      >
        <LinkComp
          sx={{ cursor: 'pointer' }}
          underline="hover"
          onClick={() => navigate(allRoutes.INTRODUCTION_GUEST_PAGE.path)}
        >
          introduction.continueGuest
        </LinkComp>

        <TypographyComp>introduction.guestTypeDesc</TypographyComp>
      </AlertComp>

      {fakeUsers.map((user, index) => (
        <AlertComp
          key={index.toString()}
          icon={false}
          severity="info"
          sx={{
            '& .MuiAlert-message': {
              width: '100%',
            },
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          <GridComp container>
            <>
              <GridComp item xs={3}>
                <TypographyComp>introduction.type</TypographyComp>
              </GridComp>
              <GridComp item xs={9}>
                <TypographyComp>{user.userType}</TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={3}>
                <TypographyComp>introduction.token</TypographyComp>
              </GridComp>
              <GridComp item xs={9}>
                <TypographyComp>{user.token}</TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={3}>
                <TypographyComp>introduction.name</TypographyComp>
              </GridComp>
              <GridComp item xs={9}>
                <TypographyComp>{user.name}</TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={3}>
                <TypographyComp>introduction.surname</TypographyComp>
              </GridComp>
              <GridComp item xs={9}>
                <TypographyComp>{user.surname}</TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={3}>
                <TypographyComp>introduction.phone</TypographyComp>
              </GridComp>
              <GridComp item xs={9}>
                <TypographyComp>{user.phone}</TypographyComp>
              </GridComp>
            </>

            <>
              <GridComp item xs={3}>
                <TypographyComp>introduction.email</TypographyComp>
              </GridComp>
              <GridComp item xs={9}>
                <TypographyComp>{user.email}</TypographyComp>
              </GridComp>
            </>

            <GridComp item xs={12}>
              <br />
            </GridComp>

            <>
              <GridComp item xs={12}>
                {/* @ts-expect-error: props hataları görmezden gelinebilir. */}
                <TypographyComp>{user?.desc}</TypographyComp>
              </GridComp>
            </>
          </GridComp>
        </AlertComp>
      ))}
    </BoxComp>
  );
};
