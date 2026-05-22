import { createContext, useContext } from 'react';
import { colors } from '../theme';

type Theme = typeof colors.light;

const ThemeContext = createContext<Theme>(colors.light);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
  <ThemeContext.Provider value={colors.light}>
    {children}
  </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

