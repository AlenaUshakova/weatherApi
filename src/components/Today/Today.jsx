import { useContext, useEffect, useState } from 'react';
import { queryParams } from 'context/QueryParams';
import { weatherByCurr } from 'services/api-weather';
import { ContainerToday } from './Today.styled';
import { SunSet } from 'components/SunSet/SunSet';
import { HourWeather } from 'components/HourWeather/HourWeather';
import { MainWeather } from 'components/MainWeather/MainWeather';
import { themeContext } from 'context/ThemeContext';

const Today = () => {
  const [resultApCurr, setResultApCurr] = useState(null);
  const { query } = useContext(queryParams);
  const { theme } = useContext(themeContext);

  useEffect(() => {
    if (query === '') {
      return;
    }
    weatherByCurr(query, 1).then(res => {
      console.log(res);
      setResultApCurr(res);
    });
  }, [query]);

  function convertTimeTo24HourFormat(time) {
    const [hour, minute, meridian] = time.split(/:|\s/);
    let hourNum = parseInt(hour);
    if (meridian === 'PM' && hourNum !== 12) {
      hourNum += 12;
    }
    if (meridian === 'AM' && hourNum === 12) {
      hourNum = 0;
    }
    const formattedHour = hourNum.toString().padStart(2, '0');
    const formattedMinute = minute.padStart(2, '0');
    return `${formattedHour}:${formattedMinute}`;
  }

  if (!resultApCurr) {
    return;
  }

  return (
    <>
      {query && (
        <ContainerToday theme={theme}>
          <h1 >Погода {resultApCurr.location.name} сьогодні</h1>
          <SunSet
            sun={convertTimeTo24HourFormat(
              resultApCurr.forecast.forecastday[0].astro.sunrise
            )}
            set={convertTimeTo24HourFormat(
              resultApCurr.forecast.forecastday[0].astro.sunset
            )}
          >
            <MainWeather object={resultApCurr.forecast.forecastday[0]} />
          </SunSet>
          <HourWeather object={resultApCurr.forecast.forecastday[0]} />
        </ContainerToday>
      )}
    </>
  );
};

export default Today;


// {
  /* <TomorTable>
            <table>
              <thead>
                <tr>
                  <th rowSpan="2"></th>
                </tr>
                <tr>
                  {resultApCurr.forecast.forecastday[0].hour.map(
                    (el, index) => {
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
                    }
                  )}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Влажность</td>
                  {resultApCurr.forecast.forecastday[0].hour.map(
                    (el, index) => {
                      if (index % 2 !== 0) {
                        return (
                          <td key={el.time_epoch} day={el.is_day}>
                            {el.humidity} %
                          </td>
                        );
                      }
                      return null;
                    }
                  )}
                </tr>
                <tr>
                  <td>Температура</td>
                  {resultApCurr.forecast.forecastday[0].hour.map(
                    (el, index) => {
                      if (index % 2 !== 0) {
                        return (
                          <td key={el.time_epoch} day={el.is_day}>
                            {Math.round(el.temp_c)} C
                          </td>
                        );
                      }
                      return null;
                    }
                  )}
                </tr>
                <tr>
                  <td>Видимость</td>
                  {resultApCurr.forecast.forecastday[0].hour.map(
                    (el, index) => {
                      if (index % 2 !== 0) {
                        return (
                          <td key={el.time_epoch} day={el.is_day}>
                            {el.vis_km} км
                          </td>
                        );
                      }
                      return null;
                    }
                  )}
                </tr>
                <tr>
                  <td>Вероятность осадков</td>
                  {resultApCurr.forecast.forecastday[0].hour.map(
                    (el, index) => {
                      if (index % 2 !== 0) {
                        return (
                          <td key={el.time_epoch} day={el.is_day}>
                            {el.chance_of_rain} %
                          </td>
                        );
                      }
                      return null;
                    }
                  )}
                </tr>
                <tr>
                  <td>Скорость ветра</td>
                  {resultApCurr.forecast.forecastday[0].hour.map(
                    (el, index) => {
                      if (index % 2 !== 0) {
                        return (
                          <td key={el.time_epoch} day={el.is_day}>
                            {el.wind_kph} км/ч
                          </td>
                        );
                      }
                      return null;
                    }
                  )}
                </tr>
              </tbody>
            </table>
          </TomorTable> */
// }