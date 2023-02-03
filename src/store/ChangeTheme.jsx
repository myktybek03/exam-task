import { useCallback } from "react"
import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("night")

  const dayTheme = useCallback(() => {
    setTheme("day")
  }, [])
  const nigthTheme = useCallback(() => {
    setTheme("night")
  }, [])

  const themes = {
    theme,
    dayTheme,
    nigthTheme,
  }

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
