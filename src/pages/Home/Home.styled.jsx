import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction:column;
  padding: 10px;
  font-size: 30px;
  width: 100%;
  /* flex-grow: 1; */
  /* overflow: hidden; */

`;

export const CalculateWindow = styled.div`
  border-bottom: 2px solid #4d4a4a;
  display: flex;
  padding: 10px;
  width: 100%;
  p {
    margin: 0;
    margin-left: auto;
  }
`;

export const BtnContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 40px 40px;
  width: 100%;
`;

export const BtnIten = styled.li`
  flex-basis: calc((100% - 160px) / 5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CalculateContainer = styled.div`
  padding: 10px;
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border-left: 2px solid #4d4a4a;
  padding: 10px;

  button {
    display: inline-flex;
    padding: 0;
    background-color: transparent;
    border: none;
    justify-content: end;
    margin-top: auto;
  }
`;

export const HistoryTitle = styled.p`
  margin: 0;
  text-align: center;
`;

export const HistoryText = styled.p`
  font-size: 20px;
`;
export const LinkContainer = styled.div`
  margin-top: 40px;

  display: flex;
  gap: 5px;
  font-size: 25px;
`;

export const Link = styled(NavLink)`
  padding: 8px 8px;
  border-top-left-radius: 10px;
  text-decoration: none;
  color: white;
  position: relative;
  background-color: #2ca4f4;
  transition: color linear 250ms, background-color linear 250ms,
    border-right linear 250ms;

  &.active {
    color: #043385;
    border-right: 1px solid #043385;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #043385;
  }
`;

export const HomeInfoCont = styled.div`
  color: ${props => (props.theme === 'dark' ? 'white' : ' #043385')};
  padding: 40px;
  font-size: large;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    margin-bottom: 40px;
    text-align: center;
  }
  ol {
    margin: 0;
    margin-bottom: 40px;
  }
`;