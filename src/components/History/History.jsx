import {
  HistoryContainer,
  HistoryTitle,
  HistoryText,
  HistoryTextCont,
} from './History.styled';
import { useContext } from 'react';
import { historyContext } from 'context/HistoryContext';
import { themeContext } from 'context/ThemeContext';

export const History = () => {
  const { arr } = useContext(historyContext);
  const { value } = useContext(themeContext);
  return (
    <HistoryContainer value={value}>
      <HistoryTitle>History</HistoryTitle>
      <HistoryTextCont value={value}>
        {arr.map((it, index) => (
          <HistoryText key={index}>{it}</HistoryText>
        ))}
      </HistoryTextCont>
    </HistoryContainer>
  );
};
