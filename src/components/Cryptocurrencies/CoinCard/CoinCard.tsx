import { Link } from 'react-router-dom';
import s from './CoinCard.module.scss';
import millify from 'millify';

interface Props {
  coinIndexNumber: number;
  name: string;
  iconUrl: string;
  price: string;
  marketCap: string;
  change: string;
  coinId: string;
}

const CoinCard: React.FC<Props> = ({
  coinIndexNumber,
  name,
  iconUrl,
  price,
  marketCap,
  change,
  coinId,
}) => {
  return (
    <Link to={`/crypto/${coinId}`} className={s.card}>
      <div className={s.card__top}>
        <h6 className={s.card__title}>
          {coinIndexNumber + 1}. {name}
        </h6>
        <img className={s.card__logo} src={iconUrl} alt="coin logo" />
      </div>

      <div className={s.card__infoBox}>
        <p className={s.card__info}>Price: {millify(+price)}</p>
        <p className={s.card__info}>Market Cap: {millify(+marketCap)}</p>
        <p className={s.card__info}>Daily Change: {change}%</p>
      </div>
    </Link>
  );
};

export default CoinCard;
