import React from 'react'
import Testimonio from '../components/Testimonio'
import HeroSection2 from '../components/HeroSection2'
import Imagen from "../img/tutoriales.jpg"
import Card from '../components/Cards-tutoriales'
import "../styles/Tutoriales.css"


const Tutoriales = () => {
    return (
      <div className='container-1'>
        <div className='hero2'>
        <HeroSection2
          imagen={Imagen}
          alt="Tutos"
          titulo="Tutoriales"
          subtitulo="Explora nuestra coleccion de tutoriales fotograficos para aprender y mejorar <br/> tus habilidades desde iluminacion hasta edicion, tenemos todo lo que necesitas para <br/> llevar tus fotos al siguiente nivel."
        />
        </div>

        <div className='contenido-tutoriales'>
         
          <Card/>
        </div> 
      </div>
    )
  }
  
  export default Tutoriales
