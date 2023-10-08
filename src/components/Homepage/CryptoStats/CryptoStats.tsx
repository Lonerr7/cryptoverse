import s from './CryptoStats.module.scss';
import { Stats } from '../../../types/reduxTypes/coinsSliceTypes';
import millify from 'millify';

interface Props {
  stats: Stats;
}

const CryptoStats: React.FC<Props> = ({ stats }) => {
  return (
    <div className={s.cryptoStats}>
      <div className={s.cryptoStats__statItem}>
        <h5 className={s.cryptoStats__statTitle}>Total Cryptocurrencies</h5>
        <p className={s.cryptoStats__statValue}>{stats.total}</p>
      </div>
      <div className={s.cryptoStats__statItem}>
        <h5 className={s.cryptoStats__statTitle}>Total Exchanges</h5>
        <p className={s.cryptoStats__statValue}>
          {millify(stats.totalExchanges)}
        </p>
      </div>
      <div className={s.cryptoStats__statItem}>
        <h5 className={s.cryptoStats__statTitle}>Total Market Cap</h5>
        <p className={s.cryptoStats__statValue}>
          {millify(+stats.totalMarketCap)}
        </p>
      </div>
      <div className={s.cryptoStats__statItem}>
        <h5 className={s.cryptoStats__statTitle}>Total 24h Volume</h5>
        <p className={s.cryptoStats__statValue}>
          {millify(+stats.total24hVolume)}
        </p>
      </div>
      <div className={s.cryptoStats__statItem}>
        <h5 className={s.cryptoStats__statTitle}>Total Markets</h5>
        <p className={s.cryptoStats__statValue}>
          {millify(stats.totalMarkets)}
        </p>
      </div>
    </div>
  );
};

export default CryptoStats;
