import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { prepareAllRoutes } from '../router/routerConstant';

interface GuardProps {
  children: ReactNode;
  routeKey: string;
}

const allRoutes = prepareAllRoutes();

const Guard: React.FC<GuardProps> = ({ children, routeKey }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const userType = useSelector((state: RootState) => state.auth.userType);

  const routingByUserTypeAndToken = () => {
    if (!token) {
      if (allRoutes[routeKey].whoCanSeeForPage.includes(userType)) {
        return children;
      } else {
        return <Navigate to={allRoutes.SIGN_IN.path} />;
      }
    } else {
      if (allRoutes[routeKey].whoCanSeeForPage.includes(userType)) {
        return children;
      } else {
        return <Navigate to={allRoutes.FORBIDDEN.path} />;
      }
    }
  };

  return <>{routingByUserTypeAndToken()}</>;
};

export default Guard;
