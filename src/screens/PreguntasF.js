import React from 'react'
import HeroSection2 from '../components/HeroSection2'
import Imagen from "../img/preguntasF.jpg" 
import Preguntas from '../components/Cards-Preguntas'
import "../styles/PreguntasFrecuentes.css"

const PreguntasF = () => {
  return (
    <div className='container-1'>
      <div className='hero2'>
          <HeroSection2
          imagen={Imagen}
          alt="Preguntas"
          titulo=""
          subtitulo=""
          />
      </div>

      <div className='contenido-preguntas-frecuentes'>
        <Preguntas/>
        
      </div> 
     </div>
  )
}

export default PreguntasF