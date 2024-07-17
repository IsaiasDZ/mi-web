import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa6";
import Profile from '../components/Profile';
import NotificatioButton from "../components/NotificationButton"
import LoginProfile from '../components/LoginProfile';
import LoginButton from '../components/LoginButton';

import { useAuth0 } from '@auth0/auth0-react'; 

function NavBar(){
  const{isAuthenticated}=useAuth0()

  return(
        <div className="navbar">
          <div className="logo"><h2 className="ico">PixelGallery<FaCameraRetro className="ico"/></h2></div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/Tutoriales">Tutoriales</Link>
              <Link to="/shop">Shop</Link>
           </ul>
          
            {
              isAuthenticated ? 
              (
                <>
                <NotificatioButton/>
                 
                </>
              )
              :
                <LoginButton/>
            
            }
                <LoginProfile/>
        </div>
  );

}

export default NavBar;
/*
<div>
<BasicButtonExample/> 
  <IconButton texto="02" className="ico"/>
</div>
*/

//<h2 className="ico">PixelGallery<FaCameraRetro className="ico"/></h2>
        
        