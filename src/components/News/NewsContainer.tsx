import React, { useEffect, useState } from 'react';
import News from './News';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchCryptoNews } from '../../redux/slices/newsSlice';
import { getCryptos } from '../../redux/slices/coinsSlice';

interface Props {
  simplified?: boolean;
}

const NewsContainer: React.FC<Props> = ({ simplified }) => {
  const news = useAppSelector((state) => state.news.news);
  const cryptos = useAppSelector((state) => state.coins.coins);
  const isNewsFetching = useAppSelector((state) => state.news.isFetching);
  const dispatch = useAppDispatch();

  const [selectOption, setSelectOption] = useState('Cryptocurrency');

  const itemsCount = simplified ? 6 : 100;
  const selectOptions = cryptos?.map((coin, index) => {
    if (index === 0) {
      return {
        label: 'Cryptocurrency',
        value: 'Cryptocurrency',
      };
    }

    return {
      label: coin.name,
      value: coin.name,
    };
  });

  const onSelectChange = (newValue: any) => {
    setSelectOption(newValue?.value);
  };

  useEffect(() => {
    dispatch(
      fetchCryptoNews({
        newsCategory: selectOption,
        count: itemsCount,
      })
    );

    // eslint-disable-next-line
  }, [selectOption]);

  useEffect(() => {
    if (simplified) {
      return;
    }

    dispatch(getCryptos(100));

    // eslint-disable-next-line
  }, []);

  return (
    <News
      simplified={simplified}
      isNewsFetching={isNewsFetching}
      news={news}
      onSelectChange={onSelectChange}
      selectOptions={selectOptions}
    />
  );
};

export default NewsContainer;
