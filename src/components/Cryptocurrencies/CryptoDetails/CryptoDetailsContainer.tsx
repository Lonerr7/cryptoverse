import React, { useEffect } from 'react';
import CryptoDetails from './CryptoDetails';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchCoinDetails } from '../../../redux/slices/coinsSlice';
import millify from 'millify';
import {
  AiOutlineDollar,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
} from 'react-icons/ai';
import { MdOutlineGrid3X3 } from 'react-icons/md';

export interface CoinStat {
  title: string;
  value: string | number;
  icon: React.ReactElement;
}

const CryptoDetailsContainer: React.FC = () => {
  const { coinId } = useParams();
  const coinDetails = useAppSelector((state) => state.coins.currentCoinDetails);
  const isFetching = useAppSelector(
    (state) => state.coins.isCoinDetailsFetching
  );
  const dispatch = useAppDispatch();

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const selectOptions = time.map((t) => ({
    label: t,
    value: t,
  }));

  let stats: Array<CoinStat> = [];

  if (coinDetails) {
    stats = [
      {
        title: 'Price to USD',
        value: `$ ${coinDetails?.price && millify(+coinDetails?.price)}`,
        icon: <AiOutlineDollar size={20} />,
      },
      { title: 'Rank', value: coinDetails?.rank, icon: <MdOutlineGrid3X3 /> },
      {
        title: '24h Volume',
        value: `$ ${
          coinDetails['24hVolume'] && millify(+coinDetails['24hVolume'])
        }`,
        icon: <AiOutlineThunderbolt size={20} />,
      },
      {
        title: 'Market Cap',
        value: `$ ${coinDetails.marketCap && millify(+coinDetails.marketCap)}`,
        icon: <AiOutlineDollar size={20} />,
      },
      {
        title: 'All-time-high(daily avg.)',
        value: `$ ${millify(+coinDetails.allTimeHigh.price)}`,
        icon: <AiOutlineTrophy size={20} />,
      },
    ];
  }

  useEffect(() => {
    if (coinId) {
      dispatch(fetchCoinDetails({ coinId }));
    }

    // eslint-disable-next-line
  }, []);
  return (
    <CryptoDetails
      coinDetails={coinDetails}
      isFetching={isFetching}
      selectOptions={selectOptions}
      stats={stats}
    />
  );
};

export default CryptoDetailsContainer;
