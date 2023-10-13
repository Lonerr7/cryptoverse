import { CoinHistoryData } from '../../../types/reduxTypes/coinsSliceTypes';
import s from './LineChart.module.scss';

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
    <div className={`${s.chart} ${customWrapperClassName}`}>LineChart</div>
  );
};

export default LineChart;
