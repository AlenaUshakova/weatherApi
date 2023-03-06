import useLocalStorage from 'Hooks/useLocalStorage';
import { createContext } from 'react';

export const queryParams = createContext();

const LS_KEY = 'city';

export const QueryParamsContext = ({ children }) => {
  const [query, setQuery] = useLocalStorage(LS_KEY, '');
  return (
    <queryParams.Provider value={{ query, setQuery }}>
      {children}
    </queryParams.Provider>
  );
};
