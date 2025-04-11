import { RouterItem, RouterWrapper } from '../../routerConstant';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BorderColorIcon from '@mui/icons-material/BorderColor';

type SimpleProjectRouterItems = {
  INTRODUCTION_ORDER_PROJECT_PAGE: RouterItem;
  [key: string]: RouterItem;
};

const SIMPLE_PROJECT_ROUTER_WRAPPER: Omit<RouterWrapper, 'children'> = {
  whoCanSeeForSidebar: ['admin'],
  key: 'SIMPLE_PROJECT_ROUTER_WRAPPER',
  label: 'introductionRoutes.simpleProjects',
  icon: AccountTreeIcon,
};

export const SIMPLE_PROJECT_ROUTER_ITEMS: SimpleProjectRouterItems = {
  INTRODUCTION_ORDER_PROJECT_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'SIMPLE_PROJECT_ROUTER_ITEMS',
    key: 'INTRODUCTION_ORDER_PROJECT_PAGE',
    label: 'introductionRoutes.orderProject',
    path: '/introduction-order-project',
    icon: BorderColorIcon,
  },
};

export const SIMPLE_PROJECT_ROUTER: RouterWrapper = {
  ...SIMPLE_PROJECT_ROUTER_WRAPPER,
  children: Object.values(SIMPLE_PROJECT_ROUTER_ITEMS),
};
