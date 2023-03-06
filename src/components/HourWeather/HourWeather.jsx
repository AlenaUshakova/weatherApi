import { HourWeatherTable } from './HourWeather.styled';
import { languageContext } from '../../context/LanguageContext';
import { useContext } from 'react';
import { useMediaRules } from 'MediaRules/MediaRules';

export const HourWeather = ({ object }) => {
  const { value } = useContext(languageContext);
  const { isMobile } = useMediaRules();

  return (
    <HourWeatherTable>
      <table>
        <thead>
          <tr>
            <th rowSpan="2"></th>
          </tr>
          {isMobile && (
            <tr>
              {object.hour.map(el => {
                if (
                  el.time.substring(11, 16) === '05:00' ||
                  el.time.substring(11, 16) === '11:00' ||
                  el.time.substring(11, 16) === '17:00' ||
                  el.time.substring(11, 16) === '23:00'
                ) {
                  return (
                    <th key={el.time_epoch} day={el.is_day}>
                      {el.time.substring(11, 16)}
                      <img
                        src={el.condition.icon}
                        alt={el.condition.text}
                        width={35}
                      />
                    </th>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {!isMobile && (
            <tr>
              {object.hour.map((el, index) => {
                if (index % 2 !== 0) {
                  return (
                    <th key={el.time_epoch} day={el.is_day}>
                      {el.time.substring(11, 16)}
                      <img
                        src={el.condition.icon}
                        alt={el.condition.text}
                        width={35}
                      />
                    </th>
                  );
                }
                return null;
              })}
            </tr>
          )}
        </thead>
        <tbody>
          {!isMobile && (
            <tr>
              <td>{value === 'en' ? 'Humidity' : 'Вологість'}</td>
              {object.hour.map((el, index) => {
                if (index % 2 !== 0) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {el.humidity} %
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {isMobile && (
            <tr>
              <td>{value === 'en' ? 'Humidity' : 'Вологість'}</td>
              {object.hour.map(el => {
                if (
                  el.time.substring(11, 16) === '05:00' ||
                  el.time.substring(11, 16) === '11:00' ||
                  el.time.substring(11, 16) === '17:00' ||
                  el.time.substring(11, 16) === '23:00'
                ) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {el.humidity} %
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {!isMobile && (
            <tr>
              <td>{value === 'en' ? 'Temperature' : 'Температура'} </td>
              {object.hour.map((el, index) => {
                if (index % 2 !== 0) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {Math.round(el.temp_c)} °С
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {isMobile && (
            <tr>
              <td>{value === 'en' ? 'Temperature' : 'Температура'} </td>
              {object.hour.map(el => {
                if (
                  el.time.substring(11, 16) === '05:00' ||
                  el.time.substring(11, 16) === '11:00' ||
                  el.time.substring(11, 16) === '17:00' ||
                  el.time.substring(11, 16) === '23:00'
                ) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {Math.round(el.temp_c)} °С
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {!isMobile && (
            <tr>
              <td>{value === 'en' ? 'Visibility' : 'Видимість'}</td>
              {object.hour.map((el, index) => {
                if (index % 2 !== 0) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {el.vis_km} {value === 'en' ? 'km' : 'км'}
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {isMobile && (
            <tr>
              <td>{value === 'en' ? 'Visibility' : 'Видимість'}</td>
              {object.hour.map(el => {
                if (
                  el.time.substring(11, 16) === '05:00' ||
                  el.time.substring(11, 16) === '11:00' ||
                  el.time.substring(11, 16) === '17:00' ||
                  el.time.substring(11, 16) === '23:00'
                ) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {el.vis_km} {value === 'en' ? 'km' : 'км'}
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {!isMobile && (
            <tr>
              <td>
                {' '}
                {value === 'en'
                  ? 'Probability of precipitation'
                  : 'Ймовірність опадів'}
              </td>
              {object.hour.map((el, index) => {
                if (index % 2 !== 0) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {el.chance_of_rain || el.chance_of_snow} %
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {isMobile && (
            <tr>
              <td>
                {' '}
                {value === 'en'
                  ? 'Probability of precipitation'
                  : 'Ймовірність опадів'}
              </td>
              {object.hour.map(el => {
                if (
                  el.time.substring(11, 16) === '05:00' ||
                  el.time.substring(11, 16) === '11:00' ||
                  el.time.substring(11, 16) === '17:00' ||
                  el.time.substring(11, 16) === '23:00'
                ) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {el.chance_of_rain || el.chance_of_snow} %
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {!isMobile && (
            <tr>
              <td>{value === 'en' ? 'Wind speed' : 'Швидкість вітру'}</td>
              {object.hour.map((el, index) => {
                if (index % 2 !== 0) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {el.wind_kph} {value === 'en' ? 'km/h' : 'км/г'}
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
          {isMobile && (
            <tr>
              <td>{value === 'en' ? 'Wind speed' : 'Швидкість вітру'}</td>
              {object.hour.map(el => {
                if (
                  el.time.substring(11, 16) === '05:00' ||
                  el.time.substring(11, 16) === '11:00' ||
                  el.time.substring(11, 16) === '17:00' ||
                  el.time.substring(11, 16) === '23:00'
                ) {
                  return (
                    <td key={el.time_epoch} day={el.is_day}>
                      {el.wind_kph} {value === 'en' ? 'km/h' : 'км/г'}
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          )}
        </tbody>
      </table>
    </HourWeatherTable>
  );
};
