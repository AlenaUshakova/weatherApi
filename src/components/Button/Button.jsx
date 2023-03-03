import { LoadMore } from './Button.styled';
import { useContext } from 'react';
import { themeContext } from 'context/ThemeContext';

export const Button = ({ onClick, children }) => {
    const { value } = useContext(themeContext);
  return (
    <LoadMore value={value} onClick={onClick} type="button">
      {children}
    </LoadMore>
  );
};

