import { useEffect } from 'react';
import s from './CryptoDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchCoinDetails } from '../../../redux/slices/coinsSlice';

const CryptoDetails: React.FC = () => {
  const { coinId } = useParams();
  const coinDetails = useAppSelector((state) => state.coins.currentCoinDetails);
  const isFetching = useAppSelector(
    (state) => state.coins.isCoinDetailsFetching
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (coinId) {
      dispatch(fetchCoinDetails({ coinId }));
    }

    // eslint-disable-next-line
  }, []);

  return <div className={s.details}>CryptoDetails: {coinId}</div>;
};

export default CryptoDetails;
