import s from './Homepage.module.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getCryptos } from '../../redux/slices/coinsSlice';
import Preloader from '../common/Preloader/Preloader';
import CryptoStats from './CryptoStats/CryptoStats';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import News from '../News/News';

const Homepage: React.FC = () => {
  const stats = useAppSelector((state) => state.coins.stats);
  const isFetching = useAppSelector((state) => state.coins.isFetching);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCryptos(10));

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.homepage}>
      <h1 className={s.homepage__title}>Global Crypto Stats</h1>
      {isFetching ? (
        <Preloader customPreloaderClassName={s.homepage__preloader} />
      ) : stats ? (
        <CryptoStats stats={stats} />
      ) : (
        <p>error</p>
      )}

      <div className={s.homepage__subtitleBox}>
        <h2 className={s.homepage__subtitle}>
          Top 10 Cryptocurrencies in the world
        </h2>
        <Link to="/cryptocurrencies" className={s.homepage__showMore}>
          Show More
        </Link>
      </div>
      <Cryptocurrencies simplified />

      <div className={s.homepage__subtitleBox}>
        <h2 className={s.homepage__subtitle}>Latest Crypto News</h2>
        <Link to="/news" className={s.homepage__showMore}>
          Show More
        </Link>
      </div>
      <News />
    </div>
  );
};

export default Homepage;
