import styled, { css, keyframes } from 'styled-components';

export const MainIinfo = styled.div`
  position: relative;
  top: 0;
  right: 520px;
  z-index: 20;
  flex: 0 0 auto;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 2px black;
  padding: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  max-width: 700px;
  gap: 40px;
  border-radius: 20px;
  width: 100%;
  @media screen and (min-width: 1200px) {
    gap: 90px;
    right: 600px;
  }

  h2 {
    margin-top: 80px;
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;

    @media screen and (min-width: 1200px) {
      margin: 0;
      font-size: 32px;
    }
  }

  p {
    margin: 0;
    text-align: left;
    font-size: x-large;
  }
`;

export const MainIinfoTab = styled.div`
  table {
    border-collapse: collapse;
    font-size: 15px;
    width: 300px;
  }

  table th,
  table td {
    padding: 5px;
    text-align: left;
    border-bottom: 1px solid white;
  }

  table tr td:nth-child(2n) {
    text-align: right;
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
      case ('Heavy rain', 'Light freezing rain'):
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
