import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction:column;
  padding: 10px;
  font-size: 30px;
  width: 100%;
`;

export const LinkContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 5px;
  font-size: 10px;

  @media screen and (min-width: 480px) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
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
  padding: 40px 0;
  font-size: small;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: 480px) {
    font-size: medium;
  }
  @media screen and (min-width: 768px) {
    font-size: x-large;
  }

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