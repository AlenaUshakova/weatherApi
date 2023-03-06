import styled from 'styled-components';
export const HourWeatherTable = styled.div`
  margin-top: 30px;
  table {
    background-color: #9ed5f8;
    border-collapse: collapse;
    border-radius: 20px;
    font-size: 8px;;
    @media screen and (min-width: 1200px) {
      font-size: small;
    }
  }

  table th,
  table td {
    padding: 10px;
    text-align: center;
  }
`;