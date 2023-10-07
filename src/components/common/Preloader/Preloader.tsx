import s from './Preloader.module.scss';
import preloader from '../../../images/preloader.gif';

interface Props {
  customPreloaderClassName?: string;
}

const Preloader: React.FC<Props> = ({ customPreloaderClassName }) => {
  return (
    <img
      className={`${s.preloader} ${customPreloaderClassName}`}
      src={preloader}
      alt="preloader"
    />
  );
};

export default Preloader;
