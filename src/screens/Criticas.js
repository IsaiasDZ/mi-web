import React from 'react'
import Imagen from "../img/criticas.jpg"
import HeroSection2 from '../components/HeroSection2'

const Criticas = () => {
  return (
    <div className='container-1'>
      <div className='hero2'>
          <HeroSection2
          imagen={Imagen}
          alt="Criticas"
          titulo="Criticas"
          subtitulo="Explora opiniones y resenas de los mejores libros para fotografos de todos los niveles."
          />
      </div>

      <div className='contenido-tutoriales'>
      
        
      </div> 
     </div>
  )
}

export default Criticas