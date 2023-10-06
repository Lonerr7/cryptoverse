import { Route, Routes } from 'react-router-dom';

// Закончил на 26:00

const AppRouter = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/exchanges" element={<p>exchanges</p>} />
        <Route path="/cryptocurrencies" element={<p>cryptocurrencies</p>} />
        <Route path="/crypto/:coinId" element={<p>crypto details</p>} />
        <Route path="/news" element={<p>news</p>} />
      </Routes>
    </div>
  );
};

export default AppRouter;
