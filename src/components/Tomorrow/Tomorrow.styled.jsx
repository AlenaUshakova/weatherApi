import styled from 'styled-components';

export const ContainerTomor = styled.div`
  border: 1px solid #2ca4f4;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
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
    color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
  }
`;
