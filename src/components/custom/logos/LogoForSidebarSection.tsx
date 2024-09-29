import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as defaultLogo } from '../../../assets/app/defaultLogo.svg';

const BrandIcon = styled(defaultLogo)`
  margin-right: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 32px;
  height: 32px;
`;

const LogoForSidebarSection: React.FC = () => {
  return <BrandIcon />;
};

export default LogoForSidebarSection;
