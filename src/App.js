import './App.css';

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
import Preguntas from './screens/PreguntasF';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth0 } from '@auth0/auth0-react';
import Galeria from './screens/Galeria';
import Premium from "./screens/Premium";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
     
    <Router>
    <div className="App " >
      
      <NavBar />
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/tutoriales" element={
              <ProtectedRoute>
                <Tutoriales/>
              </ProtectedRoute>
            } />
        <Route path="/articulos" element={
              <ProtectedRoute>
                <Articulos/>
              </ProtectedRoute>
            } />
        <Route path="/concursos" element={
              <ProtectedRoute>
                <Concursos/>
              </ProtectedRoute>
            } />
        <Route path="/criticas" element={
              <ProtectedRoute>
                <Criticas/>
              </ProtectedRoute>
            } />
        <Route path="/equipo" element={
              <ProtectedRoute>
                <Equipo/>
              </ProtectedRoute>
            } />
        <Route path="/noticias" element={
              <ProtectedRoute>
                <Noticias/>
              </ProtectedRoute>
            } />
        <Route path="/preguntasf" element={
              <ProtectedRoute>
                <Preguntas/>
              </ProtectedRoute>
            } />
        <Route path="/galeria" element={
              <ProtectedRoute>
                <Galeria/>
              </ProtectedRoute>
            } />    
         <Route path="/Premium" element={
              <ProtectedRoute>
                <Premium/>
              </ProtectedRoute>
            } />  
        
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