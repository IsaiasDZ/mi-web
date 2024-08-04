import React from 'react'
import TP82 from "../img/TP82.jpg"
import TP83 from "../img/TP83.jpg"
import TP84 from "../img/TP84.jpg"
import TP85 from "../img/TP85.jpg"
import TP86 from "../img/TP86.jpg"

const Premiumtutorial11 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>¿Qué es el bokeh y cómo puedo hacerlo?       </h1>
      <img src={TP82}  className="img-entrevistas" alt="Imgen no disponible"/>
      <p className='p-entrevistas'>Vamos a darle un repaso a eso del "bokeh", veremos qué es, en qué se diferencia (si es que lo hace) del desenfoque, cómo lo conseguimos, su calidad y también jugaremos un poco con esta curiosa estética o efecto o técnica o como quieras llamarlo. Sigue leyendo y te cuento. </p>
      <h2 className='subtitulo-entrevistas'>¿QUÉ ES ESO DEL "BOKEH"?</h2> 
      <p className='p-entrevistas'>Esto lo habrás leído y oído tropecientas veces... "bokeh" es una palabra japonesa, ぼけ (boke), que significa "borroso" o, utilizando términos propios de la Fotografía, "desenfocado". Por alguna razón, para mí desconocida, se ha popularizado que cuando hablamos de bokeh nos estamos refiriendo a los círculos (o figuras dependiendo de  ciertas cosas que después explicaré) que aparecen en la zona desenfocada de una imagen y que le dan una estética particular...</p>
      <img src={TP83}  className="img-entrevistas" alt="Imgen no disponible"/>
      <p className='p-entrevistas'>El que la luz nos llegue como un chorro circular lo notamos en las zonas desenfocadas, donde las formas se desdibujan, "desparramando" sus bordes por lo equivalente a la superficie del sitio por el que "tienen que entrar". Así que sí, todo lo que se desenfoca en una fotografía tiende al volverse circular...</p>
      <img src={TP84}  className="img-entrevistas" alt="Imgen no disponible"/>
      <p className='p-entrevistas'>Así que en realidad "bokeh" y sus formas circulares ocurren siempre que algo se desenfoca, aunque a veces no lo veamos o no sea especialmente evidente... y bueno... también a no ser que "cambiemos" la forma del sitio por el que entra la luz.      </p>
      <img src={TP85}  className="img-entrevistas" alt="Imgen no disponible"/>
      <p className='p-entrevistas'>Otra cosa que se necesita es que haya cierta distancia entre el plano de enfoque y el desenfoque, o lo que es lo mismo, que nuestro sujeto enfocado esté lejos de la zona que desenfocaremos. Cuanto más alejados estén mejor, más nos facilitaremos la tarea. </p>
      <img src={TP86}  className="img-entrevistas" alt="Imgen no disponible"/>
    </div>
  )
}

export default Premiumtutorial11
