import { Link } from 'react-router-dom';
import { OfferCard } from '../../types/offers';

type PlaceCardProps = {
  offer: OfferCard;
  onUserCard?: (id: number | null) => void;
}

function PlaceCard (props: PlaceCardProps): JSX.Element {
  const {offer, onUserCard} = props;
  const {
    id,
    isPremium,
    previewImage,
    price,
    title,
    type,
  } = offer;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => onUserCard ? onUserCard(id) : undefined}
      onMouseLeave={() => onUserCard ? onUserCard(null) : undefined}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/">
          <img
            className="place-card__image"
            src={ previewImage }
            width={260}
            height={200}
            alt="Appartment"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">{ isPremium }</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
