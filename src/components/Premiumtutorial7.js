import React from 'react'
import TP60 from "../img/TP60.JPG"
import TP61 from "../img/TP61.jpg"
import Tu7 from "../img/Tu7.jpg"

const Premiumtutorial7 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>Fotos perfectas sin medir la luz</h1>
      <p className='p-entrevistas'>La regla 'Sunny 16' dice que para tomar una fotografía bien expuesta, en un día soleado, usa f16 y un tiempo de exposición igual a la sensibilidad ISO. Es muy útil conocerla, así que te la explico. Toca aprender otra cosa práctica que añadir a nuestros conocimientos sobre Fotografía.... La regla 'Sunny 16', que no tiene nada que ver con bronceadores o protectores solares... es más fotográfica que eso y mucho más interesante.   </p>
      <img src={Tu7}  className="img-entrevistas" alt="Imgen no disponible"/>
      <h2 className='subtitulo-entrevistas'>¿QUÉ ES LA REGLA SUNNY 16? </h2> 
         <p className='p-entrevistas'>Es una fórmula y ayuda muy útil para hacer fotos en ciertas situaciones y permite que podamos realizar fotografías correctamente expuestas (ni muy oscuras, ni muy claras), en modo manual, sin necesidad de utilizar un fotómetro, exposímetro o cualquier otro sistema de medición de la luz. Se usa desde la época de la fotografía química y es sencilla de entender y de aplicar, aunque deberás tener en cuenta alguna que otra cosa que te comento más adelante.</p>
         <p className='p-entrevistas'>Esta regla dice que: "En un día soleado, ajusta la abertura de diafragma a f/16 y el tiempo de exposición a un valor lo más similar posible al valor de la sensibilidad ISO que estés utilizando". Y para muestra un botón... La siguiente foto la he hecho el mismo día que estoy escribiendo este artículo para probar la 'Regla Sunny 16', está tomada sin utilizar ningún sistema de medición de la luz, en modo manual de manejo, tan solo ajustando los parámetros tal y como dice la fórmula...  Abertura de diafragma a f/16, sensibilidad ISO 200 y, por lo tanto, tiempo de exposición 1/200...</p>
         <img src={TP60}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>¿DE VERDAD NECESITO CONOCERLA? </h2> 
         <p className='p-entrevistas'>Pues yo creo que sí, para empezar el conocimiento no ocupa lugar y, además, es una de esas cosas sencillas de aprender y aplicar que nos pueden salvar la situación en ciertas ocasiones. El día que necesites la 'Regla Sunny 16' te acordarás de mis palabras... y mejor que recuerdes lo que te he dicho y de seguido la formula, en lugar de solo mi advertencia  Imagina que un día sales a hacer una sesión de fotos en una maravillosa cala apartada de la población. Una pareja de amigos va a hacer de modelos y está todo preparado para empezar. Pero cuando pulsas hasta la mitad el botón de disparo para activar la medición de la luz algo no va bien. Tu cámara no registra la luz de la escena y no te indica a cuántos pasos de EV está el nivel de exposición supuestamente ideal... Se ha estropeado el exposímetro...</p>
         <h2 className='subtitulo-entrevistas'>   PERO... ¿SOLO VALE PARA DÍAS SOLEADOS? </h2> 
         <p className='p-entrevistas'>Pues me alegra que me hagas esa pregunta...  Porque no, no solo vale para días soleados. Sería muy poco práctica si solo nos sirviese para una sola situación tan determinada. Vale para muchísimas más situaciones, climas y niveles de luz, pero siempre tomando como base esa fórmula original. Recordemos que la fórmula original de la regla es:  Diafragma f/16 con Obturación = ISO</p>
         <p className='p-entrevistas'>Como ves, cuanto menos luminoso es el escenario, más grande deberá ser la abertura de diafragma. Y los otros dos valores se mantendrían igual, es decir, Tiempo de Exposición = Sensibilidad ISO. Además, fíjate en la siguiente fotografía, desde el mismo sitio (mi ventana), el mismo día que estoy escribiendo este artículo y aplicando la 'Regla Sunny 16'... pero al caer la tarde...</p>
         <img src={TP61}  className="img-entrevistas" alt="Imgen no disponible"/>
    </div>
  )
}

export default Premiumtutorial7
