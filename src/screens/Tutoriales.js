import React from 'react'
import Testimonio from '../components/Testimonio'
import HeroSection2 from '../components/HeroSection2'
import Imagen from "../img/tutoriales.jpg"

const Tutoriales = () => {
    return (
      <div className='container-1'>
        <div className='hero2'>
        <HeroSection2
          imagen={Imagen}
          alt="Descripción de la imagen"
          titulo="Texto dentro del div con la imagen"
        />
        </div>

        <div className='contenido'>
          <h1>Esto es lo que dicen los alumnos de la Universidad</h1>
          <Testimonio/> 
        </div> 
      </div>
    )
  }
  
  export default Tutoriales
