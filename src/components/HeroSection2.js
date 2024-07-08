import React from 'react'
import "../styles/HeroSection2.css"

const HeroSection2 = (props) => {
  return (
    <div className='hero2'>
        <img src={props.imagen} alt={props.alt}/>
        <div className='textos'>
        <h1>{props.titulo}</h1>
        <p>{props.subtitulo}</p>
        </div>
    </div>
  )
}

export default HeroSection2

/*<HeroSection2
  src={imagen}
  alt="Descripción de la imagen"
  texto="Texto dentro del div con la imagen"
/> */