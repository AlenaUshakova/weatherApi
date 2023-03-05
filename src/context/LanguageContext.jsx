import { createContext } from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';

export const languageContext = createContext('en');



export const LanguageContext = ({ children }) => {
  const [selectedOption, setSelectedOption] = useLocalStorage('ln', {
    value: 'en',
    label: 'EN',
  });
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'uk', label: 'UK' },
  ];
  const { value } = selectedOption;


  return (
    <languageContext.Provider
      value={{ selectedOption, setSelectedOption, options, value }}
    >
      {children}
    </languageContext.Provider>
  );
};
