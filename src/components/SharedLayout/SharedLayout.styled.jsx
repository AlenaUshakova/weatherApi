import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  background-color: ${props =>
    props.theme === 'dark' ? ' #043385' : ' #d2e8f784'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px solid #2ca4f4;
  position: relative;

  color: ${props => {
    switch (props.value) {
      case 'dr':
        return 'white';
      case 'cl':
        return '#792608';
      default:
        return 'black';
    }
  }};

  @media screen and (min-width: 320px) {
    width: 320px;
    font-size: 12px;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  /* position: sticky; */
  top: 0;
  left: 0;
  margin: 0 auto;
  z-index: 10;
  width: 100%;
  height: 50px;
  background-color: ${props =>
    props.theme === 'dark' ? ' #043385' : ' #d2e8f784'};
  border-bottom: 2px solid #2ca4f4;
  > nav {
    display: flex;
    gap: 20px;
  }

  p {
    color: #2ca4f4;
    font-size: 25px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 0px;
  border-radius: 4px;
  text-decoration: none;
  color: #2ca4f4;
  /* position: relative; */

  transition: color linear 250ms, background-color linear 250ms;

  &.active {
    color: #2ca4f4;
    &::after {
      position: absolute;
      bottom: 5px;
      left: 0;
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #2ca4f4;
      border-radius: 2px;
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #043385;
  }
`;
export const LinkText = styled(NavLink)`
  padding: 8px 0px;
  border-radius: 4px;
  text-decoration: none;
  color: #2ca4f4;
  font-size: x-large;
`;
