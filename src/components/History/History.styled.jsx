import styled from 'styled-components';

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: ${props => {
    switch (props.value) {
      case 'dr':
        return '2px solid #b4b6b8';
      case 'cl':
        return '2px solid #792608';
      default:
        return '2px solid #4d4a4a';
    }
  }};
  padding: 10px 0 10px 10px;

  button {
    display: inline-flex;
    padding: 0;
    background-color: transparent;
    border: none;
    justify-content: end;
    margin-top: auto;
  }

  @media screen and (min-width: 320px) {
    width: 100px;
  }
  @media screen and (min-width: 480px) {
    width: 500px;
  }
`;

export const HistoryTitle = styled.p`
  margin: 0;
  text-align: center;
  font-size: medium;
  text-decoration: underline;

  @media screen and (min-width: 768px) {
    font-size: x-large;
  }
`;

export const HistoryText = styled.p`
  font-size: small;
  
  @media screen and (min-width: 768px) {
    font-size: medium;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const HistoryTextCont = styled.div`
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    background-color: transparent;
    border-radius: 5px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => {
      switch (props.value) {
        case 'dr':
          return '#b6b8b9';
        case 'cl':
          return 'orangered';
        default:
          return '#4d4a4a;';
      }
    }};
    border-radius: 5px;
  }
`;
