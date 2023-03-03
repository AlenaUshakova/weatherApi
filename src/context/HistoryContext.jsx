import useLocalStorage from 'Hooks/useLocalStorage';
import { createContext, useEffect } from 'react';

export const historyContext = createContext();

const LS_KEY3 = 'save';

export const HistoryContext = ({ children }) => {
  const [arr, setArr] = useLocalStorage(LS_KEY3, []);

  useEffect(() => {
    window.localStorage.setItem(LS_KEY3, JSON.stringify(arr));
  }, [arr]);

  return (
    <historyContext.Provider value={{ arr, setArr }}>
      {children}
    </historyContext.Provider>
  );
};
