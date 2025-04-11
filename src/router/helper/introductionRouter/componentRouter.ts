import { RouterItem, RouterWrapper } from '../../routerConstant';
import GridViewIcon from '@mui/icons-material/GridView';
import MouseIcon from '@mui/icons-material/Mouse';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ListIcon from '@mui/icons-material/List';
import GetAppIcon from '@mui/icons-material/GetApp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TitleIcon from '@mui/icons-material/Title';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

type ComponentRouterItems = {
  INTRODUCTION_BUTTON_PAGE: RouterItem;
  INTRODUCTION_TYPOGRAPHY_PAGE: RouterItem;
  INTRODUCTION_CHECKBOX_PAGE: RouterItem;
  INTRODUCTION_RADIO_PAGE: RouterItem;
  INTRODUCTION_ICON_BUTTON_PAGE: RouterItem;
  INTRODUCTION_TEXTFIELD_PAGE: RouterItem;
  INTRODUCTION_DATEPICKER_PAGE: RouterItem;
  INTRODUCTION_SELECT_PAGE: RouterItem;
  INTRODUCTION_ASYNC_SELECT_PAGE: RouterItem;
  INTRODUCTION_ALERT_PAGE: RouterItem;
  INTRODUCTION_TOASTIFY_PAGE: RouterItem;
  INTRODUCTION_DIALOG_PAGE: RouterItem;
  [key: string]: RouterItem;
};

const COMPONENT_ROUTER_WRAPPER: Omit<RouterWrapper, 'children'> = {
  whoCanSeeForSidebar: ['admin'],
  key: 'COMPONENT_ROUTER_WRAPPER',
  label: 'introductionRoutes.components',
  icon: GridViewIcon,
};

export const COMPONENT_ROUTER_ITEMS: ComponentRouterItems = {
  INTRODUCTION_TYPOGRAPHY_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_TYPOGRAPHY_PAGE',
    label: 'Typography',
    path: '/introduction-typography-component',
    icon: TextFieldsIcon,
  },

  INTRODUCTION_CHECKBOX_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_CHECKBOX_PAGE',
    label: 'Checkbox',
    path: '/introduction-checkbox-component',
    icon: CheckBoxIcon,
  },

  INTRODUCTION_RADIO_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_RADIO_PAGE',
    label: 'Radio',
    path: '/introduction-radio-component',
    icon: RadioButtonCheckedIcon,
  },

  INTRODUCTION_BUTTON_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_BUTTON_PAGE',
    label: 'Button',
    path: '/introduction-button-component',
    icon: MouseIcon,
  },

  INTRODUCTION_ICON_BUTTON_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_ICON_BUTTON_PAGE',
    label: 'Icon Button',
    path: '/introduction-icon-button-component',
    icon: EmojiEmotionsIcon,
  },

  INTRODUCTION_TEXTFIELD_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_TEXTFIELD_PAGE',
    label: 'Textfield',
    path: '/introduction-textfield-component',
    icon: TitleIcon,
  },

  INTRODUCTION_DATEPICKER_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_DATEPICKER_PAGE',
    label: 'Datepicker',
    path: '/introduction-datepicker-component',
    icon: EditCalendarIcon,
  },

  INTRODUCTION_SELECT_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_SELECT_PAGE',
    label: 'Select',
    path: '/introduction-select-component',
    icon: ListIcon,
  },

  INTRODUCTION_ASYNC_SELECT_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_ASYNC_SELECT_PAGE',
    label: 'Async Select',
    path: '/introduction-async-select-component',
    icon: GetAppIcon,
  },

  INTRODUCTION_ALERT_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_ALERT_PAGE',
    label: 'Alert',
    path: '/introduction-alert-component',
    icon: AnnouncementIcon,
  },

  INTRODUCTION_TOASTIFY_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_TOASTIFY_PAGE',
    label: 'Toastify',
    path: '/introduction-toastify-component',
    icon: CrisisAlertIcon,
  },

  INTRODUCTION_DIALOG_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_DIALOG_PAGE',
    label: 'Dialog',
    path: '/introduction-dialog-component',
    icon: AspectRatioIcon,
  },
};

export const COMPONENT_ROUTER: RouterWrapper = {
  ...COMPONENT_ROUTER_WRAPPER,
  children: Object.values(COMPONENT_ROUTER_ITEMS),
};
