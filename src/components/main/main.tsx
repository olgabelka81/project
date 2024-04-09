import { OfferCards } from '../../types/offers';
import OffersList from '../offers-list/offers-list';
import Header from '../main-header/main-header';
import LocationList from '../location-list/location-list';
import PlacesSorting from '../places-sorting/places-sorting';

type MainPlaceCardProps = {
  offersCount: number;
  offers: OfferCards;
}

function Main({ offersCount, offers }: MainPlaceCardProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <PlacesSorting/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
