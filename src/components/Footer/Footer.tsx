import { Link } from 'react-router-dom';
import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <h5 className={s.footer__title}>Cryptoverse</h5>
      <p className={s.footer__text}>All rights reserved</p>

      <ul className={s.footer__list}>
        <li className={s.footer__listItem}>
          <Link className={s.footer__link} to="/">
            Home
          </Link>
        </li>
        <li className={s.footer__listItem}>
          <Link className={s.footer__link} to="/news">
            News
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
