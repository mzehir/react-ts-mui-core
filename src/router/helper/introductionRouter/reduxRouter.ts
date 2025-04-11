import { RouterItem, RouterWrapper } from '../../routerConstant';
import DataArrayIcon from '@mui/icons-material/DataArray';
import ApiIcon from '@mui/icons-material/Api';
import PinIcon from '@mui/icons-material/Pin';

type ReduxRouterItems = {
  INTRODUCTION_REDUX_STANDARD_PAGE: RouterItem;
  INTRODUCTION_REDUX_QUERY_PAGE: RouterItem;
  [key: string]: RouterItem;
};

const REDUX_ROUTER_WRAPPER: Omit<RouterWrapper, 'children'> = {
  whoCanSeeForSidebar: ['admin'],
  key: 'REDUX_ROUTER_WRAPPER',
  label: 'introductionRoutes.redux',
  icon: DataArrayIcon,
};

export const REDUX_ROUTER_ITEMS: ReduxRouterItems = {
  INTRODUCTION_REDUX_STANDARD_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'REDUX_ROUTER_ITEMS',
    key: 'INTRODUCTION_REDUX_STANDARD_PAGE',
    label: 'introductionRoutes.simpleExample',
    path: '/introduction-redux-standard-example',
    icon: PinIcon,
  },
  INTRODUCTION_REDUX_QUERY_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'REDUX_ROUTER_ITEMS',
    key: 'INTRODUCTION_REDUX_QUERY_PAGE',
    label: 'introductionRoutes.queryExamples',
    path: '/introduction-redux-query-example',
    icon: ApiIcon,
  },
};

export const REDUX_ROUTER: RouterWrapper = {
  ...REDUX_ROUTER_WRAPPER,
  children: Object.values(REDUX_ROUTER_ITEMS),
};
