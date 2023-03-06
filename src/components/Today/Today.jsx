import { useContext, useEffect, useState } from 'react';
import { queryParams } from 'context/QueryParams';
import { weatherByCurr } from 'services/api-weather';
import { ContainerToday } from './Today.styled';
import { SunSet } from 'components/SunSet/SunSet';
import { HourWeather } from 'components/HourWeather/HourWeather';
import { MainWeather } from 'components/MainWeather/MainWeather';
import { themeContext } from 'context/ThemeContext';
import { languageContext } from '../../context/LanguageContext';

const Today = () => {
  const [resultApCurr, setResultApCurr] = useState(null);
  const { query } = useContext(queryParams);
  const { theme } = useContext(themeContext);
    const { value } = useContext(languageContext);

  useEffect(() => {
    if (query === '') {
      return;
    }
    weatherByCurr(query, 1).then(res => {
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
          <h1>
            {value === 'en'
              ? `Weather ${resultApCurr.location.name} today`
              : `Погода ${resultApCurr.location.name} сьогодні`}
          </h1>
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
