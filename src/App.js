import './App.css';
import Navbar from './components/NavbarComponent/Navbar';
import HomePage from './pages/HomePage';
import { Footer } from './components/FooterComponent/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
