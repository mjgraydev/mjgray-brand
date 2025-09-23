import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/home';
import About from './pages/about';
import BLE from './pages/ble';

function AppContent() {
  const location = useLocation();
  
  // Hide header and footer on the ble page
  const hideLayoutRoutes = ['/ble'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideLayout && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ble" element={<BLE />} />
        </Routes>
      </main>
       
      {!shouldHideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;