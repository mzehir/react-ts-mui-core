import React from 'react';
import { Theme } from '@mui/material/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ReactPerfectScrollbar from 'react-perfect-scrollbar';
import '../../../../../utils/vendor/perfect-scrollbar.css';

interface SidebarScrollbarProps {
  children: React.ReactNode;
}

const baseScrollbar = (props: { theme?: Theme }) => css`
  background-color: ${props.theme?.sidebar?.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  flex-grow: 1;
`;

const PerfectScrollbar = styled(ReactPerfectScrollbar)`
  ${baseScrollbar}
`;

const SidebarScrollbar: React.FC<SidebarScrollbarProps> = ({ children }) => {
  return <PerfectScrollbar>{children}</PerfectScrollbar>;
};

export default SidebarScrollbar;
