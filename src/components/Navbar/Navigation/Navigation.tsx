import { NavLink } from 'react-router-dom';
import s from '../Navbar.module.scss';
import {
  AiFillAccountBook,
  AiOutlineBulb,
  AiOutlineHome,
  AiOutlineLineChart,
} from 'react-icons/ai';

const Navigation: React.FC = () => {
  return (
    <ul className={s.navbar__menu}>
      <li className={s.navbar__menuItem}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${s.navbar__menuItemLink} ${s.navbar__menuItemLink_active}`
              : s.navbar__menuItemLink
          }
          to="/"
        >
          <AiOutlineHome className={s.navbar__menuLinkIcon} size={20} />
          <span>Home</span>
        </NavLink>
      </li>
      <li className={s.navbar__menuItem}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${s.navbar__menuItemLink} ${s.navbar__menuItemLink_active}`
              : s.navbar__menuItemLink
          }
          to="/cryptocurrencies"
        >
          <AiOutlineLineChart className={s.navbar__menuLinkIcon} size={20} />
          <span>Cryptocurrencies</span>
        </NavLink>
      </li>
      <li className={s.navbar__menuItem}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${s.navbar__menuItemLink} ${s.navbar__menuItemLink_active}`
              : s.navbar__menuItemLink
          }
          to="/exchanges"
        >
          <AiFillAccountBook className={s.navbar__menuLinkIcon} size={20} />
          <span>Exchanges</span>
        </NavLink>
      </li>
      <li className={s.navbar__menuItem}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${s.navbar__menuItemLink} ${s.navbar__menuItemLink_active}`
              : s.navbar__menuItemLink
          }
          to="/news"
        >
          <AiOutlineBulb className={s.navbar__menuLinkIcon} size={20} />
          <span>News</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
