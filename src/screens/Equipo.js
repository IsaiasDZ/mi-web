import React from 'react'
import Imagen from "../img/equipo.jpg"
import HeroSection2 from '../components/HeroSection2'
import EquipoC from "../components/Equipo-cards"

const Equipo = () => {
  return (
    <div className='container-1'>
      <div className='hero2'>
          <HeroSection2
          imagen={Imagen} 
          alt="Equipo"
          titulo="Guía Completa de Equipos Fotográficos"
          subtitulo="Reseñas Detalladas y Opiniones de los Mejores Equipos para Fotógrafos Profesionales y Aficionado"
          />
      </div>

      <div className='contenido-tutoriales'>
        <EquipoC/>
      </div> 
     </div>
  )
}

export default Equipo