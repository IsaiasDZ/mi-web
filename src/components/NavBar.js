import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa6";
import FavoritesButton from "../components/FavoriteButton"
import NotificatioButton from "../components/NotificationButton"
import LoginProfile from '../components/LoginProfile';
import LoginButton from '../components/LoginButton';
import LeftMenu from '../components/Left-Menu';

import { useAuth0 } from '@auth0/auth0-react'; 

const links = [
  {
    name: "Home",
    href: "/",

  },{
    name: "Tutoriales",
    href: "/tutoriales",

  },{
    name: "Articulos",
    href: "/articulos",

  },
  {
    name: "Concursos",
    href: "/concursos",

  },
  {
    name: "Criticas",
    href: "/criticas",

  },
  {
    name: "Equipo",
    href: "/equipo",

  },
  {
    name: "Noticias",
    href: "/noticias",

  }
];

function NavBar(){
  const{isAuthenticated}=useAuth0()

  return(
        <div className="navbar">
          <LeftMenu/>
          <div className="logo"><h2 className="ico">PixelGallery<FaCameraRetro className="ico"/></h2></div>
           
          
            {
              isAuthenticated ? 
              (
                <>
                {links.map((x) =>(
                  
                  <div className="nav-links">
                  <Link to={x.href}>{x.name}</Link>
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
        
        