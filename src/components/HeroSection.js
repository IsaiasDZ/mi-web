import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
         <img src={require("../img/header-home.jpg")} alt="Physiotherapy" className='fondo-imagen'/>
      <div className="content">
        <div className="text">
          <h1>Bienvenido a PixelGallery</h1>
          <p>En este lugar encontraras una variedad de noticias del mundo de la fotografia y mucho mas</p>
          <button>Iniciar sesion</button>
        </div>
        <div className="image">
          <div className="circle">
            <img src={require("../img/header-home.jpg")} alt="Physiotherapy" />
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
