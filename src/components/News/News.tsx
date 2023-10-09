import s from './News.module.scss';
import Preloader from '../common/Preloader/Preloader';
import NewsCard from './NewsCard/NewsCard';
import Select from 'react-select';
import { NewsItem } from '../../types/reduxTypes/newsSliceTypes';

interface Props {
  simplified?: boolean;
  news: NewsItem[];
  selectOptions:
    | {
        label: string;
        value: string;
      }[]
    | undefined;
  onSelectChange: (newValue: any) => void;
  isNewsFetching: boolean;
}

const News: React.FC<Props> = ({
  simplified,
  news,
  isNewsFetching,
  selectOptions,
  onSelectChange,
}) => {
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
      {!simplified ? (
        <Select
          className={s.news__select}
          options={selectOptions}
          onChange={onSelectChange}
          defaultInputValue={'Cryptocurrency'}
          classNamePrefix='news-select'
        />
      ) : null}
      <div className={s.news__inner}>
        {isNewsFetching ? <Preloader /> : newsCards}
      </div>
    </div>
  );
};

export default News;
