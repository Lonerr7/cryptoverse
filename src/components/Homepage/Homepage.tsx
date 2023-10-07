import s from './Homepage.module.scss';
import millify from 'millify';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className={s.homepage}>
      <h1 className={s.homepage__title}>Global Crypto Stats</h1>
      <div className={s.homepage__stats}>
        <div className={s.homepage__statItem}>
          <h5 className={s.homepage__statTitle}>Total Cryptocurrencies</h5>
          <p className={s.homepage__statValue}>5</p>
        </div>
        <div className={s.homepage__statItem}>
          <h5 className={s.homepage__statTitle}>Total Exchanges</h5>
          <p className={s.homepage__statValue}>5</p>
        </div>
        <div className={s.homepage__statItem}>
          <h5 className={s.homepage__statTitle}>Total Market Cap</h5>
          <p className={s.homepage__statValue}>5</p>
        </div>
        <div className={s.homepage__statItem}>
          <h5 className={s.homepage__statTitle}>Total 24h Volume</h5>
          <p className={s.homepage__statValue}>5</p>
        </div>
        <div className={s.homepage__statItem}>
          <h5 className={s.homepage__statTitle}>Total Markets</h5>
          <p className={s.homepage__statValue}>5</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
