import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbar__logoContainer}>
        <NavLink className={s.navbar__logoLink} to="/">
          <img className={s.navbar__logo} src={logo} alt="logo" />
          <h2 className={s.navbar__logoText}>Cryptoverse</h2>
        </NavLink>
        {/* <button></button> */}
      </div>

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
            Home
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
            Cryptocurrencies
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
            Exchanges
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
            News
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
