import PlaceCard from '../offer-card/offer-card';
import { OfferCards } from '../../types/offers';

type OffersListProps = {
  offers: OfferCards;
}

function OffersList (props: OffersListProps): JSX.Element {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id}/>)}
    </div>
  );
}

export default OffersList;
