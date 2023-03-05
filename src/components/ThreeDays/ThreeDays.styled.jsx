import styled from 'styled-components';

export const ContainerThreeMain = styled.div`
  border: 1px solid #2ca4f4;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  font-size: smaller;
  max-height: 100%;
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
    justify-content: center;
    gap: 10px;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;

    li {
      border-radius: 20px;
      border: 1px solid white;
      padding: 15px;
      font-size: small;
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      background-color: #9ed5f8;
      width: 180px;
      cursor: pointer;
      transition: scale 250ms linear, border 250ms linear;

      :hover,
      :focus {
        scale: 1.05;
        border: 1px solid #2ca4f4;
      }
    }
  }
`;

export const ContainerThree = styled.div`
  /* border: 1px solid #2ca4f4; */
  border-radius: 20px;

  /* padding: 20px; */
  font-size: smaller;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
