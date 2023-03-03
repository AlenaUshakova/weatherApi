import Select from 'react-select';
import { useContext } from 'react';
import { themeContext } from 'context/ThemeContext';
import { historyContext } from 'context/HistoryContext';
import {
  SettingsBtn,
  SettingsSelect,
  SettingsContainer,
} from './Settings.styled';

const Settings = () => {
  const { selectedOption, setSelectedOption, options, value } =
    useContext(themeContext);
  const { arr, setArr } = useContext(historyContext);
  return (
    <SettingsContainer>
      <div>
        <h1>Settings</h1>
        <SettingsSelect>
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: state.isSelected
                  ? '1px solid black'
                  : '1px solid  #b4b6b8',
                backgroundColor: value === 'cl' ? 'orangered' : 'white',
                color: value === 'cl' ? 'white' : 'black',
                height: '70px',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused && ' #b4b6b8',
                backgroundColor: state.isFocused
                  ? value === 'cl'
                    ? 'orangered'
                    : '#b4b6b8'
                  : 'white',
                color: state.isFocused ? 'white' : 'black',
              }),
            }}
            className="dod"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
          <SettingsBtn value={value} onClick={() => setArr([])}>
            {arr.length > 0 ? 'Clear All History' : 'History Deleted'}
          </SettingsBtn>
        </SettingsSelect>
      </div>
      <p> &copy; Product by Alena Ushakova</p>
    </SettingsContainer>
  );
};

export default Settings;