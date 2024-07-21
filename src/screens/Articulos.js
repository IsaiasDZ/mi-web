import React from 'react'
import Imagen from "../img/Articulos.jpg"
import HeroSection2 from '../components/HeroSection2'
import Card from '../components/Cards-tutoriales'

const Articulos = () => {
  return (
    
    <div className='container-1'>
    <div className='hero2'>
    <HeroSection2
      imagen={Imagen}
      alt="Articles"
      titulo="Articulos"
      subtitulo="Explora y comenta los ultimos articulos relacionados a la fotografia."
    />
    </div>

    <div className='contenido-tutoriales'>
     
      
    </div> 
  </div>
  )
}

export default Articulos
