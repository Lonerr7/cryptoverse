import s from './CoinLink.module.scss';

interface Props {
  name: string;
  type: string;
  url: string;
}

const CoinLink: React.FC<Props> = ({ name, type, url }) => {
  return (
    <div className={s.link}>
      <p className={s.link__type}>{type}</p>
      <a className={s.link__url} href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
};

export default CoinLink;
