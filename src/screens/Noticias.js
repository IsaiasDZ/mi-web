import React from 'react'
import Imagen from "../img/noticias.jpg"
import HeroSection2 from '../components/HeroSection2'

const Noticias = () => {
  return (
    <div className='container-1'>
      <div className='hero2'>
          <HeroSection2
          imagen={Imagen}
          alt="Noticias"
          titulo="Noticias"
          subtitulo="Explora Opiniones y Reseñas de los Mejores Libros para Fotógrafos de Todos los Niveles"
          />
      </div>

      <div className='contenido-tutoriales'>
      
        
      </div> 
     </div>
  )
}

export default Noticias