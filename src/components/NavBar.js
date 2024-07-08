import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa6";
import Profile from '../components/Profile';

function Nav(){

  return(
        <div className="navbar">
          <div className="logo"><h2 className="ico">PixelGallery<FaCameraRetro className="ico"/></h2></div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/shop">Shop</Link>
           </ul>
          
        </div>
  );

}

export default Nav;
/*
<div>
<BasicButtonExample/> 
  <IconButton texto="02" className="ico"/>
</div>
*/

//<h2 className="ico">PixelGallery<FaCameraRetro className="ico"/></h2>
        
        