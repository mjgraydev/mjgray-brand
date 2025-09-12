import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';


import Home from './pages/home';
import About from './pages/about';
import Specialities from './pages/specialities';
import Elevation from './pages/elevation';
import Speaking from './pages/speaking';
import Connect from './pages/connect'



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
