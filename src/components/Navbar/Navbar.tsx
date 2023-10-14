import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../images/cryptocurrency.png';
import Navigation from './Navigation/Navigation';
import Burger from './Burger/Burger';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCloseMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={s.navbar}>
      <div className={s.navbar__logoContainer}>
        <NavLink className={s.navbar__logoLink} to="/">
          <img className={s.navbar__logo} src={logo} alt="logo" />
          <h2 className={s.navbar__logoText}>Cryptoverse</h2>
        </NavLink>
        <Burger isMenuOpen={isMenuOpen} openCloseMenu={openCloseMenu} />
      </div>

      <Navigation />
    </div>
  );
};

export default Navbar;
