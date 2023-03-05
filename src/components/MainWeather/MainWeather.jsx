import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { MainIinfo, MainIinfoTab, TomorImg } from './MainWeather.styled';

export const MainWeather = ({ object}) => {
  const formattedDateStr = format(new Date(object.date), 'EEEE d MMMM', {
    locale: uk,
  });
  const pressureMb = object.hour.reduce(
    (acc, el) => acc + el.pressure_mb / 24,
    0
  );
  const fillLike = object.hour.reduce(
    (acc, el) => acc + el.feelslike_c / 24,
    0
  );
  const clouds = object.hour.reduce((acc, el) => acc + el.cloud / 24, 0);
  const windSpeed = object.hour.reduce((acc, el) => acc + el.wind_kph / 24, 0);

  return (
    <MainIinfo>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {' '}
        <h2> {formattedDateStr}</h2>
        <div>
          <TomorImg
            src={object.day.condition.icon}
            alt={object.day.condition.text}
            width={120}
          />
        </div>
      </div>

      <MainIinfoTab>
        <table>
          <tbody>
            <tr>
              <td>Температура °С</td>
              <td>{Math.round(object.day.avgtemp_c)}</td>
            </tr>
            <tr>
              <td>Відчувається як °С</td>
              <td>{Math.round(fillLike)}</td>
            </tr>
            <tr>
              <td>Хмарність %</td>
              <td>{Math.round(clouds)}</td>
            </tr>
            <tr>
              <td>Вологість %</td>
              <td>{object.day.avghumidity}</td>
            </tr>
            <tr>
              <td>Тиск мм рт. ст.</td>
              <td>{(pressureMb * 0.75006).toFixed(0)} </td>
            </tr>
            <tr>
              <td> Макс °С</td>
              <td>{Math.round(object.day.maxtemp_c)}</td>
            </tr>
            <tr>
              <td> Мін °С</td>
              <td>{Math.round(object.day.mintemp_c)}</td>
            </tr>
            <tr>
              <td> Індекс УФ</td>
              <td>{object.day.uv}</td>
            </tr>
            <tr>
              <td> Швидкість вітру км/г</td>
              <td>{Math.round(windSpeed)} </td>
            </tr>
          </tbody>
        </table>
      </MainIinfoTab>
    </MainIinfo>
  );
};
