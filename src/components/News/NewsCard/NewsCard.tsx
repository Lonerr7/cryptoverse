import s from './NewsCard.module.scss';
import moment from 'moment';
import defaultNewsImg from '../../../images/default-news.png';
import defaultCompanyImg from '../../../images/default-company.png';

interface Props {
  name: string;
  imageUrl: string;
  newsUrl: string | undefined;
  description: string;
  providerImageUrl: string | undefined;
  providerName: string;
  datePublished: string;
}

const NewsCard: React.FC<Props> = ({
  name,
  imageUrl,
  newsUrl,
  description,
  providerImageUrl,
  providerName,
  datePublished,
}) => {
  return (
    <a className={s.card} href={newsUrl} target="_blank" rel="noreferrer">
      <div className={s.card__globalInfo}>
        <div className={s.card__top}>
          <h6 className={s.card__title}>{name}</h6>

          <img
            className={s.card__logo}
            src={imageUrl ? imageUrl : defaultNewsImg}
            alt="news"
          />
        </div>

        <p className={s.card__description}>{description}</p>
      </div>

      <div className={s.card__bottom}>
        <div className={s.card__providerBox}>
          <img
            className={s.card__providerLogo}
            src={providerImageUrl ? providerImageUrl : defaultCompanyImg}
            alt="provider"
          />
          <p className={s.card__providerName}>{providerName}</p>
        </div>
        <p className={s.card__dateOfPublishing}>
          {moment(datePublished).startOf('hour').fromNow()}
        </p>
      </div>
    </a>
  );
};

export default NewsCard;
