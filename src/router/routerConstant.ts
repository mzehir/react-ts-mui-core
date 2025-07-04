import { UserType } from '../utils/enums/userTypes';

//! 001DeletedStart
import { COMPONENT_ROUTER, COMPONENT_ROUTER_ITEMS } from './helper/introductionRouter/componentRouter';
import {
  CUSTOM_COMPONENT_ROUTER,
  CUSTOM_COMPONENT_ROUTER_ITEMS,
} from './helper/introductionRouter/customComponentRouter';
import { SIMPLE_PROJECT_ROUTER, SIMPLE_PROJECT_ROUTER_ITEMS } from './helper/introductionRouter/simpleProjectsRouter';
import { REDUX_ROUTER, REDUX_ROUTER_ITEMS } from './helper/introductionRouter/reduxRouter';
import { RHF_ROUTER, RHF_ROUTER_ITEMS } from './helper/introductionRouter/reactHookFormRouter';
import { ROUTER_BY_USER_TYPE, ROUTER_BY_USER_TYPE_ITEMS } from './helper/introductionRouter/routerByUserType';
import { OTHER_ROUTER_ITEMS as INTRO_OTHER_ROUTER_ITEMS } from './helper/introductionRouter/otherRouter';
//! 001DeletedFinish

import { AUTH_ROUTER, AUTH_ROUTER_ITEMS } from './helper/authRouter';
import { ACCESS_ERRORS_ROUTER, ACCESS_ERRORS_ROUTER_ITEMS } from './helper/accessErrorsRouter';

//! 002ActivatedStart
// import { OTHER_ROUTER_ITEMS } from './helper/otherRouter';
//! 002ActivatedFinish

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
    //! 003DeletedStart
    ...COMPONENT_ROUTER_ITEMS,
    ...CUSTOM_COMPONENT_ROUTER_ITEMS,
    ...SIMPLE_PROJECT_ROUTER_ITEMS,
    ...REDUX_ROUTER_ITEMS,
    ...RHF_ROUTER_ITEMS,
    ...ROUTER_BY_USER_TYPE_ITEMS,
    ...INTRO_OTHER_ROUTER_ITEMS,
    //! 003DeletedFinish

    ...AUTH_ROUTER_ITEMS,
    ...ACCESS_ERRORS_ROUTER_ITEMS,

    //! 004ActivatedStart
    // ...OTHER_ROUTER_ITEMS,
    //! 004ActivatedFinish
  };

  return obj;
};

export const prepareRoutesForSidebar = (userType: UserType): (RouterWrapper | RouterItem)[] => {
  const arr: (RouterWrapper | RouterItem)[] = [];

  //! 005DeletedStart
  const INTRO_OTHER_ROUTER_ITEMS_KEYS = Object.keys(INTRO_OTHER_ROUTER_ITEMS);

  if (COMPONENT_ROUTER.whoCanSeeForSidebar.includes(userType)) {
    arr.push(COMPONENT_ROUTER);
  }

  if (CUSTOM_COMPONENT_ROUTER.whoCanSeeForSidebar.includes(userType)) {
    arr.push(CUSTOM_COMPONENT_ROUTER);
  }

  if (SIMPLE_PROJECT_ROUTER.whoCanSeeForSidebar.includes(userType)) {
    arr.push(SIMPLE_PROJECT_ROUTER);
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

  for (let i = 0; i < INTRO_OTHER_ROUTER_ITEMS_KEYS.length; i++) {
    if (INTRO_OTHER_ROUTER_ITEMS[INTRO_OTHER_ROUTER_ITEMS_KEYS[i]].whoCanSeeForSidebar?.includes(userType)) {
      const order = INTRO_OTHER_ROUTER_ITEMS[INTRO_OTHER_ROUTER_ITEMS_KEYS[i]].order;
      if (typeof order === 'number') {
        arr.splice(order, 0, INTRO_OTHER_ROUTER_ITEMS[INTRO_OTHER_ROUTER_ITEMS_KEYS[i]]);
      } else {
        arr.push(INTRO_OTHER_ROUTER_ITEMS[INTRO_OTHER_ROUTER_ITEMS_KEYS[i]]);
      }
    }
  }
  //! 005DeletedFinish

  //! 006ActivatedStart
  // const OTHER_ROUTER_ITEMS_KEYS = Object.keys(OTHER_ROUTER_ITEMS);
  // for (let i = 0; i < OTHER_ROUTER_ITEMS_KEYS.length; i++) {
  //   if (OTHER_ROUTER_ITEMS[OTHER_ROUTER_ITEMS_KEYS[i]].whoCanSeeForSidebar?.includes(userType)) {
  //     const order = OTHER_ROUTER_ITEMS[OTHER_ROUTER_ITEMS_KEYS[i]].order;
  //     if (typeof order === 'number') {
  //       arr.splice(order, 0, OTHER_ROUTER_ITEMS[OTHER_ROUTER_ITEMS_KEYS[i]]);
  //     } else {
  //       arr.push(OTHER_ROUTER_ITEMS[OTHER_ROUTER_ITEMS_KEYS[i]]);
  //     }
  //   }
  // }
  //! 006ActivatedFinish

  return arr;
};
