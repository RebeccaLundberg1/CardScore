import { createContext, useContext, useState } from 'react'
import { colors } from '../theme'

type Theme = typeof colors.light
type ThemeContextType = {theme: Theme; toggleTheme: () => void; isDark: boolean}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(prev => !prev)

  const theme = isDark ? colors.dark : colors.light

  return (
  <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
    {children}
  </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}

