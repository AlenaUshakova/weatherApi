import { HourWeatherTable } from './HourWeather.styled';
export const HourWeather = ({object}) => {
  return (
    <HourWeatherTable>
      <table>
        <thead>
          <tr>
            <th rowSpan="2"></th>
          </tr>
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
        </thead>

        <tbody>
          <tr>
            <td>Вологість</td>
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
          <tr>
            <td>Температура </td>
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
          <tr>
            <td>Видимість</td>
            {object.hour.map((el, index) => {
              if (index % 2 !== 0) {
                return (
                  <td key={el.time_epoch} day={el.is_day}>
                    {el.vis_km} км
                  </td>
                );
              }
              return null;
            })}
          </tr>
          <tr>
            <td>Ймовірність опадів</td>
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
          <tr>
            <td>Швидкість вітру</td>
            {object.hour.map((el, index) => {
              if (index % 2 !== 0) {
                return (
                  <td key={el.time_epoch} day={el.is_day}>
                    {el.wind_kph} км/г
                  </td>
                );
              }
              return null;
            })}
          </tr>
        </tbody>
      </table>
    </HourWeatherTable>
  );
};
