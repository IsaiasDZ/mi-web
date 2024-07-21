import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home"
import Tutoriales from './screens/Tutoriales';
import React, { useEffect } from 'react'
import Footer from "./components/Footer"

function App() {
 
  return (
     
    <Router>
    <div className="App">
      
      <NavBar />
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tutoriales" element={<Tutoriales/>} />
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