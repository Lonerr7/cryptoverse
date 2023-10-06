import './css/App.css';
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Navbar />
      </nav>
      <main className="main">
        <Layout>
          <AppRouter />
        </Layout>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
