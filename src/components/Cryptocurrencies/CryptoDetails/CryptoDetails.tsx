import s from './CryptoDetails.module.scss';
import Select from 'react-select';
import Preloader from '../../common/Preloader/Preloader';
import {
  CoinChartTimePeriod,
  CoinDetails,
  CoinHistoryData,
} from '../../../types/reduxTypes/coinsSliceTypes';
import { CoinStat, GenericStat } from './CryptoDetailsContainer';
import CoinStatElement from './CoinStatElement/CoinStatElement';
import CryptoStats from './CryptoStats/CryptoStats';
import CoinLink from './CoinLink/CoinLink';
import LineChart from '../../common/LineChart/LineChart';
import millify from 'millify';

// Закончил на 1:50:16

interface Props {
  coinDetails: CoinDetails | null;
  isFetching: boolean;
  selectOptions: Array<{
    label: string;
    value: string;
  }>;
  stats: CoinStat[];
  genericStats: GenericStat[];
  coinHistory: CoinHistoryData;
  selectDefaultValue: CoinChartTimePeriod;
  onSelectChange: (newValue: any) => void;
}

const CryptoDetails: React.FC<Props> = ({
  coinDetails,
  isFetching,
  selectOptions,
  stats,
  genericStats,
  coinHistory,
  selectDefaultValue,
  onSelectChange,
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

  const coinLinksElements = coinDetails?.links.map((link) => (
    <CoinLink
      key={link.name}
      name={link.name}
      type={link.type}
      url={link.url}
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

              <div className={s.details__chartBlock}>
                <Select
                  className={s.details__select}
                  options={selectOptions}
                  defaultInputValue={selectDefaultValue}
                  placeholder="Select Time period..."
                  onChange={onSelectChange}
                />
                <LineChart
                  coinHistory={coinHistory}
                  coinName={coinDetails.name}
                  currentPrice={millify(+coinDetails.price)}
                />
              </div>

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

              <p className={s.details__coinDescription}>
                {coinDetails.description}
              </p>

              <div className={s.details__links}>
                <h5 className={s.details__linksTitle}>
                  {coinDetails.name} Links
                </h5>
                {coinLinksElements}
              </div>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default CryptoDetails;
