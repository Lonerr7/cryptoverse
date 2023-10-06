import './scss/App.scss';
import { Routes, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Navbar />
      </nav>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
