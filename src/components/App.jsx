import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

const Home = lazy(() => import('pages/Home/Home'));
const Today = lazy(() => import('./Today/Today'));
const TenDays = lazy(() => import('./TenDays/TenDays'));
const TwoWeeks = lazy(() => import('./TwoWeeks/TwoWeeks'));
const Tomorrow = lazy(() => import('./Tomorrow/Tomorrow'));
const ThreeDays = lazy(() => import('./ThreeDays/ThreeDays'));

export const App = () => {
  return (
    <ThemeContext>
      <LanguageContext>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />}>
              <Route index element={<Today />} />
              <Route path="tomorrow" element={<Tomorrow />} />
              <Route path="3days" element={<ThreeDays />} />
              <Route path="10days" element={<TenDays />} />
              <Route path="2weeks" element={<TwoWeeks />} />
            </Route>
          </Route>
        </Routes>
      </LanguageContext>
    </ThemeContext>
  );
};
