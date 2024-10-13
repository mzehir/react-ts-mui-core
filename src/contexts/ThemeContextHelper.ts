import { ThemeType } from '../utils/enums/theme';

export const initialTheme = ThemeType.dark;

export interface ThemeContextProps {
  theme: string;
  setTheme: (theme: ThemeType) => void;
}
