import s from './News.module.scss';
import Preloader from '../common/Preloader/Preloader';
import NewsCard from './NewsCard/NewsCard';
import Select from 'react-select';
import { NewsItem } from '../../types/reduxTypes/newsSliceTypes';
import TextError from '../common/TextError/TextError';

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
  fetchCryptoNewsErrMsg: string;
}

const News: React.FC<Props> = ({
  simplified,
  news,
  isNewsFetching,
  selectOptions,
  fetchCryptoNewsErrMsg,
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
          classNamePrefix="news-select"
          placeholder="Select news title..."
        />
      ) : null}
      <div className={s.news__inner}>
        {isNewsFetching ? (
          <Preloader customPreloaderClassName={s.news__preloader} />
        ) : (
          <>
            {fetchCryptoNewsErrMsg ? (
              <TextError errorMessage={fetchCryptoNewsErrMsg} />
            ) : (
              newsCards
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default News;
