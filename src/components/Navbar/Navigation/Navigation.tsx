import { NavLink } from 'react-router-dom';
import s from '../Navbar.module.scss';
import {
  AiFillAccountBook,
  AiOutlineBulb,
  AiOutlineHome,
  AiOutlineLineChart,
} from 'react-icons/ai';

interface Props {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const Navigation: React.FC<Props> = ({ isMenuOpen, closeMenu }) => {
  return (
    <ul
      className={
        isMenuOpen ? `${s.navbar__menu}` : `${s.navbar__menu} ${s.closed}`
      }
    >
      <li className={s.navbar__menuItem}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${s.navbar__menuItemLink} ${s.navbar__menuItemLink_active}`
              : s.navbar__menuItemLink
          }
          to="/"
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
        >
          <AiOutlineBulb className={s.navbar__menuLinkIcon} size={20} />
          <span>News</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
