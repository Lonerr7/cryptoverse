import s from './CryptoDetails.module.scss';
import Select from 'react-select';
import Preloader from '../../common/Preloader/Preloader';
import { CoinDetails } from '../../../types/reduxTypes/coinsSliceTypes';
import { CoinStat } from './CryptoDetailsContainer';
import CoinStatElement from './CoinStatElement/CoinStatElement';

interface Props {
  coinDetails: CoinDetails | null;
  isFetching: boolean;
  selectOptions: Array<{
    label: string;
    value: string;
  }>;
  stats: CoinStat[];
}

const CryptoDetails: React.FC<Props> = ({
  coinDetails,
  isFetching,
  selectOptions,
  stats,
}) => {
  const coinStats = stats.map((stat, i) => (
    <CoinStatElement
      key={i}
      icon={stat.icon}
      title={stat.title}
      value={stat.value}
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

              <div className={s.details__stats}>
                <h3 className={s.details__statsTitle}>
                  {coinDetails.name} Value Statistics
                </h3>
                <p className={s.details__statsSubtitle}>
                  An overview showing stats of {coinDetails.name}
                </p>

                <div className={s.details__statsTable}>{coinStats}</div>
              </div>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default CryptoDetails;
