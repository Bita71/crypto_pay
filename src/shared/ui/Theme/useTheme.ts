import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeProvider";

export const useTheme = function useTheme() {
  const {theme, setTheme} = useContext(ThemeContext)
  
  const toggleTheme = () => {
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light
    setTheme(newTheme)
  }
  
  return {
    theme,
    toggleTheme,
  }
};
