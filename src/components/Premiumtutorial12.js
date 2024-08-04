import React from 'react'
import TP87 from "../img/TP87.JPG"
import B1 from "../img/B1.jpg"
import B2 from "../img/B2.jpg"
import B3 from "../img/B3.jpg"
import B4 from "../img/B4.jpg"
import B5 from "../img/B5.jpg"

const Premiumtutorial12 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>Revelando en blanco y negro</h1>
     
      <p className='p-entrevistas'>Sesión de revelado de fotografías en blanco y negro con vídeo de mi canal de Youtube. Vas a tener que leer poco pero hay mucho que ver y aprender. Hoy te traigo un artículo en el que vas a tener que leer poco pero en el que hay mucho que ver, ya que te enlazo la última sesión que tuvimos en mi canal de Youtube, durante el cual aprendimos a revelar fotografías en Blanco y negro... </p>
      <img src={TP87}  className="img-entrevistas" alt="Imgen no disponible"/>
      <p className='p-entrevistas'>Ya hay un capítulo del curso de Lightroom en el que explico todos los secretos del panel 'Blanco y negro ' y de paso explicaba muchas cosas a tener en cuenta cuando decidíamos que queríamos nuestras imágenes en monocromo. Pero tenía pendiente mostrar más herramientas, variantes, consideraciones y técnicas. </p>
      <div className='Contenedores de imagenes'>
            <img src={B1}  className='CDI' a alt="Imgen no disponible"/>
            <img src={B2}  className='CDI' a alt="Imgen no disponible"/>
            <img src={B3}  className='CDI' a alt="Imgen no disponible"/>
            <img src={B4}  className='CDI' a alt="Imgen no disponible"/>
         </div>  
         <p className='p-entrevistas'>Hemos usado el blanco y negro y algunas otras herramientas para mitigar la falta de nitidez en algunas zonas de una foto.</p>
      <div className='Contenedores de imagenes'>
            <img src={B5}  className='CDI' a alt="Imgen no disponible"/>
            <img src={TP87}  className='CDI' a alt="Imgen no disponible"/>
         </div>  
         <p className='p-entrevistas'></p>
    </div>
  )
}

export default Premiumtutorial12
