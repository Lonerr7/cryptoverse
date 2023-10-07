import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Exchanges from '../Exchanges/Exchanges';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import CryptoDetails from '../CryptoDetails/CryptoDetails';
import News from '../News/News';

const AppRouter = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
