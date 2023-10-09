import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Exchanges from '../Exchanges/Exchanges';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import CryptoDetails from '../CryptoDetails/CryptoDetails';
import NewsContainer from '../News/NewsContainer';

const AppRouter = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<NewsContainer />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
