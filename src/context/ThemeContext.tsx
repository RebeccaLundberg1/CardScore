import { createContext, useContext, useState } from 'react'
import { colors } from '../theme'

//Custom made type for the color object
type Theme = typeof colors.light
//Custom made type for de context of the Theme 
type ThemeContextType = {theme: Theme; toggleTheme: () => void; isDark: boolean}
// Creates a context that holds the theme, accessible to all components wrapped in ThemeProvider
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/*
* Wraps all underlying pages in the active theme. The return is the ThemeContext context. 
*/
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

/*
* Function used in other files to be able to access the theme colors. 
* If component is not wrapd inside a ThemeProvider a error is thrown. 
*/
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}

