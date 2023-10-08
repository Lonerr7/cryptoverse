import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { fetchCryptoNews } from '../../redux/slices/newsSlice';
import s from './News.module.scss';

interface Props {
  simplified?: boolean;
}

const News: React.FC<Props> = ({ simplified }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchCryptoNews({
        newsCategory: 'Cryptocurrency',
        count: simplified ? 6 : 100,
      })
    );

    // eslint-disable-next-line
  }, []);

  return <div className={s.news}>News</div>;
};

export default News;
