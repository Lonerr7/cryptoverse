import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import NewsContainer from '../News/NewsContainer';
import CryptoDetailsContainer from '../Cryptocurrencies/CryptoDetails/CryptoDetailsContainer';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetailsContainer />} />
        <Route path="/news" element={<NewsContainer />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
