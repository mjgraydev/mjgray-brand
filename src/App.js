import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';


import Home from './pages/home';
import About from './pages/about';




function App() {
  return (

    <Router>
   
    <div>

      < Header />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      
        
        </Routes>

      </main>
       
      < Footer />

    </div>

</Router> 
  );
}

export default App;
