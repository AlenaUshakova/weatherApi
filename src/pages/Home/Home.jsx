import {
  HomeContainer,
  Link,
  LinkContainer,
  HomeInfoCont,
} from './Home.styled';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { queryParams } from 'context/QueryParams';
import { themeContext } from 'context/ThemeContext';

const Home = () => {
  const { query, setQuery } = useContext(queryParams);
  const { theme } = useContext(themeContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setQuery(`${position.coords.latitude},${position.coords.longitude}`);
        },
        function (error) {
          if (error.code === 1) {
            toast.warning(
              'Чтобы включить геолокацию, пожалуйста, перейдите в настройки своего браузера и разрешите использование геолокации для этого сайта.'
            );
          } else if (error.code === 2) {
            toast.warning(
              'Извините, геолокация недоступна на вашем устройстве.'
            );
          } else if (error.code === 3) {
            toast.warning(
              'Извините, запрос на геолокацию истек. Пожалуйста, попробуйте еще раз.'
            );
          }
        }
      );
    } 
    // eslint-disable-next-line
  }, []);

  return (
    <HomeContainer>
      <Searchbar />
      {query ? (
        <LinkContainer>
          <Link to="/">сьогодні</Link>
          <Link to="tomorrow">завтра</Link>
          <Link to="3days">3 дні</Link>
          <Link to="10days">10 днів</Link>
          <Link to="2weeks">2 тижня</Link>
        </LinkContainer>
      ) : (
        <HomeInfoCont theme={theme}>
          <p>
            Щоб увімкнути геолокацію, будь ласка, перейдіть в налаштування свого
            браузера і дозвольте використання геолокації для цього сайту за
            інструкцією:
          </p>
          <p style={{ textDecoration: 'underline' }}>Chrome</p>
          <ol>
            <li>На комп'ютері відкрийте Chrome</li>
            <li>
              У верхньому правому куті вікна натисніть на значок з трьома
              крапками → "Налаштування"
            </li>
            <li>
              Оберіть "Конфіденційність та безпека" → "Налаштування сайтів".
            </li>
            <li>Натисніть "Геодані".</li>
            <li>Оберіть параметр, який буде функціонувати за замовчуванням.</li>
          </ol>
          <p style={{ textDecoration: 'underline' }}>Mozilla Firefox</p>
          <ol>
            <li>На комп'ютері відкрийте Mozilla Firefox</li>
            <li>
              Якщо меню браузера не відображається, натисніть клавішу "Alt".
            </li>
            <li>Оберіть пункт "Інструменти" → "Інформація про сторінку"</li>
            <li>
              На вкладці "Дозволи" оберіть налаштування параметра "Знати ваше
              місцезнаходження".
            </li>
          </ol>

          <b>Або введіть місто, що цікавить, в стоку пошуку</b>
        </HomeInfoCont>
      )}
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
