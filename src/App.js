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
import Entrevistapre1 from "./components/Entrevistaspre1";
import Entrevistapre2 from "./components/Entrevistaspre2";
import Entrevistapre3 from "./components/Entrevistaspre3";
import Entrevistapre4 from "./components/Entrevistaspre4";
import Entrevistapre5 from "./components/Entrevistaspre5";
import Entrevistapre6 from "./components/Entrevistaspre6";
import Entrevistapre7 from "./components/Entrevistaspre7";
import Entrevistapre8 from "./components/Entrevistaspre8";
import Entrevistapre9 from "./components/Entrevistaspre9";
import Entrevistapre10 from "./components/Entrevistaspre10";
import Entrevistapre11 from "./components/Entrevistaspre11";
import Entrevistapre12 from "./components/Entrevistaspre12";
import Entrevistapre13 from "./components/Entrevistaspre13";
import Entrevistapre14 from "./components/Entrevistaspre14";
import Entrevistapre15 from "./components/Entrevistaspre15";
import Entrevistapre16 from "./components/Entrevistaspre16";
import Entrevistapre17 from "./components/Entrevistaspre17";
import Entrevistapre18 from "./components/Entrevistaspre18";
import Entrevistapre19 from "./components/Entrevistaspre19";
import Entrevistapre20 from "./components/Entrevistaspre20";
import Premiumtutorial1 from './components/Premiumtutorial1';
import Premiumtutorial2 from './components/Premiumtutorial2';
import Premiumtutorial3 from './components/Premiumtutorial3';
import Premiumtutorial4 from './components/Premiumtutorial4'; 
import Premiumtutorial5 from './components/Premiumtutorial5';
import Premiumtutorial6 from './components/Premiumtutorial6';
import Premiumtutorial7 from './components/Premiumtutorial7';
import Premiumtutorial8 from './components/Premiumtutorial8';
import Premiumtutorial9 from './components/Premiumtutorial9';
import Premiumtutorial10 from './components/Premiumtutorial10';
import Premiumtutorial11 from "./components/Premiumtutorial11";
import Premiumtutorial12 from './components/Premiumtutorial12';
import Premiumtutorial13 from './components/Premiumtutorial13';
import Premiumtutorial14 from './components/Premiumtutorial14';
import Premiumtutorial15 from './components/Premiumtutorial15';
import Premiumtutorial16 from './components/Premiumtutorial16';
import Premiumtutorial17 from "./components/Premiumtutorial17";
import Premiumtutorial18 from './components/Premiumtutorial18';
import Premiumtutorial19 from './components/Premiumtutorial19';
import Premiumtutorial20 from './components/Premiumtutorial20';

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
         <Route path="/entrevistasPre/1" element={<ProtectedRoute> <Entrevistapre1/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/2" element={<ProtectedRoute> <Entrevistapre2/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/3" element={<ProtectedRoute> <Entrevistapre3/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/4" element={<ProtectedRoute> <Entrevistapre4/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/5" element={<ProtectedRoute> <Entrevistapre5/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/6" element={<ProtectedRoute> <Entrevistapre6/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/7" element={<ProtectedRoute> <Entrevistapre7/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/8" element={<ProtectedRoute> <Entrevistapre8/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/9" element={<ProtectedRoute> <Entrevistapre9/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/10" element={<ProtectedRoute> <Entrevistapre10/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/11" element={<ProtectedRoute> <Entrevistapre11/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/12" element={<ProtectedRoute> <Entrevistapre12/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/13" element={<ProtectedRoute> <Entrevistapre13/></ProtectedRoute> } />    
         <Route path="/entrevistasPre/14" element={<ProtectedRoute> <Entrevistapre14/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/15" element={<ProtectedRoute> <Entrevistapre15/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/16" element={<ProtectedRoute> <Entrevistapre16/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/17" element={<ProtectedRoute> <Entrevistapre17/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/18" element={<ProtectedRoute> <Entrevistapre18/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/19" element={<ProtectedRoute> <Entrevistapre19/></ProtectedRoute> } />  
         <Route path="/entrevistasPre/20" element={<ProtectedRoute> <Entrevistapre20/></ProtectedRoute> } />  
         <Route path="/premiumtutoriales/1" element={<ProtectedRoute> <Premiumtutorial1/></ProtectedRoute> } />  
         <Route path="/premiumtutoriales/2" element={<ProtectedRoute> <Premiumtutorial2/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/3" element={<ProtectedRoute> <Premiumtutorial3/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/4" element={<ProtectedRoute> <Premiumtutorial4/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/5" element={<ProtectedRoute> <Premiumtutorial5/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/6" element={<ProtectedRoute> <Premiumtutorial6/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/7" element={<ProtectedRoute> <Premiumtutorial7/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/8" element={<ProtectedRoute> <Premiumtutorial8/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/9" element={<ProtectedRoute> <Premiumtutorial9/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/10" element={<ProtectedRoute> <Premiumtutorial10/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/11" element={<ProtectedRoute> <Premiumtutorial11/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/12" element={<ProtectedRoute> <Premiumtutorial12/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/13" element={<ProtectedRoute> <Premiumtutorial13/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/14" element={<ProtectedRoute> <Premiumtutorial14/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/15" element={<ProtectedRoute> <Premiumtutorial15/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/16" element={<ProtectedRoute> <Premiumtutorial16/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/17" element={<ProtectedRoute> <Premiumtutorial17/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/18" element={<ProtectedRoute> <Premiumtutorial18/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/19" element={<ProtectedRoute> <Premiumtutorial19/></ProtectedRoute> } /> 
         <Route path="/premiumtutoriales/20" element={<ProtectedRoute> <Premiumtutorial20/></ProtectedRoute> } /> 
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