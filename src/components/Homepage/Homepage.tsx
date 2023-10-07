import s from './Homepage.module.scss';
import millify from 'millify';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getCryptos } from '../../redux/slices/coinsSlice';

const Homepage = () => {
  const stats = useAppSelector((state) => state.coins.stats);
  const coins = useAppSelector((state) => state.coins.coins);
  const isFetching = useAppSelector((state) => state.coins.isFetching);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCryptos());

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.homepage}>
      <h1 className={s.homepage__title}>Global Crypto Stats</h1>
      {stats && coins ? (
        <div className={s.homepage__stats}>
          <div className={s.homepage__statItem}>
            <h5 className={s.homepage__statTitle}>Total Cryptocurrencies</h5>
            <p className={s.homepage__statValue}>{stats.total}</p>
          </div>
          <div className={s.homepage__statItem}>
            <h5 className={s.homepage__statTitle}>Total Exchanges</h5>
            <p className={s.homepage__statValue}>
              {millify(stats.totalExchanges)}
            </p>
          </div>
          <div className={s.homepage__statItem}>
            <h5 className={s.homepage__statTitle}>Total Market Cap</h5>
            <p className={s.homepage__statValue}>
              {millify(+stats.totalMarketCap)}
            </p>
          </div>
          <div className={s.homepage__statItem}>
            <h5 className={s.homepage__statTitle}>Total 24h Volume</h5>
            <p className={s.homepage__statValue}>
              {millify(+stats.total24hVolume)}
            </p>
          </div>
          <div className={s.homepage__statItem}>
            <h5 className={s.homepage__statTitle}>Total Markets</h5>
            <p className={s.homepage__statValue}>
              {millify(stats.totalMarkets)}
            </p>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Homepage;
