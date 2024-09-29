import { ThemeType } from '../utils/enums/theme';

export const initialTheme = ThemeType.light;

export interface ThemeContextProps {
  theme: string;
  setTheme: (theme: ThemeType) => void;
}
