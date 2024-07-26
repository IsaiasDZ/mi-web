import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

import FavoritesButton from "../components/FavoriteButton"
import NotificatioButton from "../components/NotificationButton"
import LoginProfile from '../components/LoginProfile';
import LoginButton from '../components/LoginButton';
import LeftMenu from '../components/Left-Menu';
import { useAuth0 } from '@auth0/auth0-react'; 
import { FaCameraRetro } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa";


const links = [
  {
    name: "Home",
    href: "/",
    icon: <TiHome />

  },,{
    name: "Articulos",
    href: "/articulos",
    icon:<PiArticleNyTimesFill />
  },
  {
    name: "Noticias",
    href: "/noticias",
    icon: <FaNewspaper />
  }
];

function NavBar(){
  const{isAuthenticated}=useAuth0()

  return(
        <div className="navbar">
              {
                    isAuthenticated ?
                    <LeftMenu/>
                    :
                    <p></p>
              }  
          <div className="logo"><h2 className="ico">PixelGallery<FaCameraRetro className="ico"/></h2></div>
           
          
            {
              isAuthenticated ? 
              (
                <>
                {links.map((x) =>(
                  
                  <div className="nav-links">
                  <Link to={x.href}>{x.icon} {x.name}</Link>
                  </div>
                ))}
                
                <FavoritesButton/>
                <NotificatioButton/>
                </>
              )
              :
              (
                <>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <LoginButton/>
                </>
              )
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
        
        