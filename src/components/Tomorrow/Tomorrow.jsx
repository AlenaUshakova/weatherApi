import { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { queryParams } from 'context/QueryParams';
import { weatherByCurr } from 'services/api-weather';
import {
  ContainerTomor,
  
} from './Tomorrow.styled';
import { SunSet } from 'components/SunSet/SunSet';
import { HourWeather } from 'components/HourWeather/HourWeather';
import { MainWeather } from 'components/MainWeather/MainWeather';
import { themeContext } from 'context/ThemeContext';

 const Tomorrow = () => {
  const [resultApCurr, setResultApCurr] = useState(null);
  const { query } = useContext(queryParams);
   const { theme } = useContext(themeContext);
   
  useEffect(() => {
    if (query === '') {
      return;
    }
    weatherByCurr(query, 2).then(res => {
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
        <ContainerTomor theme={theme}>
          <h1>Погода {resultApCurr.location.name} на завтра</h1>
          <SunSet
            sun={convertTimeTo24HourFormat(
              resultApCurr.forecast.forecastday[1].astro.sunrise
            )}
            set={convertTimeTo24HourFormat(
              resultApCurr.forecast.forecastday[1].astro.sunset
            )}
          >
            <MainWeather object={resultApCurr.forecast.forecastday[1]} />
          </SunSet>
          <HourWeather object={resultApCurr.forecast.forecastday[1]} />
        </ContainerTomor>
      )}
    </>
  );
};

export default Tomorrow;

// {
  /* <TomorIinfo>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h2> {formattedDateStr}</h2>
              <div>
                <TomorImg
                  src={resultApCurr.forecast.forecastday[1].day.condition.icon}
                  alt={resultApCurr.forecast.forecastday[1].day.condition.text}
                  width={120}
                />
              </div>
            </div>

            <TomorTableInfo>
              <table>
                <tbody>
                  <tr>
                    <td>Температура</td>
                    <td>
                      {
                        Math.round(resultApCurr.forecast.forecastday[1].day
                          .avgtemp_c)
                      }{' '}
                      C
                    </td>
                  </tr>
                  <tr>
                    <td>Ощущается как</td>
                    <td>{Math.round(fillLike)} C</td>
                  </tr>
                  <tr>
                    <td>Облачность</td>
                    <td>{Math.round(clouds)} %</td>
                  </tr>
                  <tr>
                    <td>Влажность</td>
                    <td>
                      {resultApCurr.forecast.forecastday[1].day.avghumidity} %
                    </td>
                  </tr>
                  <tr>
                    <td>Давление</td>
                    <td>{(pressureMb * 0.75006).toFixed(0)} мм рт. ст.</td>
                  </tr>
                  <tr>
                    <td> Макс t</td>
                    <td>
                      {resultApCurr.forecast.forecastday[1].day.maxtemp_c} C
                    </td>
                  </tr>
                  <tr>
                    <td> Мин t</td>
                    <td>
                      {resultApCurr.forecast.forecastday[1].day.mintemp_c} C
                    </td>
                  </tr>
                  <tr>
                    <td> Индекс УФ</td>
                    <td>{resultApCurr.forecast.forecastday[1].day.uv}</td>
                  </tr>
                  <tr>
                    <td> Скорость ветра</td>
                    <td>{Math.round(windSpeed)} км/ч</td>
                  </tr>
                  <tr>
                    <td> Восход </td>
                    <td>
                      {convertTimeTo24HourFormat(
                        resultApCurr.forecast.forecastday[1].astro.sunrise
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td> Закат </td>
                    <td>
                      {convertTimeTo24HourFormat(
                        resultApCurr.forecast.forecastday[1].astro.sunset
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </TomorTableInfo>
          </TomorIinfo>
          <TomorTable>
            {' '}
            <table>
              <thead>
                <tr>
                  <th rowSpan="2"></th>
                </tr>
                <tr>
                  {resultApCurr.forecast.forecastday[1].hour.map(
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
                  {resultApCurr.forecast.forecastday[1].hour.map(
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
                  {resultApCurr.forecast.forecastday[1].hour.map(
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
                  {resultApCurr.forecast.forecastday[1].hour.map(
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
                  {resultApCurr.forecast.forecastday[1].hour.map(
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
                  {resultApCurr.forecast.forecastday[1].hour.map(
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