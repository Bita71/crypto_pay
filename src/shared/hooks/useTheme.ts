'use client'
import { useEffect, useState } from "react";

const key = "theme";
export enum Theme {
  light = 'light-theme',
  dark = 'dark-theme',
}

const fallbackTheme = localStorage.getItem(key) as Theme | undefined;
export const useTheme = function useTheme() {
  const [theme, setTheme] = useState(fallbackTheme || Theme.light);
  
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(key, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => 
      prev === Theme.light ? Theme.dark : Theme.light
    )
  }
  
  return {
    theme,
    toggleTheme,
  }
};
