import styled from 'styled-components';

export const ContainerTenMain = styled.div`
  border: 1px solid #2ca4f4;
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
    color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
  }

  ul {
    display: flex;
    font-size: xx-small;
    flex-wrap: wrap;
    gap: 4px;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;

    @media screen and (min-width: 768px) {
      gap: 15px;
    }
    @media screen and (min-width: 1200px) {
      gap: 5px;
    }

    li {
      flex-basis: calc((100% - 8px) / 3);
      border-radius: 20px;
      border: 1px solid white;
      padding: 10px;
      font-size: x-small;
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
      background-color: #9ed5f8;
      width: 50px;
      cursor: pointer;
      transition: scale 250ms linear, border 250ms linear;

      @media screen and (min-width: 768px) {
        gap: 10px;
        font-size: small;
        width: 100px;
        flex-basis: calc((100% - 75px) / 6);
      }
      
      @media screen and (min-width: 1200px) {
        flex-basis: calc((100% - 30px) / 7);
      }
      :hover,
      :focus {
        scale: 1.05;
        border: 1px solid #96b4f5;
      }
    }
  }
`;

export const ContainerTen = styled.div`
  border-radius: 20px;
  font-size: smaller;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

