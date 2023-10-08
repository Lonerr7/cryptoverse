import { useEffect } from 'react';
import s from './Cryptocurrencies.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeSearchText, getCryptos } from '../../redux/slices/coinsSlice';
import CoinCard from './CoinCard/CoinCard';
import {
  selectCryptoSearchText,
  selectCryptosBySearch,
} from '../../redux/selectors/selectCryprosBySearch';
import Search from '../common/Search/Search';

interface Props {
  simplified?: boolean;
}

const Cryptocurrencies: React.FC<Props> = ({ simplified }) => {
  const coins = useAppSelector(selectCryptosBySearch);
  const searchText = useAppSelector(selectCryptoSearchText);
  const dispatch = useAppDispatch();
  const cardsCount = simplified ? 10 : 100;

  const coinElements = coins?.map((coin, i) => (
    <CoinCard
      key={coin.uuid}
      change={coin.change}
      coinId={coin.uuid}
      coinIndexNumber={i}
      iconUrl={coin.iconUrl}
      marketCap={coin.marketCap}
      name={coin.name}
      price={coin.price}
    />
  ));

  useEffect(() => {
    dispatch(getCryptos(cardsCount));

    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={s.cryptocurrencies}
      style={
        simplified
          ? {
              padding: 0,
            }
          : {}
      }
    >
      {!simplified ? (
        <Search
          customInputClassName={s.cryptocurrencies__searchInput}
          searchText={searchText}
          actionCreator={changeSearchText}
          placeholder='Search a specific coin...'
        />
      ) : null}
      <div className={s.cryptocurrencies__list}>{coinElements}</div>
    </div>
  );
};

export default Cryptocurrencies;
