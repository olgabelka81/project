import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../main/main';
import { AppRoute, AuthorizationStatus } from '../const/const';
import LogIn from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { OfferCards } from '../../types/offers';

type AppPlaceCardProps = {
  offersCount: number;
  offers: OfferCards;
}

function App({ offersCount, offers }: AppPlaceCardProps): JSX.Element {
  //const {offers} = offers;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offersCount={offersCount} offers={offers} />}
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
