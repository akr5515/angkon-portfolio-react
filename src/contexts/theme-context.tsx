import React, { ReactNode, createContext, useState } from "react";

import { theDarkTheme, theLightTheme } from "../theme/theme";

type Theme = typeof theLightTheme | typeof theDarkTheme;
export interface ThemeContextProps {
  theme: Theme;
  drawerOpen: boolean;
  setHandleDrawer: () => void;
  changeTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState<Theme>(theLightTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDark, setDark] = useState(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const changeTheme = () => {
    if (isDark) {
      setTheme(theLightTheme);
      setDark(false);
    } else {
      setTheme(theDarkTheme);
      setDark(true);
    }
  };

  const value: ThemeContextProps = {
    theme,
    drawerOpen,
    setHandleDrawer,
    changeTheme,
    isDark,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
