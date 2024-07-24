import React from 'react'
import Imagen from "../img/criticas.jpg"
import HeroSection2 from '../components/HeroSection2'
import Criticas from "../components/Card-Criticas"
import Card from '../components/Cards-Concursos'

const LibCriticas = () => {
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
        <Criticas/>
        
      </div> 
     </div>
  )
}

export default LibCriticas