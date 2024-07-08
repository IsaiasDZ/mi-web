import './App.css';
import NavBar from './components/NavBar';
import Testimonio from "./components/Testimonio"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home"
import HeroSection from './components/HeroSection';
import Tutoriales from './screens/Tutoriales';
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', preventZoom);

    return () => {
      window.removeEventListener('keydown', preventZoom);
    };
  }, []);
  return (
     
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tutoriales" component={Tutoriales} />
      </Switch>
    </div>
  </Router>

    
  );
}

export default App;
//<HeroSection/>