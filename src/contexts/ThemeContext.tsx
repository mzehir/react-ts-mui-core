import React from 'react';
import { ThemeContextProps, initialTheme } from './ThemeContextHelper';
import { ThemeType } from '../utils/enums/theme';
import { localStorageGetItem, localStorageSetItem } from '../utils/methods/localStorage';

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: initialTheme,
  setTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, _setTheme] = React.useState<ThemeType>(initialTheme);

  const setTheme = (newTheme: ThemeType) => {
    localStorageSetItem('activeTheme', newTheme); // Save to DB
    _setTheme(newTheme); // Save to Context
  };

  React.useEffect(() => {
    const themeInitialSetting = async () => {
      const defaultTheme = initialTheme; // Default value
      const storedTheme = localStorageGetItem<ThemeType>('activeTheme'); // Value saved by the user

      if (storedTheme) {
        // If the user has a saved value, use the saved value
        setTheme(storedTheme);
      } else {
        // If the user does not have a saved value, use the default value
        setTheme(defaultTheme);
      }
    };

    themeInitialSetting();
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
