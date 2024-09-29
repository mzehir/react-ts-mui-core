import React from 'react';
import { useNavigate } from 'react-router-dom';
import { prepareAllRoutes } from '../../../../router/routerConstant';
import GridComp from '../../../../components/base/grid/Grid';
import LinkComp from '../../../../components/base/link/Link';

const FooterSection: React.FC = () => {
  const navigate = useNavigate();
  const allRoutes = prepareAllRoutes();

  return (
    <React.Fragment>
      <GridComp container>
        <GridComp item xs={6}>
          <LinkComp
            sx={{ cursor: 'pointer' }}
            underline="hover"
            onClick={() => navigate(allRoutes.FORGOT_PASSWORD.path)}
          >
            common.iforgotMyPassword
          </LinkComp>
        </GridComp>

        <GridComp item xs={6} display={'flex'} justifyContent={'end'}>
          <LinkComp sx={{ cursor: 'pointer' }} underline="hover" onClick={() => navigate(allRoutes.SIGN_UP.path)}>
            common.iWantToBeAMember
          </LinkComp>
        </GridComp>
      </GridComp>
    </React.Fragment>
  );
};

export default FooterSection;
