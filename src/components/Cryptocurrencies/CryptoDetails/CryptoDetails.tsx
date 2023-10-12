import s from './CryptoDetails.module.scss';
import Select from 'react-select';
import Preloader from '../../common/Preloader/Preloader';
import { CoinDetails } from '../../../types/reduxTypes/coinsSliceTypes';
import { CoinStat, GenericStat } from './CryptoDetailsContainer';
import CoinStatElement from './CoinStatElement/CoinStatElement';
import CryptoStats from './CryptoStats/CryptoStats';

interface Props {
  coinDetails: CoinDetails | null;
  isFetching: boolean;
  selectOptions: Array<{
    label: string;
    value: string;
  }>;
  stats: CoinStat[];
  genericStats: GenericStat[];
}

const CryptoDetails: React.FC<Props> = ({
  coinDetails,
  isFetching,
  selectOptions,
  stats,
  genericStats,
}) => {
  const coinStatsElements = stats.map((stat, i) => (
    <CoinStatElement
      key={i}
      icon={stat.icon}
      title={stat.title}
      value={stat.value}
    />
  ));

  const genericStatsElements = genericStats.map((stat, i) => (
    <CoinStatElement
      key={i}
      title={stat.title}
      value={stat.value}
      icon={stat.icon}
    />
  ));

  return (
    <div className={s.details}>
      {isFetching ? (
        <Preloader />
      ) : (
        <>
          {coinDetails ? (
            <>
              <h2 className={s.details__title}>
                {coinDetails.name} ({coinDetails.symbol}) Price
              </h2>
              <p className={s.details__subtitle}>
                {coinDetails.name} live price in US dollars. View value,
                statistics, market cap and supply
              </p>

              <Select
                className={s.details__select}
                options={selectOptions}
                defaultInputValue="7d"
                placeholder="Select Time period..."
              />

              <div className={s.details__statsBlock}>
                <CryptoStats
                  coinDetails={coinDetails}
                  elements={coinStatsElements}
                  subtitle={`An overview showing stats of ${coinDetails.name}`}
                />
                <CryptoStats
                  coinDetails={coinDetails}
                  elements={genericStatsElements}
                  subtitle="An overview showing the stats of all cryptocurrencies"
                />
              </div>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default CryptoDetails;
