import styled from 'styled-components';

export const ContainerToday = styled.div`
  border: 1px solid #96b4f5;
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
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
  }
  p {
    margin: 0;
    text-align: left;
    font-size: x-large;
  }
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
