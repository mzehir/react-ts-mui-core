import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as DefaultLogo } from '../../../assets/app/defaultLogo.svg';

const BrandIcon = styled(DefaultLogo)`
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
`;

const LogoForAuthPages: React.FC = () => {
  return <BrandIcon />;
};

export default LogoForAuthPages;
