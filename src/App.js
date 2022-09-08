
import './styles/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
