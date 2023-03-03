import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { useContext, Suspense } from 'react';
import { themeContext } from 'context/ThemeContext';
import { HistoryContext } from 'context/HistoryContext';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  const { value } = useContext(themeContext);
  return (
    <Container value={value}>
      <Header value={value}>
        <p>Weather App</p>
        <nav>
          <Link value={value} to="/">
            HOME
          </Link>
          <Link value={value} to="settings">
            Settings
          </Link>
        </nav>
      </Header>
      <HistoryContext>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="colored"
        />
      </HistoryContext>
    </Container>
  );
};
