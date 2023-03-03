import useLocalStorage from 'Hooks/useLocalStorage';
import { createContext, useEffect } from 'react';

export const themeContext = createContext('lt');

const LS_KEY2 = 'saveln';

export const ThemeContext = ({ children }) => {
  const [selectedOption, setSelectedOption] = useLocalStorage(LS_KEY2, {
    value: 'lt',
    label: 'Light theme',
  });
  const options = [
    { value: 'lt', label: 'Light theme' },
    { value: 'dr', label: 'Dark theme' },
    { value: 'cl', label: 'Colored theme' },
  ];
  const { value } = selectedOption;

  useEffect(() => {
    window.localStorage.setItem(LS_KEY2, JSON.stringify(selectedOption));
  }, [selectedOption]);

  return (
    <themeContext.Provider
      value={{ selectedOption, setSelectedOption, options, value }}
    >
      {children}
    </themeContext.Provider>
  );
};
