import s from './Burger.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

interface Props {
  isMenuOpen: boolean;
  openCloseMenu: () => void;
}

const Burger: React.FC<Props> = ({ isMenuOpen, openCloseMenu }) => {
  return (
    <button className={s.burger} onClick={openCloseMenu}>
      {!isMenuOpen ? (
        <GiHamburgerMenu className={s.burger__icon} size={30} />
      ) : (
        <ImCross
          className={`${s.burger__icon} ${s.burger__icon_cross}`}
          size={26}
        />
      )}
    </button>
  );
};

export default Burger;
