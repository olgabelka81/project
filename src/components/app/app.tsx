import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../main/main';
import { AppRoute, AuthorizationStatus } from '../const/const';
import LogIn from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

type AppPlaceCardProps = {
  offersCount: number;
}

function App({ offersCount }: AppPlaceCardProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offersCount={offersCount} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LogIn />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
