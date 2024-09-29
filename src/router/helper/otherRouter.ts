import { RouterItem } from '../routerConstant';
import DashboardIcon from '@mui/icons-material/Dashboard';

type OtherRouterItems = {
  DASHBOARD_PAGE: RouterItem;
  [key: string]: RouterItem;
};

export const OTHER_ROUTER_ITEMS: OtherRouterItems = {
  DASHBOARD_PAGE: {
    whoCanSeeForSidebar: ['admin', 'teacher', 'student'],
    whoCanSeeForPage: ['admin', 'teacher', 'student'],
    parentKey: '',
    key: 'DASHBOARD_PAGE',
    label: 'routes.dashboard',
    path: '/',
    icon: DashboardIcon,
    order: 0,
  },
};
