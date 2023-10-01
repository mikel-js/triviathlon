import React, { createContext, useContext, useState } from 'react';

export type Theme = 'Default' | 'Dark Mode' | 'Fresh';

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'Default',
  setTheme: () => {},
});

type ThemebuttonsProps = {
  setTheme: (value: string) => void;
};

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('Default');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
