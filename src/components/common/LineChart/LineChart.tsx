import s from './LineChart.module.scss';
import { CoinHistoryData } from '../../../types/reduxTypes/coinsSliceTypes';
import { Line } from 'react-chartjs-2';

interface Props {
  coinHistory: CoinHistoryData;
  currentPrice: string;
  coinName: string;
  customWrapperClassName?: string;
}

const LineChart: React.FC<Props> = ({
  coinHistory,
  currentPrice,
  coinName,
  customWrapperClassName,
}) => {
  return (
    <div className={`${s.chart} ${customWrapperClassName}`}>
      <h2 className={s.chart__title}>{coinName}</h2>
      <div className={s.chart__priceBox}>
        <h5 className={s.chart__priceTitle}>{coinHistory.change}</h5>
        <h5 className={s.chart__priceTitle}>Price: ${currentPrice}</h5>
      </div>
      {/* <Line data={} options={} /> */}
    </div>
  );
};

export default LineChart;
