import s from './LineChart.module.scss';
import { CoinHistoryData } from '../../../types/reduxTypes/coinsSliceTypes';
import { Line } from 'react-chartjs-2';
import { registerables, Chart } from 'chart.js';

Chart.register(...registerables);

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
  const coinPrice: string[] = [];
  const coinTimeStamp: string[] = [];

  // Pushing coin price and timestamps into separate arrays for the chart
  coinHistory.history.forEach((el) => {
    coinPrice.push(el.price);
    coinTimeStamp.push(new Date(el.timestamp).toLocaleDateString());
  });

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  return (
    <div className={`${s.chart} ${customWrapperClassName}`}>
      <h2 className={s.chart__title}>{coinName}</h2>
      <div className={s.chart__priceBox}>
        <h5 className={s.chart__priceTitle}>
          Price change percentage: {coinHistory.change} %
        </h5>
        <h5 className={s.chart__priceTitle}>
          Current {coinName} Price: ${currentPrice}
        </h5>
      </div>
      <Line className={s.chart__chart} data={data} />
    </div>
  );
};

export default LineChart;
