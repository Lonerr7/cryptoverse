import s from './Homepage.module.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getCryptos } from '../../redux/slices/coinsSlice';
import Preloader from '../common/Preloader/Preloader';
import CryptoStats from './CryptoStats/CryptoStats';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import NewsContainer from '../News/NewsContainer';
import TextError from '../common/TextError/TextError';

const Homepage: React.FC = () => {
  const { stats, getCryptosErrMsg } = useAppSelector((state) => state.coins);
  const isFetching = useAppSelector((state) => state.coins.isFetching);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCryptos(10));

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.homepage}>
      {isFetching ? (
        <Preloader />
      ) : (
        <>
          <h1 className={s.homepage__title}>Global Crypto Stats</h1>
          {stats ? (
            <CryptoStats stats={stats} />
          ) : (
            <TextError errorMessage={getCryptosErrMsg} />
          )}

          <div
            className={`${s.homepage__subtitleBox} ${s.homepage__top10SubtitleBox}`}
          >
            <h2
              className={`${s.homepage__subtitle} ${s.homepage__top10Subtitle}`}
            >
              Top 10 Cryptocurrencies in the world
            </h2>
            <Link to="/cryptocurrencies" className={s.homepage__showMore}>
              Show More
            </Link>
          </div>
          <Cryptocurrencies simplified />

          <div className={`${s.homepage__subtitleBox} ${s.homepage__newsBox}`}>
            <h2
              className={`${s.homepage__subtitle} ${s.homepage__newsSbutitle}`}
            >
              Latest Crypto News
            </h2>
            <Link to="/news" className={s.homepage__showMore}>
              Show More
            </Link>
          </div>
          <NewsContainer simplified />
        </>
      )}
    </div>
  );
};

export default Homepage;
