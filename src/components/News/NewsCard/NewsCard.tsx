import s from './NewsCard.module.scss';

interface Props {}

// Остановился на 1:25:46.
// TODO: нужно отрисовать карточки новостей в Homepage и отдельно в News page

const NewsCard: React.FC<Props> = ({}) => {
  return <div className={s.card}>NewsCard</div>;
};

export default NewsCard;
