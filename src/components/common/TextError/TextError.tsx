import s from './TextError.module.scss';

interface Props {
  errorMessage: string;
}

const TextError: React.FC<Props> = ({ errorMessage }) => {
  return <p className={s.error}>{errorMessage}</p>;
};

export default TextError;
