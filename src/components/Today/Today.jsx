import { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { queryParams } from 'context/QueryParams';
import { weatherByCurr } from 'services/api-weather';
import {
  ContainerToday,
  TomorIinfo,
  TomorTable,
  TomorTableInfo,
} from './Today.styled';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

 const Today = () => {
  const [resultApCurr, setResultApCurr] = useState(null);
  const { query } = useContext(queryParams);

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
    // Разделяем строку на отдельные части: часы, минуты и меридиан
    const [hour, minute, meridian] = time.split(/:|\s/);

    // Преобразуем часы в числовое значение
    let hourNum = parseInt(hour);

    // Если меридиан - PM и часы не равны 12, добавляем 12 к часам
    if (meridian === 'PM' && hourNum !== 12) {
      hourNum += 12;
    }

    // Если меридиан - AM и часы равны 12, устанавливаем часы в 0
    if (meridian === 'AM' && hourNum === 12) {
      hourNum = 0;
    }

    // Форматируем часы и минуты в двухзначный формат
    const formattedHour = hourNum.toString().padStart(2, '0');
    const formattedMinute = minute.padStart(2, '0');

    // Возвращаем строку времени в 24-часовом формате
    return `${formattedHour}:${formattedMinute}`;
  }
  if (!resultApCurr) {
    return;
  }
  const formattedDateStr = format(
    new Date(resultApCurr.forecast.forecastday[0].date),
    'EEEE d MMMM',
    { locale: ru }
  );
  return (
    <>
      {query && (
        <ContainerToday>
          <h1>Погода {resultApCurr.location.name} сегодня</h1>
          <TomorIinfo>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {' '}
              <h2> {formattedDateStr}</h2>
              <div>
                <img
                  src={resultApCurr.current.condition.icon}
                  alt={resultApCurr.current.condition.text}
                  width={120}
                />
              </div>
            </div>

            <TomorTableInfo>
              <table>
                <tbody>
                  <tr>
                    <td>Температура</td>
                    <td>{resultApCurr.current.temp_c} C</td>
                  </tr>
                  <tr>
                    <td>Ощущается как</td>
                    <td>{resultApCurr.current.feelslike_c} C</td>
                  </tr>
                  <tr>
                    <td>Облачность</td>
                    <td>{resultApCurr.current.cloud}%</td>
                  </tr>
                  <tr>
                    <td>Влажность</td>
                    <td>{resultApCurr.current.humidity}%</td>
                  </tr>
                  <tr>
                    <td>Давление</td>
                    <td>
                      {(resultApCurr.current.pressure_mb * 0.75006).toFixed(0)}{' '}
                      мм рт. ст.
                    </td>
                  </tr>
                  <tr>
                    <td> Макс t</td>
                    <td>
                      {resultApCurr.forecast.forecastday[0].day.maxtemp_c} C
                    </td>
                  </tr>
                  <tr>
                    <td> Мин t</td>
                    <td>
                      {resultApCurr.forecast.forecastday[0].day.mintemp_c} C
                    </td>
                  </tr>
                  <tr>
                    <td> Индекс УФ</td>
                    <td>{resultApCurr.forecast.forecastday[0].day.uv}</td>
                  </tr>
                  <tr>
                    <td> Скорость ветра</td>
                    <td>{resultApCurr.current.wind_kph} км/ч</td>
                  </tr>
                  <tr>
                    <td> Восход </td>
                    <td>
                      {convertTimeTo24HourFormat(
                        resultApCurr.forecast.forecastday[0].astro.sunrise
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td> Закат </td>
                    <td>
                      {convertTimeTo24HourFormat(
                        resultApCurr.forecast.forecastday[0].astro.sunset
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
          </TomorTable>
        </ContainerToday>
      )}
    </>
  );
};


export default Today;