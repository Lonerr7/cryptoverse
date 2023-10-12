import { CoinDetails } from '../../../../types/reduxTypes/coinsSliceTypes';
import s from './CryptoStats.module.scss';

interface Props {
  coinDetails: CoinDetails;
  elements: JSX.Element[];
  subtitle: string;
}

const CryptoStats: React.FC<Props> = ({ coinDetails, elements, subtitle }) => {
  return (
    <div className={s.stats}>
      <h3 className={s.stats__title}>{coinDetails.name} Value Statistics</h3>
      <p className={s.stats__subtitle}>{subtitle}</p>

      <div className={s.stats__elements}>{elements}</div>
    </div>
  );
};

export default CryptoStats;
