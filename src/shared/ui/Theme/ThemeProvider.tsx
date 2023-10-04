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

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<Theme>(Theme.light);
  const [isInited, setIsInited] = useState(false);

  useEffect(() => {
    const fallbackTheme = localStorage.getItem(key) as Theme;
    if (fallbackTheme) {
      setTheme(fallbackTheme);
    }
    setIsInited(true);
  }, []);

  useEffect(() => {
    if (isInited) {
      document.body.className = theme;
      localStorage.setItem(key, theme);
    }
  }, [isInited, theme]);

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
