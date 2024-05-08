import { useState } from 'react';
import PlaceCard from '../offer-card/offer-card';
import { OfferCards } from '../../types/offers';

type OffersListProps = {
  offers: OfferCards;
}

function OffersList (props: OffersListProps): JSX.Element {
  const {offers} = props;

  const [, setUserCards] = useState<number | null> (null);
  const handleUserCard = (id: number | null) => { setUserCards(id);};

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) =>
        <PlaceCard offer={offer} key={offer.id} onUserCard = {handleUserCard}/>)}
    </div>
  );
}

export default OffersList;
