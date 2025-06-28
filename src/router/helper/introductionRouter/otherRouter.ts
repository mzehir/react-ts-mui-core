import { RouterItem } from '../../routerConstant';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MoneyIcon from '@mui/icons-material/Money';
import CallIcon from '@mui/icons-material/Call';

type OtherRouterItems = {
  DASHBOARD_PAGE: RouterItem;
  CONTACT_PAGE: RouterItem;
  PRICING_PAGE: RouterItem;
  [key: string]: RouterItem;
};

export const OTHER_ROUTER_ITEMS: OtherRouterItems = {
  DASHBOARD_PAGE: {
    whoCanSeeForSidebar: ['admin', 'teacher', 'student'],
    whoCanSeeForPage: ['admin', 'teacher', 'student'],
    parentKey: '',
    key: 'DASHBOARD_PAGE',
    label: 'introductionRoutes.dashboard',
    path: '/',
    icon: DashboardIcon,
    order: 0,
  },
  PRICING_PAGE: {
    whoCanSeeForSidebar: ['admin', 'teacher', 'student'],
    whoCanSeeForPage: ['admin', 'teacher', 'student'],
    parentKey: '',
    key: 'PRICING_PAGE',
    label: 'introductionRoutes.pricing',
    path: '/pricing',
    icon: MoneyIcon,
  },
  CONTACT_PAGE: {
    whoCanSeeForSidebar: ['admin', 'teacher', 'student'],
    whoCanSeeForPage: ['admin', 'teacher', 'student'],
    parentKey: '',
    key: 'CONTACT_PAGE',
    label: 'introductionRoutes.contact',
    path: '/contact',
    icon: CallIcon,
  },
};
