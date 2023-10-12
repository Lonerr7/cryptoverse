import { GenericStat } from '../CryptoDetailsContainer';
import s from './CoinStatElement.module.scss';

interface Props extends GenericStat {}

const CoinStatElement: React.FC<Props> = ({ icon, title, value }) => {
  return (
    <div className={s.stat}>
      <div className={s.stat__titleBox}>
        {icon}
        <p className={s.stat__title}>{title}</p>
      </div>
      <p className={s.stat__value}>{value}</p>
    </div>
  );
};

export default CoinStatElement;
