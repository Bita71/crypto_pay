import { useEffect, useState } from "react";

const key = "theme";
export enum Theme {
  light = 'light-theme',
  dark = 'dark-theme',
}

const fallbackTheme = localStorage.getItem(key) as Theme | undefined;
export const useTheme = function useTheme() {
  const [theme, setTheme] = useState(fallbackTheme || Theme.light);
  const [isThemeInited, setThemeInited] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
    setThemeInited(true);
  }, [isThemeInited]);
  
  useEffect(() => {
    if (isThemeInited) {
      document.body.className = theme;
      localStorage.setItem(key, theme);
    }
  }, [isThemeInited, theme]);

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
