import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    header: {
      color: string;
      background: string;
      search: {
        color: string;
      };
      indicator: {
        background: string;
      };
    };

    sidebar: {
      color: string;
      background: string;
      header: {
        color: string;
        background: string;
        brand: {
          color: string;
        };
      };
      footer: {
        color: string;
        background: string;
        online: {
          background: string;
        };
      };
      badge: {
        color: string;
        background: string;
      };
    };

    footer: {
      color: string;
      background: string;
    };

    customTable?: {
      stickyColumn?: {
        backgroundPrimary?: string;
        backgroundSecondary?: string;
      };
    };
  }

  interface ThemeOptions {
    header?: {
      color?: string;
      background?: string;
      search?: {
        color?: string;
      };
      indicator?: {
        background?: string;
      };
    };

    sidebar?: {
      color?: string;
      background?: string;
      header?: {
        color?: string;
        background?: string;
        brand?: {
          color?: string;
        };
      };
      footer?: {
        color?: string;
        background?: string;
        online?: {
          background?: string;
        };
      };
      badge?: {
        color?: string;
        background?: string;
      };
    };

    footer?: {
      color?: string;
      background?: string;
    };

    customTable?: {
      stickyColumn?: {
        backgroundPrimary?: string;
        backgroundSecondary?: string;
      };
    };
  }
}
