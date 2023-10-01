"use client";
import React, {
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const key = "theme";
export enum Theme {
  light = "light-theme",
  dark = "dark-theme",
}

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.light,
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}
const fallbackTheme = localStorage.getItem(key) as Theme;
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<Theme>(fallbackTheme || Theme.light);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(key, theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
