import { HomeContainer, Link, LinkContainer } from './Home.styled';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { format } from 'date-fns';
import { queryParams } from 'context/QueryParams';

const Home = () => {
  const { query, setQuery } = useContext(queryParams);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      position =>
        setQuery(`${position.coords.latitude},${position.coords.longitude}`),

      error => console.error(error)
    );
    // eslint-disable-next-line
  }, []);

  return (
    <HomeContainer>
      <Searchbar />
      {query && (
        <LinkContainer>
          <Link to="/">today</Link>
          <Link to="tomorrow">tomorrow</Link>
          <Link to="3days">3days</Link>
          <Link to="10days">10days</Link>
          <Link to="2weeks">2weeks</Link>
        </LinkContainer>
      )}
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
