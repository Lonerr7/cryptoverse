import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchCryptoNews } from '../../redux/slices/newsSlice';
import s from './News.module.scss';
import Preloader from '../common/Preloader/Preloader';
import NewsCard from './NewsCard/NewsCard';
import Select, { SingleValue } from 'react-select';
import { getCryptos } from '../../redux/slices/coinsSlice';

interface Props {
  simplified?: boolean;
}

const News: React.FC<Props> = ({ simplified }) => {
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
    dispatch(getCryptos(100));

    // eslint-disable-next-line
  }, []);

  const newsCards = news?.map((newsItem, i) => (
    <NewsCard
      key={i}
      name={newsItem.name}
      datePublished={newsItem.datePublished}
      description={newsItem.description}
      imageUrl={newsItem.image?.thumbnail?.contentUrl}
      newsUrl={newsItem.url}
      providerName={newsItem.provider[0].name}
      providerImageUrl={newsItem.provider[0].image?.thumbnail?.contentUrl}
    />
  ));

  return (
    <div
      className={s.news}
      style={
        simplified
          ? {
              padding: 0,
            }
          : {}
      }
    >
      <Select
        className={s.news__select}
        options={selectOptions}
        onChange={onSelectChange}
        defaultInputValue={'Cryptocurrency'}
      />
      <div className={s.news__inner}>
        {isNewsFetching ? <Preloader /> : newsCards}
      </div>
    </div>
  );
};

export default News;
