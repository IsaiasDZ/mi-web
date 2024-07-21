import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
         <img src={require("../img/header-home.jpg")} alt="Physiotherapy" className='fondo-imagen'/>
      <div className="content">
        <div className="text">
          <h1>Hola,<br />Bienvenido a PixelGallery</h1>
          <p>En este lugar encontraras una variedad de noticias del mundo de la fotografia. Inicia sesión o registrate para tener acceso a todo el contenido.</p>
          <button type="button" class="btn btn-dark" >Iniciar sesion</button>
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
