import { Outlet } from 'react-router-dom';
import { Container, Header, LinkText } from './SharedLayout.styled';
import { useContext, Suspense } from 'react';
import { themeContext } from 'context/ThemeContext';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryParamsContext } from '../../context/QueryParams';
import CustomizedSwitches from '../Theme/ThemeBtn';
import Select from 'react-select';
import { languageContext } from 'context/LanguageContext';

export const SharedLayout = () => {
  const { theme, setTheme } = useContext(themeContext);
  const { selectedOption, setSelectedOption, options } =
    useContext(languageContext);
  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <LinkText theme={theme} to="/">
          Weather App
        </LinkText>
        <CustomizedSwitches theme={theme} setTheme={setTheme} />
        <Select
          className="dod"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </Header>
      <Suspense fallback={<Loader />}>
        <QueryParamsContext>
          <Outlet />
        </QueryParamsContext>
      </Suspense>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </Container>
  );
};
