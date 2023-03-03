import styled from 'styled-components';

export const SettingsBtn = styled.button`
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  border: 1px solid #b4b6b8;
  height: 70px;
  cursor: pointer;
  margin-top: 20px;
  color: ${props => (props.value === 'lt' ? 'black' : 'white')};
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
`;

export const SettingsSelect = styled.div`
  width: 250px;
  text-align: center;
  margin: 0 auto;
`;

export const SettingsContainer = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
