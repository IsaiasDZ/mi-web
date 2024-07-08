import './App.css';
import NavBar from './components/NavBar';
import Testimonio from "./components/Testimonio"
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

import { useAuth0 } from '@auth0/auth0-react'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginProfile from './components/LoginProfile';
import Home from "./screens/Home"
import About from "./screens/About"
import HeroSection from './components/HeroSection';

function App() {
  const{isAuthenticated}=useAuth0()
  return (
     
      <Router>
        <div className="App">
        <NavBar />
        <HeroSection/>
        <Header/> 
        <Switch>
          <Route path="./screens/Home" exact component={Home} />
          <Route path="./screens/About" component={About} />
        </Switch>
        
        
      <div className='contenedr-principal'>
      <h1>Esto es lo que dicen los alumnos de la Universidad</h1>
      <Testimonio/>

      {
        isAuthenticated ? 
        <LogoutButton/>
        :
        <LoginButton/>
      }
      
      
      
      <LoginProfile/>
      </div>
      </div>
    </Router>

    
  );
}

export default App;