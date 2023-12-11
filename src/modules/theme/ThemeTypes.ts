export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}
export type ThemeType = ThemeTypes.LIGHT | ThemeTypes.DARK;
export interface IColorsValues {
  light: string;
  dark: string;
}
export interface IColors {
  overlay: string;
  backgroundPrimary: string;
  accentDefault: string;
  textPrimary: string;
  textSecondary: string;
  buttonPrimary: string;
  accentPrimary: string;
  accentSecondary: string;
}
export enum ColorsKeys {
  overlay = 'overlay',
  backgroundPrimary = 'backgroundPrimary',
  accentDefault = 'accentDefault',
  textPrimary = 'textPrimary',
  textSecondary = 'textSecondary',
  buttonPrimary = 'buttonPrimary',
  accentPrimary = 'accentPrimary',
  accentSecondary = 'accentSecondary',
}
export interface IThemeContext {
  theme: ThemeType;
  selectTheme: ThemeTypes;
  changeTheme: (value: ThemeTypes) => void;
}
