import { ThemeOptions } from '@mui/material/styles';
import { ThemeType } from '../utils/enums/theme';
import merge from 'deepmerge';
import { green, grey } from '@mui/material/colors';
import { themeQuartz, colorSchemeLightWarm, colorSchemeDarkBlue } from 'ag-grid-community';

const customBlue = {
  50: '#e9f0fb',
  100: '#c8daf4',
  200: '#a3c1ed',
  300: '#7ea8e5',
  400: '#6395e0',
  500: '#4782da',
  600: '#407ad6',
  700: '#376fd0',
  800: '#2f65cb',
  900: '#2052c2 ',
};

const lightVariant = {
  name: ThemeType.light,
  palette: {
    mode: 'light',
    primary: {
      main: customBlue[700],
      contrastText: '#FFF',
    },
    secondary: {
      main: customBlue[500],
      contrastText: '#FFF',
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFF',
    },
  },
  header: {
    color: grey[500],
    background: '#FFF',
    search: {
      color: grey[800],
    },
    indicator: {
      background: customBlue[600],
    },
  },
  footer: {
    color: grey[500],
    background: '#FFF',
  },
  sidebar: {
    color: grey[200],
    background: '#FFF',
    header: {
      color: grey[200],
      background: '#F7F9FC',
      brand: {
        color: customBlue[500],
      },
    },
    footer: {
      color: grey[200],
      background: '#F7F9FC',
      online: {
        background: green[500],
      },
    },
    badge: {
      color: '#FFF',
      background: customBlue[500],
    },
  },
  customTable: {
    stickyColumn: {
      backgroundPrimary: '#F5F5F5',
      backgroundSecondary: '#FFFFFF',
    },
  },
  agGrid: {
    theme: themeQuartz.withPart(colorSchemeLightWarm),
  },
} as ThemeOptions & { name: string };

// Dark variant without agGrid theme
const darkVariantBase = merge(lightVariant, {
  name: ThemeType.dark,
  palette: {
    mode: 'dark',
    primary: {
      main: customBlue[600],
      contrastText: '#FFF',
    },
    background: {
      default: '#1B2635',
      paper: '#233044',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(255, 255, 255, 0.5)',
    },
  },
  header: {
    color: grey[300],
    background: '#233044',
    search: {
      color: grey[200],
    },
  },
  footer: {
    color: grey[300],
    background: '#233044',
  },
  sidebar: {
    color: grey[200],
    background: '#233044',
    header: {
      color: grey[200],
      background: '#233044',
      brand: {
        color: customBlue[500],
      },
    },
    footer: {
      color: grey[200],
      background: '#1E2A38',
      online: {
        background: green[500],
      },
    },
    badge: {
      color: '#FFF',
      background: customBlue[500],
    },
  },
  customTable: {
    stickyColumn: {
      backgroundPrimary: '#344053',
      backgroundSecondary: '#233044',
    },
  },
}) as ThemeOptions & { name: string };

// Add agGrid theme separately
const darkVariant = {
  ...darkVariantBase,
  agGrid: {
    theme: themeQuartz.withPart(colorSchemeDarkBlue),
  },
} as ThemeOptions & { name: string };

const variants = [lightVariant, darkVariant];

export default variants;
