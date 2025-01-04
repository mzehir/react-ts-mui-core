import React from 'react';
import LogoForSidebarSection from '../../logos/LogoForSidebarSection';
import TypographyComp from '../../../base/typography/Typography';
import IconButtonComp from '../../../base/iconButton/IconButton';
import { appName } from '../../../../appSettings';
import { SidebarHeaderProps } from '../sidebarHelper';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StyledSidebarHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
  backgroundColor: theme.sidebar.footer.background,
}));

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <StyledSidebarHeader>
      <LogoForSidebarSection />

      <TypographyComp variant="button">{appName}</TypographyComp>

      <IconButtonComp onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButtonComp>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;
