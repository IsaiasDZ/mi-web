import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home"
import Tutoriales from './screens/Tutoriales';
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
   
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