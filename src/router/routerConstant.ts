import { UserType } from '../utils/enums/userTypes';
import { COMPONENT_ROUTER, COMPONENT_ROUTER_ITEMS } from './helper/introductionRouter/componentRouter';
import {
  CUSTOM_COMPONENT_ROUTER,
  CUSTOM_COMPONENT_ROUTER_ITEMS,
} from './helper/introductionRouter/customComponentRouter';
import { REDUX_ROUTER, REDUX_ROUTER_ITEMS } from './helper/introductionRouter/reduxRouter';
import { RHF_ROUTER, RHF_ROUTER_ITEMS } from './helper/introductionRouter/reactHookFormRouter';
import { AUTH_ROUTER, AUTH_ROUTER_ITEMS } from './helper/authRouter';
import { ACCESS_ERRORS_ROUTER, ACCESS_ERRORS_ROUTER_ITEMS } from './helper/accessErrorsRouter';
import { ROUTER_BY_USER_TYPE, ROUTER_BY_USER_TYPE_ITEMS } from './helper/introductionRouter/routerByUserType';
import { OTHER_ROUTER_ITEMS } from './helper/otherRouter';

export interface RouterItem {
  whoCanSeeForSidebar?: UserType[];
  whoCanSeeForPage: UserType[];
  parentKey: string;
  key: string;
  label: string;
  path: string;
  icon: React.ComponentType | null;
  order?: number;
}

export interface RouterWrapper {
  whoCanSeeForSidebar: UserType[];
  key: string;
  label: string;
  icon: React.ComponentType | null;
  children: RouterItem[];
}

export const prepareAllRoutes = () => {
  const obj = {
    ...COMPONENT_ROUTER_ITEMS,
    ...CUSTOM_COMPONENT_ROUTER_ITEMS,
    ...REDUX_ROUTER_ITEMS,
    ...RHF_ROUTER_ITEMS,
    ...AUTH_ROUTER_ITEMS,
    ...ACCESS_ERRORS_ROUTER_ITEMS,
    ...ROUTER_BY_USER_TYPE_ITEMS,
    ...OTHER_ROUTER_ITEMS,
  };

  return obj;
};

export const prepareRoutesForSidebar = (userType: UserType): (RouterWrapper | RouterItem)[] => {
  const arr: (RouterWrapper | RouterItem)[] = [];
  const OTHER_ROUTER_ITEMS_KEYS = Object.keys(OTHER_ROUTER_ITEMS);

  if (COMPONENT_ROUTER.whoCanSeeForSidebar.includes(userType)) {
    arr.push(COMPONENT_ROUTER);
  }

  if (CUSTOM_COMPONENT_ROUTER.whoCanSeeForSidebar.includes(userType)) {
    arr.push(CUSTOM_COMPONENT_ROUTER);
  }

  if (REDUX_ROUTER.whoCanSeeForSidebar.includes(userType)) {
    arr.push(REDUX_ROUTER);
  }

  if (RHF_ROUTER.whoCanSeeForSidebar.includes(userType)) {
    arr.push(RHF_ROUTER);
  }

  if (AUTH_ROUTER.whoCanSeeForSidebar.includes(userType)) {
    arr.push(AUTH_ROUTER);
  }

  if (ACCESS_ERRORS_ROUTER.whoCanSeeForSidebar.includes(userType)) {
    arr.push(ACCESS_ERRORS_ROUTER);
  }

  if (ROUTER_BY_USER_TYPE.whoCanSeeForSidebar.includes(userType)) {
    const _routerByUserTypeChildren = [];

    for (let i = 0; i < ROUTER_BY_USER_TYPE.children.length; i++) {
      const childRoute = ROUTER_BY_USER_TYPE.children[i];
      if (childRoute.whoCanSeeForSidebar?.includes(userType)) {
        _routerByUserTypeChildren.push(childRoute);
      }
    }

    const _routerByUserType = { ...ROUTER_BY_USER_TYPE, children: _routerByUserTypeChildren };
    if (_routerByUserType.children && _routerByUserType.children.length > 0) {
      arr.push(_routerByUserType);
    }
  }

  for (let i = 0; i < OTHER_ROUTER_ITEMS_KEYS.length; i++) {
    if (OTHER_ROUTER_ITEMS[OTHER_ROUTER_ITEMS_KEYS[i]].whoCanSeeForSidebar?.includes(userType)) {
      const order = OTHER_ROUTER_ITEMS[OTHER_ROUTER_ITEMS_KEYS[i]].order;
      if (typeof order === 'number') {
        arr.splice(order, 0, OTHER_ROUTER_ITEMS[OTHER_ROUTER_ITEMS_KEYS[i]]);
      } else {
        arr.push(OTHER_ROUTER_ITEMS[OTHER_ROUTER_ITEMS_KEYS[i]]);
      }
    }
  }

  return arr;
};
