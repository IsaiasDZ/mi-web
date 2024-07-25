import './App.css';
import './styles.scss';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home"
import Tutoriales from './screens/Tutoriales';
import Articulos from './screens/Articulos';
import React, { useEffect } from 'react'
import Footer from "./components/Footer"
import Concursos from './screens/Concursos';
import Criticas from './screens/Criticas';
import Equipo from './screens/Equipo';
import Noticias from './screens/Noticias';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
 
  return (
     
    <Router>
    <div className="App " >
      
      <NavBar />
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tutoriales" element={<Tutoriales/>} />
        <Route path="/articulos" element={<Articulos/>} />
        <Route path="/concursos" element={<Concursos/>} />
        <Route path="/criticas" element={<Criticas/>} />
        <Route path="/equipo" element={<Equipo/>} />
        <Route path="/noticias" element={<Noticias/>} />
      </Routes>
      
      
      <div className='footer-size'>
          <Footer/>
      </div>
      
    </div>
  </Router>

    
  );
}

export default App;
//<HeroSection/>