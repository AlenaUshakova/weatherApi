import { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { queryParams } from 'context/QueryParams';
import { weatherByCurr } from 'services/api-weather';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import {
  ContainerTomor,
  ContainerThree,
  TomorIinfo,
  TomorTableInfo,
  TomorTable,
  TomorImg,
} from './ThreeDays.styled';

const ThreeDays = () => {
  const [resultApCurr, setResultApCurr] = useState(null);
  const { query } = useContext(queryParams);
  const [cardClick, setCardClick] = useState(false);
  const [obj, setObj] = useState({});
  console.log(obj);

  useEffect(() => {
    if (query === '') {
      return;
    }
    weatherByCurr(query, 3).then(res => {
      setResultApCurr(res);
    });
  }, [query]);

  const handleClick = date => {
    setCardClick(true);
    const www = resultApCurr.forecast.forecastday.find(
      option => option.date === date
    );
    setObj(www);
  };

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

  // const formattedDateStr = format(
  //   new Date(resultApCurr.forecast.forecastday[1].date),
  //   'EEEE d MMMM',
  //   { locale: ru }
  // );

  const pressureMb = obj?.hour?.reduce(
    (acc, el) => acc + el.pressure_mb / 24,
    0
  );
  const fillLike = obj?.hour?.reduce((acc, el) => acc + el.feelslike_c / 24, 0);
  const clouds = obj?.hour?.reduce((acc, el) => acc + el.cloud / 24, 0);
  const windSpeed = obj?.hour?.reduce((acc, el) => acc + el.wind_kph / 24, 0);

  return (
    <>
      {query && (
        <ContainerTomor>
          <h1>Погода {resultApCurr.location.name} на 3 дня </h1>
          <ul>
            {resultApCurr.forecast.forecastday.map(el => (
              <li key={el.date_epoch} onClick={() => handleClick(el.date)}>
                <p>
                  {format(new Date(el.date), 'EEEE d MMMM', { locale: ru })}
                </p>
                <img
                  src={el.day.condition.icon}
                  alt={el.day.condition.text}
                  width={50}
                />

                <p>Макс С: {el.day.maxtemp_c} </p>
                <p>Мин С: {el.day.mintemp_c} </p>
              </li>
            ))}
          </ul>
          {cardClick && (
            <ContainerThree>
              <TomorIinfo>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <h2>
                    {' '}
                    {format(new Date(obj.date), 'EEEE d MMMM', { locale: ru })}
                  </h2>
                  <div>
                    <TomorImg
                      src={obj.day.condition.icon}
                      alt={obj.day.condition.text}
                      width={120}
                    />
                  </div>
                </div>

                <TomorTableInfo>
                  <table>
                    <tbody>
                      <tr>
                        <td>Температура</td>
                        <td>{Math.round(obj.day.avgtemp_c)} C</td>
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
                        <td>{obj.day.avghumidity} %</td>
                      </tr>
                      <tr>
                        <td>Давление</td>
                        <td>{(pressureMb * 0.75006).toFixed(0)} мм рт. ст.</td>
                      </tr>
                      <tr>
                        <td> Индекс УФ</td>
                        <td>{obj.day.uv}</td>
                      </tr>
                      <tr>
                        <td> Скорость ветра</td>
                        <td>{Math.round(windSpeed)} км/ч</td>
                      </tr>
                      <tr>
                        <td> Восход </td>
                        <td>{convertTimeTo24HourFormat(obj.astro.sunrise)}</td>
                      </tr>
                      <tr>
                        <td> Закат </td>
                        <td>{convertTimeTo24HourFormat(obj.astro.sunset)}</td>
                      </tr>
                    </tbody>
                  </table>
                </TomorTableInfo>
              </TomorIinfo>
              <TomorTable>
                <table>
                  <thead>
                    <tr>
                      <th rowSpan="2"></th>
                    </tr>
                    <tr>
                      {obj.hour.map((el, index) => {
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
                      <td>Влажность</td>
                      {obj.hour.map((el, index) => {
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
                      <td>Температура</td>
                      {obj.hour.map((el, index) => {
                        if (index % 2 !== 0) {
                          return (
                            <td key={el.time_epoch} day={el.is_day}>
                              {Math.round(el.temp_c)} C
                            </td>
                          );
                        }
                        return null;
                      })}
                    </tr>
                    <tr>
                      <td>Видимость</td>
                      {obj.hour.map((el, index) => {
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
                      <td>Вероятность осадков</td>
                      {obj.hour.map((el, index) => {
                        if (index % 2 !== 0) {
                          return (
                            <td key={el.time_epoch} day={el.is_day}>
                              {el.chance_of_rain} %
                            </td>
                          );
                        }
                        return null;
                      })}
                    </tr>
                    <tr>
                      <td>Скорость ветра</td>
                      {obj.hour.map((el, index) => {
                        if (index % 2 !== 0) {
                          return (
                            <td key={el.time_epoch} day={el.is_day}>
                              {el.wind_kph} км/ч
                            </td>
                          );
                        }
                        return null;
                      })}
                    </tr>
                  </tbody>
                </table>
              </TomorTable>
            </ContainerThree>
          )}
        </ContainerTomor>
      )}
    </>
  );
};

export default ThreeDays;
