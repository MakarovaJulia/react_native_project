import {useContext, useMemo} from 'react';
import {ColorsKeys, IColors, IThemeContext} from '../ThemeTypes';
import {ThemeContext} from '../ThemeProvider';
import {Colors} from '../../../styles/Colors';

export const useTheme = (): IThemeContext & {
  Colors: IColors;
} => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  const colors = useMemo<IColors>(() => {
    const result = {};
    const keys = Object.keys(Colors) as Array<ColorsKeys>;
    for (let i = 0; i < keys.length; i++) {
      const colorObject = Colors[keys[i]];
      if (context.theme in colorObject) {
        Object.assign(result, {[keys[i]]: colorObject[context.theme]});
      }
    }
    return result as IColors;
  }, [context.theme]);
  return {Colors: colors, ...context};
};
