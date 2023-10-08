import { useEffect } from 'react';
import s from './Cryptocurrencies.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getCryptos } from '../../redux/slices/coinsSlice';
import CoinCard from './CoinCard/CoinCard';

const Cryptocurrencies: React.FC = () => {
  const coins = useAppSelector((state) => state.coins.coins);
  const dispatch = useAppDispatch();

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
    dispatch(getCryptos());

    // eslint-disable-next-line
  }, []);

  return <div className={s.cryptocurrencies}>{coinElements}</div>;
};

export default Cryptocurrencies;
