import styled, { css, keyframes } from 'styled-components';

export const MainIinfo = styled.div`
  position: relative;
  top: 0;
  right: 215px;
  gap: 15px;
  z-index: 5;
  color: white;
  text-shadow: 1px 1px 2px red;
  padding: 40px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  max-width: 700px;
  border-radius: 20px;
  width: 100%;

  @media screen and (min-width: 480px) {
    right: 300px;
    gap: 15px;
  }

  @media screen and (min-width: 768px) {
    right: 520px;
    gap: 40px;
    flex-direction: row;
    justify-content: center;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 2px black;
  }
  @media screen and (min-width: 1200px) {
    gap: 150px;
    right: 600px;
  }

  h2 {
    margin-top: 50px;
    text-align: center;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      text-align: left;
      font-size: 16px;
      text-align: center;
      margin-top: 80px;
      margin-bottom: 20px;
    }
    @media screen and (min-width: 1200px) {
      margin: 0;
      font-size: 32px;
    }
  }

  img {
    @media screen and (max-width: 767px) {
      width: 70px;
    }
  }
`;

export const MainIinfoTab = styled.div`
  table {
    border-collapse: collapse;
    font-size: 12px;
    width: 200px;

    @media screen and (min-width: 768px) {
      font-size: 15px;
      width: 300px;
    }
    @media screen and (min-width: 1200px) {
    }
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

export const muvAnimationMin = keyframes`
  0% {
    transform: translatex(-15px);
  }
 
  100% {
    transform: translatex(30px);
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
          animation-name: ${muvAnimationMin};
          animation-duration: 1.5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
          @media screen and (min-width: 1200px) {
            animation-name: ${muvAnimation};
          }
        `;
      case 'Patchy rain possible':
        return css`
          animation-name: ${muvAnimationMin};
          animation-duration: 1.5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
          @media screen and (min-width: 1200px) {
            animation-name: ${muvAnimation};
          }
        `;
      case 'Moderate rain':
        return css`
          animation-name: ${muvAnimationMin};
          animation-duration: 1.5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
          @media screen and (min-width: 1200px) {
            animation-name: ${muvAnimation};
          }
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
