import React from 'react';
import styled from '@emotion/styled';
import { RouterItem, RouterWrapper } from '../../../../../router/routerConstant';
import CollapseComp from '../../../../base/collapse/Collapse';
import ListComp from '../../../../base/list/List';
import ListItemButtonComp from '../../../../base/listItemButton/ListItemButton';
import ListItemIconComp from '../../../../base/listItemIcon/ListItemIcon';
import ListItemTextComp from '../../../../base/listItemText/ListItemText';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelIcon from '@mui/icons-material/Label';
import TocIcon from '@mui/icons-material/Toc';

interface SidebarRoutesProps {
  pathname: string;
  routes: (RouterWrapper | RouterItem)[];
  openTitles: { [key: string]: boolean };
  handleTitleClick: (key: string) => void;
  handleRouteClick: (route: RouterItem) => void;
  level?: number;
}

const StyledCollapseComp = styled(CollapseComp)`
  position: relative;
  padding-left: 5px;

  &::before {
    content: '';
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${(props) => props.theme.palette.divider};
  }
`;

const StyledListItemButtonComp = styled(ListItemButtonComp, {
  shouldForwardProp: (prop) => prop !== 'activeRoute',
})<{ activeRoute: boolean }>`
  background-color: ${(props) => props.activeRoute && props.theme.palette.action.selected};

  &:hover {
    background-color: ${(props) => props.activeRoute && props.theme.palette.action.selected};
    cursor: ${(props) => props.activeRoute && 'default'};
  }
`;

const SidebarRoutes: React.FC<SidebarRoutesProps> = ({
  pathname,
  routes,
  openTitles,
  handleTitleClick,
  handleRouteClick,
  level = 1,
}) => {
  return (
    <>
      {routes.map((route) => {
        if ('children' in route) {
          return (
            <React.Fragment key={route.key}>
              <ListItemButtonComp onClick={() => handleTitleClick(route.key)} sx={{ pl: 4 * level }}>
                <ListItemIconComp>{route.icon ? <route.icon /> : <TocIcon />}</ListItemIconComp>
                <ListItemTextComp primary={route.label} isPrimaryTranslation={true} />
                {openTitles[route.key] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButtonComp>
              <StyledCollapseComp in={openTitles[route.key]} timeout="auto" unmountOnExit>
                <ListComp component="div" disablePadding>
                  <SidebarRoutes
                    pathname={pathname}
                    routes={route.children}
                    openTitles={openTitles}
                    handleTitleClick={handleTitleClick}
                    handleRouteClick={handleRouteClick}
                    level={level + 1}
                  />
                </ListComp>
              </StyledCollapseComp>
            </React.Fragment>
          );
        } else {
          return (
            <StyledListItemButtonComp
              key={route.key}
              onClick={() => route.path !== pathname && handleRouteClick(route)}
              sx={{ pl: 4 * level }}
              activeRoute={route.path === pathname}
            >
              <ListItemIconComp>{route.icon ? <route.icon /> : <LabelIcon />}</ListItemIconComp>
              <ListItemTextComp primary={route.label} isPrimaryTranslation={true} />
            </StyledListItemButtonComp>
          );
        }
      })}
    </>
  );
};

export default SidebarRoutes;
