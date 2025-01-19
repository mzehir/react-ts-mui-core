import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import BoxComp from '../components/base/box/Box';

interface PageLayoutProps {
  children: React.ReactNode;
}

interface ToolbarMixin {
  minHeight: number;
  [key: string]: { minHeight?: number } | number;
}

const DefaultPageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const toolbar = theme.mixins.toolbar as ToolbarMixin;
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const toolbarHeight = isLargeScreen
    ? (toolbar['@media (min-width:600px)'] as { minHeight: number })?.minHeight || toolbar.minHeight
    : toolbar.minHeight;

  return (
    <BoxComp
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: `calc(100% - ${toolbarHeight * 2}px)`,
      }}
    >
      {children}
    </BoxComp>
  );
};

export default DefaultPageLayout;
