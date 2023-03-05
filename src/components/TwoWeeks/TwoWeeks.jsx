import { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { queryParams } from 'context/QueryParams';
import { weatherByCurr } from 'services/api-weather';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { ContainerWeekMain, ContainerWeek } from './TwoWeeks.styled';
import { SunSet } from 'components/SunSet/SunSet';
import { MainWeather } from 'components/MainWeather/MainWeather';
import { HourWeather } from 'components/HourWeather/HourWeather';
import { themeContext } from 'context/ThemeContext';

const TwoWeeks = () => {
  const [resultApCurr, setResultApCurr] = useState(null);
  const { query } = useContext(queryParams);
  const [cardClick, setCardClick] = useState(false);
  const [obj, setObj] = useState({});
  const { theme } = useContext(themeContext);
  console.log(obj);

  useEffect(() => {
    if (query === '') {
      return;
    }
    weatherByCurr(query, 14).then(res => {
      console.log(res);
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

  return (
    <>
      {query && (
        <ContainerWeekMain theme={theme}>
          <h1>Погода {resultApCurr.location.name} на 2 тижні </h1>
          <ul>
            {resultApCurr.forecast.forecastday.map(el => (
              <li key={el.date_epoch} onClick={() => handleClick(el.date)}>
                <p>
                  {format(new Date(el.date), 'EEEE d MMMM', { locale: uk })}
                </p>
                <img src={el.day.condition.icon} alt={el.day.condition.text} />
                <p>Макс °С: {Math.round(el.day.maxtemp_c)} </p>
                <p>Мін °С: {Math.round(el.day.mintemp_c)} </p>
              </li>
            ))}
          </ul>
          {cardClick && (
            <ContainerWeek>
              <SunSet
                sun={convertTimeTo24HourFormat(obj.astro.sunrise)}
                set={convertTimeTo24HourFormat(obj.astro.sunrise)}
              >
                <MainWeather object={obj} />
              </SunSet>
              <HourWeather object={obj} />
            </ContainerWeek>
          )}
        </ContainerWeekMain>
      )}
    </>
  );
};

export default TwoWeeks;
