import { RouterItem, RouterWrapper } from '../routerConstant';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MouseIcon from '@mui/icons-material/Mouse';

type ProjectRouterItems = {
  FARMERS_PAGE: RouterItem;
  WORKERS_PAGE: RouterItem;
  MERCHANTS_PAGE: RouterItem;
  PRODUCTS_PAGE: RouterItem;
  [key: string]: RouterItem;
};

const PROJECT_ROUTER_WRAPPER: Omit<RouterWrapper, 'children'> = {
  whoCanSeeForSidebar: ['admin'],
  key: 'PROJECT_ROUTER_WRAPPER',
  label: 'Proje Sayfaları',
  icon: AdminPanelSettingsIcon,
};

export const PROJECT_ROUTER_ITEMS: ProjectRouterItems = {
  FARMERS_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'PROJECT_ROUTER_ITEMS',
    key: 'FARMERS_PAGE',
    label: 'Farmers',
    path: '/farmers',
    icon: MouseIcon,
  },
  WORKERS_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'PROJECT_ROUTER_ITEMS',
    key: 'WORKERS_PAGE',
    label: 'Workers',
    path: '/workers',
    icon: MouseIcon,
  },
  MERCHANTS_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'PROJECT_ROUTER_ITEMS',
    key: 'MERCHANTS_PAGE',
    label: 'Merchants',
    path: '/merchants',
    icon: MouseIcon,
  },

  PRODUCTS_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'PROJECT_ROUTER_ITEMS',
    key: 'PRODUCTS_PAGE',
    label: 'Products',
    path: '/products',
    icon: MouseIcon,
  },
};

export const PROJECT_ROUTER: RouterWrapper = {
  ...PROJECT_ROUTER_WRAPPER,
  children: Object.values(PROJECT_ROUTER_ITEMS),
};
