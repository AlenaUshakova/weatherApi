import styled from 'styled-components';

export const LoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  width: 100%;
  height: auto;
  margin: 0;
  border-radius: 10px;

  @media screen and (min-width: 480px) {
    font-size: small;
  }
  @media screen and (min-width: 768px) {
    height: 70px;
    font-size: x-large;
  }

  background-color: ${props => {
    switch (props.value) {
      case 'dr':
        return '#b6b8b9';
      case 'cl':
        return 'orangered';
      default:
        return '#e6e8e9';
    }
  }};
  color: ${props => {
    switch (props.value) {
      case 'dr':
        return '#4d4a4a';
      case 'cl':
        return 'white';
      default:
        return 'black';
    }
  }};
  border: ${props => {
    switch (props.value) {
      case 'dr':
        return '2px solid #4d4a4a';
      case 'cl':
        return '2px solid #792608';
      default:
        return '2px solid #b4b6b8';
    }
  }};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  transition: scale 250ms linear;

  :hover,
  :focus {
    scale: 1.1;
  }
`;
