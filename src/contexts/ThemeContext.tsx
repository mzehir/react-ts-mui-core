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
    localStorageSetItem('activeTheme', newTheme); // DB'ye kayıt
    _setTheme(newTheme); // Context'e kayıt
  };

  React.useEffect(() => {
    const themeInitialSetting = async () => {
      const defaultTheme = initialTheme; // Varsayılan değer
      const storedTheme = localStorageGetItem<ThemeType>('activeTheme'); // Kullanıcının kaydettiği değer

      if (storedTheme) {
        // Kullanıcının kayıtlı bir değeri varsa kayıtlı değeri kullan
        setTheme(storedTheme);
      } else {
        // Kullanıcının kayıtlı bir değeri yoksa varsayılan değeri kullan
        setTheme(defaultTheme);
      }
    };

    themeInitialSetting();
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
