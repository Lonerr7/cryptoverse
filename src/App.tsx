import './scss/App.scss';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Navbar />
      </nav>
      <main className="main">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
