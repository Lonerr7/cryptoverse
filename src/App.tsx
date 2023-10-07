import './scss/App.scss';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Navbar />
      </nav>
      <main className="main">
        <AppRouter />
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
