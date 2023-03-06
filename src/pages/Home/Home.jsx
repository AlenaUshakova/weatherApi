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
import { languageContext } from '../../context/LanguageContext';

const Home = () => {
  const { query, setQuery } = useContext(queryParams);
  const { theme } = useContext(themeContext);
  const { value } = useContext(languageContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setQuery(`${position.coords.latitude},${position.coords.longitude}`);
        },
        function (error) {
          if (error.code === 1) {
            toast.warning(
              value === 'en'
                ? 'To enable geolocation, please go to your browser settings and enable geolocation for this site.'
                : 'Чтобы включить геолокацию, пожалуйста, перейдите в настройки своего браузера и разрешите использование геолокации для этого сайта.'
            );
          } else if (error.code === 2) {
            toast.warning(
              value === 'en'
                ? 'Sorry, geolocation is not available on your device.'
                : 'Извините, геолокация недоступна на вашем устройстве.'
            );
          } else if (error.code === 3) {
            toast.warning(
              value === 'en'
                ? 'Sorry, the geolocation request has expired. Please try again.'
                : 'Извините, запрос на геолокацию истек. Пожалуйста, попробуйте еще раз.'
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
          <Link to="/">{value === 'en' ? 'today' : 'сьогодні'}</Link>
          <Link to="tomorrow">{value === 'en' ? 'tomorrow' : 'завтра'}</Link>
          <Link to="3days">{value === 'en' ? '3 days' : '3 дні'}</Link>
          <Link to="10days">{value === 'en' ? '10 days' : '10 днів'}</Link>
          <Link to="2weeks">{value === 'en' ? '2 weeks' : '2 тижня'}</Link>
        </LinkContainer>
      ) : (
        <HomeInfoCont theme={theme}>
          {value === 'en' ? (
            <>
              <p>
                To increase the geolocation, be kind, go to nalashtuvannya of
                your browser and allow any geolocation for which website for
                instructions:
              </p>
              <p style={{ textDecoration: 'underline' }}>Chrome</p>
              <ol>
                <li>On your computer, open Chrome</li>
                <li>
                  At the top right corner of the window, press on the icon with
                  three dots → "Settings"
                </li>
                <li>Choose "Privacy and security" → "Site settings".</li>
                <li>Click "Geodata".</li>
                <li>Choose the option that will function by default.</li>
              </ol>
              <p style={{ textDecoration: 'underline' }}>Mozilla Firefox</p>
              <ol>
                <li>Open on your computer Mozilla Firefox</li>
                <li>If the browser menu is not displayed, press the "Alt".</li>
                <li>Select "Tools" → "Page Information"</li>
                <li>
                  On the "Permissions" tab, select the "Know your location".
                </li>
              </ol>

              <b>Or enter the city of interest in the search flow</b>
            </>
          ) : (
            <>
              <p>
                Щоб увімкнути геолокацію, будь ласка, перейдіть в налаштування
                свого браузера і дозвольте використання геолокації для цього
                сайту за інструкцією:
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
                <li>
                  Оберіть параметр, який буде функціонувати за замовчуванням.
                </li>
              </ol>
              <p style={{ textDecoration: 'underline' }}>Mozilla Firefox</p>
              <ol>
                <li>На комп'ютері відкрийте Mozilla Firefox</li>
                <li>
                  Якщо меню браузера не відображається, натисніть клавішу "Alt".
                </li>
                <li>Оберіть пункт "Інструменти" → "Інформація про сторінку"</li>
                <li>
                  На вкладці "Дозволи" оберіть налаштування параметра "Знати
                  ваше місцезнаходження".
                </li>
              </ol>

              <b>Або введіть місто, що цікавить, в стоку пошуку</b>
            </>
          )}
        </HomeInfoCont>
      )}
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
