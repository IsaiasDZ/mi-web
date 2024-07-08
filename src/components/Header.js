import React from 'react'
//import { DiVim } from 'react-icons/di'
import "../styles/Header.css"

function Header() {
  return (
    <div className="header-content">
        <img className='img-header' src={require("../img/header-home.jpg")} alt="image-header"/>
        <h1 className="titulo">Bienvenido a PixelGallery</h1>
    </div>
  );
}

export default Header