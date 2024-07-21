import React from 'react'
import Imagen from "../img/concursos.jpg"
import HeroSection2 from '../components/HeroSection2'

const Equipo = () => {
  return (
    <div className='container-1'>
      <div className='hero2'>
          <HeroSection2
          imagen={Imagen}
          alt="Concursos"
          titulo="Concursos"
          subtitulo="Bienvenido al emocionante mundo de nuestros concursos fotograficos. Sumergete en </br> una experiencia unica donde la creatividad y el talento se encuentran </br> para celebrar la belleza del arte fotografico."
          />
      </div>

      <div className='contenido-tutoriales'>
      
        
      </div> 
     </div>
  )
}

export default Equipo