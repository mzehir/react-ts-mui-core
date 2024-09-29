import React from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { RouterItem, RouterWrapper, prepareRoutesForSidebar } from '../../../../router/routerConstant';
import SidebarScrollbar from './sidebarSections/SidebarScrollbar';
import ListComp from '../../../base/list/List';
import SidebarRoutes from './sidebarSections/SidebarRoutes';

const _closeOtherCollapsesWhenItemIsClicked = false; // Öğeye tıklandığında diğer daraltmaları kapat
const _closeOtherCollapsesWhenCollapseIsClicked = false; // Daralta tıklandığında diğer daraltmaları kapat

const StyledListComp = styled(ListComp)`
  background-color: ${(props) => props.theme.sidebar.background};
`;

function SidebarBody() {
  const navigate = useNavigate();
  const location = useLocation();
  const userType = useSelector((state: RootState) => state.auth.userType);
  const [openTitles, setOpenTitles] = React.useState<{ [key: string]: boolean }>({});
  const [routes] = React.useState<(RouterWrapper | RouterItem)[]>(prepareRoutesForSidebar(userType));

  const handleTitleClick = (key: string) => {
    setOpenTitles((prevOpenTitles) => {
      if (_closeOtherCollapsesWhenCollapseIsClicked) {
        const newOpenTitles = { [key]: !prevOpenTitles[key] };
        return newOpenTitles;
      } else {
        return {
          ...prevOpenTitles,
          [key]: !prevOpenTitles[key],
        };
      }
    });
  };

  const handleRouteClick = (route: RouterItem) => {
    if (_closeOtherCollapsesWhenItemIsClicked) {
      setOpenTitles((prevOpenTitles) => {
        const newOpenTitles = { ...prevOpenTitles };
        Object.keys(newOpenTitles).forEach((key) => {
          if (key !== route.parentKey) {
            newOpenTitles[key] = false;
          }
        });

        return newOpenTitles;
      });
    }

    navigate(route.path);
  };

  return (
    <SidebarScrollbar>
      <StyledListComp sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav">
        <SidebarRoutes
          pathname={location.pathname}
          routes={routes}
          openTitles={openTitles}
          handleTitleClick={handleTitleClick}
          handleRouteClick={handleRouteClick}
        />
      </StyledListComp>
    </SidebarScrollbar>
  );
}

export default SidebarBody;
