import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import ScrollToTop from './components/ScrollToTop'; // Helper to scroll top on route change
import Termsandconditions from './pages/Termsandconditions';
import Privacypolicy from './pages/Privacypolicy';
import Contactus from './pages/Contactus';
import About from './pages/About';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/terms-and-conditions" element={<Termsandconditions />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/about" element={<About />} />
            
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
