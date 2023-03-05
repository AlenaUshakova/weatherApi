import useLocalStorage from 'Hooks/useLocalStorage';
import { createContext, useLayoutEffect } from 'react';

export const themeContext = createContext('lt');

// const LS_KEY2 = 'saveln';

export const ThemeContext = ({ children }) => {
   const [theme, setTheme] = useLocalStorage('theme', 'light');
   useLayoutEffect(() => {
     document.documentElement.setAttribute('data-theme', theme);
   }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
