import React from 'react';
import '../styles/HeroSection.css';
import { useAuth0 } from '@auth0/auth0-react'; 
import LoginButton from "../components/LoginButton"

const HeroSection = () => {
  const{isAuthenticated}=useAuth0()
  return (
    
    <div className="hero">
         <img src={require("../img/header-home.jpg")} alt="Physiotherapy" className='fondo-imagen'/>
      <div className="content">
        <div className="text">
          { isAuthenticated ?
          <>
            <h1>Hola,<br />Bienvenido a PixelGallery</h1>
            <p>En este lugar encontraras una variedad de noticias del mundo de la fotografia. Gracias por formar parte de nuestra comunidad.</p>
            
            
          </>
          :
          <>
            <h1>Hola,<br />Bienvenido a PixelGallery</h1>
            <p>En este lugar encontraras una variedad de noticias del mundo de la fotografia. Inicia sesión o registrate para tener acceso a todo el contenido.</p>
            <LoginButton/>
          
          </>
          }
        </div>
        <div className="image">
          <div className="circle">
            <img src={require("../img/1366_2000.jpg")} alt="Physiotherapy" />
            <div className="stats">
              <h2>100+</h2>
              <p>Galeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
