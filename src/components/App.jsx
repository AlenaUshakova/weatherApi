import { QueryParamsContext } from 'context/QueryParams';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { ThemeContext } from '../context/ThemeContext';

const Home = lazy(() => import('pages/Home/Home'));
const Settings = lazy(() => import('pages/Settings/Settings'));
const Today = lazy(() => import('./Today/Today'));
const TenDays = lazy(() => import('./TenDays/TenDays'));
const TwoWeeks = lazy(() => import('./TwoWeeks/TwoWeeks'));
const Tomorrow = lazy(() => import('./Tomorrow/Tomorrow'));
const ThreeDays = lazy(() => import('./ThreeDays/ThreeDays'));

export const App = () => {
  return (
    <ThemeContext>
      <QueryParamsContext>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />}>
              <Route index element={<Today />} />
              <Route path="tomorrow" element={<Tomorrow />} />
              <Route path="3days" element={<ThreeDays />} />
              <Route path="10days" element={<TenDays />} />
              <Route path="2weeks" element={<TwoWeeks/>} />
            </Route>
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </QueryParamsContext>
    </ThemeContext>
  );
};
