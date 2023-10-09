import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchCryptoNews } from '../../redux/slices/newsSlice';
import s from './News.module.scss';
import Preloader from '../common/Preloader/Preloader';
import NewsCard from './NewsCard/NewsCard';

interface Props {
  simplified?: boolean;
}

const News: React.FC<Props> = ({ simplified }) => {
  const news = useAppSelector((state) => state.news.news);
  const isFetching = useAppSelector((state) => state.news.isFetching);
  const dispatch = useAppDispatch();

  console.log(news);

  const itemsCount = simplified ? 6 : 100;

  useEffect(() => {
    dispatch(
      fetchCryptoNews({
        newsCategory: 'Cryptocurrency',
        count: itemsCount,
      })
    );

    // eslint-disable-next-line
  }, []);

  if (isFetching) {
    return <Preloader />;
  }

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

  return <div className={s.news}>{newsCards}</div>;
};

export default News;
