import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import s from './Search.module.scss';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

interface Props {
  actionCreator: any;
  searchText: string;
  customWrapperClassName?: string;
  customInputClassName?: string;
  placeholder: string;
}

const Search: React.FC<Props> = ({
  actionCreator,
  searchText,
  customWrapperClassName,
  customInputClassName,
  placeholder,
}) => {
  const dispatch = useAppDispatch();

  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(actionCreator(e.currentTarget.value));
  };

  const clearInputField = () => {
    dispatch(actionCreator(''));
  };

  useEffect(() => {
    return () => {
      clearInputField();
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${s.search} ${customWrapperClassName}`}>
      <AiOutlineSearch className={s.search__searchIcon} size={16} />
      <input
        className={`${s.search__input} ${customInputClassName}`}
        type="text"
        value={searchText}
        onChange={onSearchChange}
        placeholder={placeholder}
      />
      {searchText ? (
        <button className={s.search__clearBtn} onClick={clearInputField}>
          <AiOutlineCloseCircle className={s.search__clearIcon} size={16} />
        </button>
      ) : null}
    </div>
  );
};

export default Search;
