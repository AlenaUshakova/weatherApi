import styled, { css, keyframes } from 'styled-components';

export const ContainerTomor = styled.div`
  border: 1px solid #96b4f5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  font-size: smaller;
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
  }
  ul {
    display: flex;
    font-size: xx-small;
    flex-wrap: wrap;
    gap: 5px;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;

    li {
      flex-basis: calc((100% - 30px) / 7);
      border-radius: 20px;
      border: 1px solid white;
      padding: 10px;
      font-size: small;
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      background-color: #ece7e7c0;
      width: 180px;
      cursor: pointer;
      transition: scale 250ms linear, border 250ms linear;

      :hover,
      :focus {
        scale: 1.05;
        border: 1px solid #96b4f5;
      }
    }
  }
`;
export const ContainerThree = styled.div`
  border: 1px solid #96b4f5;
  border-radius: 20px;

  padding: 20px;
  font-size: smaller;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
  }
  h1 {
    margin: 0;
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const Tomor = styled.div`
  display: flex;
  font-size: xx-small;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
  p {
    text-align: left;
  }
`;

export const TomorItem = styled.div`
  flex-basis: calc((100% - 110px) / 12);
  text-align: center;
  /* border: 1px solid red; */
  font-size: xx-small;

  background-color: ${props => (props.day === 1 ? 'yellow' : 'gray')};
  p {
    text-align: center;
  }
  :nth-child(2n) {
    display: none;
  }
`;
export const TomorIinfo = styled.div`
  background-color: #ece7e7c0;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  max-width: 700px;
  gap: 50px;
  border-radius: 20px;
  width: 100%;
  h2 {
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
    font-size: 32px;
  }
  p {
    margin: 0;
    text-align: left;
    font-size: x-large;
  }
`;

export const sunAnimation = keyframes`
   0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
`;
export const muvAnimation = keyframes`
  0% {
    transform: translatex(-100px);
  }
 
  100% {
    transform: translatex(100px);
  }
`;

export const bitAnimation = keyframes`
 	0% { 
    transform: scale(1) 
  }

  50% {
   transform: scale(1.2);
  }
   	0% { 
    transform: scale(1) 
  }
`;

export const TomorImg = styled.img`
  ${({ alt }) => {
    switch (alt) {
      case 'Sunny':
        return css`
          animation-name: ${sunAnimation};
          animation-duration: 5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        `;
      case 'Heavy rain':
        return css`
          animation-name: ${muvAnimation};
          animation-duration: 1.5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
        `;
      case 'Patchy rain possible':
        return css`
          animation-name: ${muvAnimation};
          animation-duration: 1.5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
        `;
      case 'Moderate rain':
        return css`
          animation-name: ${muvAnimation};
          animation-duration: 1.5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
        `;
      default:
        return css`
          animation-name: ${bitAnimation};
          animation-duration: 3s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        `;
    }
  }}
`;
export const TomorTable = styled.div`
  margin-top: 30px;
  table {
    background-color: #ece7e7c0;
    border-collapse: collapse;
    border-radius: 20px;
    font-size: small;
  }

  table th,
  table td {
    padding: 10px;
    /* border: 1px solid #2a2a2a; */
    text-align: center;
  }
`;
export const TomorTableInfo = styled.div`
  table {
    border-collapse: collapse;
    font-size: small;
  }

  table th,
  table td {
    padding: 10px;
    /* border: 1px solid #2a2a2a; */
    text-align: left;
    border-radius: 5px;
  }

  table tr td:nth-child(2n) {
    background-color: #96b4f5;
    border: 5px solid #ece7e7c0;
    text-align: center;
  }
`;
