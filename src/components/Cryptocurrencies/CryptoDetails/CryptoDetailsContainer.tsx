import React, { useEffect, useState } from 'react';
import CryptoDetails from './CryptoDetails';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  fetchCoinDetails,
  fetchCoinHistory,
} from '../../../redux/slices/coinsSlice';
import millify from 'millify';
import {
  AiOutlineDollar,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineLineChart,
  AiOutlineCheck,
  AiOutlineStop,
  AiOutlineMoneyCollect,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';
import { MdOutlineGrid3X3 } from 'react-icons/md';
import { CoinChartTimePeriod } from '../../../types/reduxTypes/coinsSliceTypes';

export interface CoinStat {
  title: string;
  value: string | number;
  icon: React.ReactElement;
}

export interface GenericStat extends Omit<CoinStat, 'value'> {
  value: string | number | React.ReactElement;
}

const CryptoDetailsContainer: React.FC = () => {
  const { coinId } = useParams();
  const coinDetails = useAppSelector((state) => state.coins.currentCoinDetails);
  const coinHistory = useAppSelector((state) => state.coins.currentCoinHistory);
  const isFetching = useAppSelector(
    (state) => state.coins.isCoinDetailsFetching
  );
  const fetchCoinHistoryErrMsg = useAppSelector(
    (state) => state.coins.fetchCoinHistoryErrMsg
  );
  const [selectedTimestamp, setSelectedTimestamp] =
    useState<CoinChartTimePeriod>('24h');
  const dispatch = useAppDispatch();

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const selectOptions = time.map((t) => ({
    label: t,
    value: t,
  }));

  let stats: Array<CoinStat> = [];
  let genericStats: Array<GenericStat> = [];

  if (coinDetails) {
    stats = [
      {
        title: 'Price to USD',
        value: `$ ${coinDetails?.price && millify(+coinDetails?.price)}`,
        icon: <AiOutlineDollar size={20} />,
      },
      {
        title: 'Rank',
        value: coinDetails?.rank,
        icon: <MdOutlineGrid3X3 size={20} />,
      },
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

    genericStats = [
      {
        title: 'Number Of Markets',
        value: coinDetails.numberOfMarkets,
        icon: <AiOutlineLineChart size={20} />,
      },
      {
        title: 'Number Of Exchanges',
        value: coinDetails.numberOfExchanges,
        icon: <AiOutlineMoneyCollect size={20} />,
      },
      {
        title: 'Aprroved Supply',
        value: coinDetails.supply.confirmed ? (
          <AiOutlineCheck size={20} />
        ) : (
          <AiOutlineStop size={20} />
        ),
        icon: <AiOutlineExclamationCircle size={20} />,
      },
      {
        title: 'Total Supply',
        value: `$ ${millify(+coinDetails.supply.total)}`,
        icon: <AiOutlineExclamationCircle size={20} />,
      },
      {
        title: 'Circulating Supply',
        value: `$ ${millify(+coinDetails.supply.circulating)}`,
        icon: <AiOutlineExclamationCircle size={20} />,
      },
    ];
  }

  const onSelectChange = (newValue: any) => {
    setSelectedTimestamp(newValue.value);
  };

  useEffect(() => {
    if (coinId) {
      dispatch(fetchCoinDetails({ coinId }));
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (coinId) {
      dispatch(fetchCoinHistory({ coinId, timePeriod: selectedTimestamp }));
    }

    // eslint-disable-next-line
  }, [selectedTimestamp]);

  return (
    <CryptoDetails
      coinDetails={coinDetails}
      coinHistory={coinHistory}
      isFetching={isFetching}
      selectOptions={selectOptions}
      stats={stats}
      genericStats={genericStats}
      selectDefaultValue={selectedTimestamp}
      onSelectChange={onSelectChange}
      fetchCoinHistoryErrMsg={fetchCoinHistoryErrMsg}
    />
  );
};

export default CryptoDetailsContainer;
