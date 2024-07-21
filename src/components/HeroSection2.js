import React from 'react'
import "../styles/HeroSection2.css"

const HeroSection2 = (props) => {
  return (
    <div className='hero2'>
        <img src={props.imagen} alt={props.alt} className='img-hero2'/>
        <div className='textos'>
        <h1 className='titulo-hero2'>{props.titulo}</h1>
        <p className='texto-hero2' dangerouslySetInnerHTML={{ __html: props.subtitulo }}></p>
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