import React from 'react'
import TP54 from "../img/TP54.jpg"
import TP55 from "../img/TP55.jpg"
import TP56 from "../img/TP56.jpg"
import TP57 from "../img/TP57.jpg"
import TP58 from "../img/TP58.jpg"
import TP59 from "../img/TP59.jpg"

const Premiumtutorial6 = () => {
  return (
    <div>
      <h1 className='h1-entrevistas'>¿Cómo realizar fotos a contraluz?</h1>
      <p className='p-entrevistas-PRINCIPAL'> Tutorial para realizar fotografías a contraluz, una sencilla técnica con la que obtener fotos diferentes y no solo con el sujeto como si fuera una silueta negra. Básicamente, el contraluz es una técnica de iluminación en la que la fuente de luz (o la zona iluminada con mayor intensidad) está situada por detrás del sujeto fotografiado, ya sea con dicha fuente dentro o fuera del encuadre.</p>
      <img src={TP54}  className="img-entrevistas" alt="Imgen no disponible"/>
      <h2 className='subtitulo-entrevistas'>¿CÓMO SE HACE?</h2> 
         <p className='p-entrevistas'>¿Recuerdas que alguna vez te hayan dicho que la fuente de luz siempre debe estar detrás tuya o a un lado?  Pues aquí hacemos prácticamente lo contrario para conseguir un aspecto más "artístico"... Lo que siempre digo de que en Fotografía no se puede decir "nunca hagas esto así" o "haz siempre esto asá" para que sea correcto, porque cuando te vuelves "rebelde" resulta que los resultados pueden llegar a ser muy sorprendentes. El esquema de luz que debes montar o la situación de luz que debes buscar es básicamente la siguiente:</p>
         <img src={TP55}  className="img-entrevistas" alt="Imgen no disponible"/>
         <p className='p-entrevistas'> Te lo explico de otra manera: Piensa en que normalmente fotografiamos la parte iluminada de cualquier elemento, pero esta vez nos debemos situar de tal manera que lo que veamos sea la parte más oscura o en sombras del sujeto. La fuente de luz no tiene por qué ser el sol ni la zona más iluminada el cielo, pero es un posible (y habitual) escenario. Tampoco tienes porqué incluir la fuente de luz en tu foto, pero hacerlo potenciará el contraste entre sujeto y fondo. Eso sí, siempre debe haber bastante diferencia en la intensidad de iluminación entre ellos.</p>
         <h2 className='subtitulo-entrevistas'>Si queremos conseguir siluetas definidas y oscuras:</h2> 
         <p className='p-entrevistas'>Para lograr este aspecto debes medir la luz y ajustar los parámetros pensando en que el fondo debe estar "correctamente" expuesto (incluso ligeramente subexpuesto). Así el fondo conservará detalles, texturas y colores pero el sujeto será una silueta negra definida. Cuanto más contraste haya entre el fondo y el sujeto, más fácil será que el sujeto sea una silueta negra. Por lo tanto, selecciona el modo de medición puntual y mide la luz directamente en la fuente de luz o en el fondo y ajusta los parámetros en consecuencia.</p>
         <img src={TP56}  className="img-entrevistas" alt="Imgen no disponible"/>
         <p className='p-entrevistas'> Partiendo de la intención de que el sujeto sea una silueta negra, el nivel de detalle que quieras conservar en el fondo dependerá, por un lado, de la cantidad de contraste entre sujeto y fondo (cuanto más contraste menos detalle). Y por otro lado dependerá de cómo manejes el nivel de exposición, ya que cuanto más te acerques a una subexposición (del fondo), más detalles conservarás, incluso los colores se intensificarán. Esta técnica, realizada de este modo, en situaciones de muy alto contraste, es como se pueden conseguir las curiosas imágenes en clave bitonal.</p>
         <h2 className='subtitulo-entrevistas'>Si queremos conservar detalle en el sujeto</h2> 
         <p className='p-entrevistas'>En este caso la medición y el ajuste de los parámetros lo harás intentando que el sujeto salga "correctamente" expuesto.  Si lo haces así nuestro sujeto conservará detalles, texturas y colores, pero el fondo carecerá de estos. Al trabajar de esta manera, cuanto más contraste haya entre sujeto y fondo, más notable será la diferencia de exposición, pudiendo llegar a conseguir fotografías con fondos prácticamente blancos (totalmente sobreexpuestos) pero con nuestro "modelo" con todo lujo de detalles.</p>
         <img src={TP57}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>Si queremos conseguir detalle tanto en el sujeto como en el fondo</h2> 
         <p className='p-entrevistas'>Este es un poco más complicado, ya que hay que buscar una situación de contraluz en la que la diferencia de luminosidad no sea extrema y después medir y ajustar los parámetros para que haya un equilibrio entre el nivel de exposición del fondo y del sujeto.  En este caso es posible que debas terminar de ajustar los niveles en el revelado. Para conseguir este aspecto, el método de medición de la luz aconsejable sería el de medición matricial o evaluativa, es decir, que tiene en cuenta todo el encuadre. Medirías la luz en todo el marco de tu foto y ajustarías los parámetros para un nivel de exposición "correcta" o de 0EV.</p>
         <img src={TP58}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>Si queremos "dibujar" la silueta como si fuera una línea blanca</h2> 
         <p className='p-entrevistas'>Para este aspecto deberíamos proceder como si quisiéramos que nuestro sujeto fuese solo una silueta, es decir, midiendo la iluminación de la fuente luz en modo puntual y ajustando los parámetros en consecuencia. Pero de nuevo deberemos ajustar nuestra posición o encuadre en el escenario, de tal manera que el sujeto siga siendo iluminado por detrás, quizás ligeramente de lado. Y, además, que el fondo sea una parte oscura del escenario o que también esté a contraluz y que la fuente de luz quede fuera del encuadre.</p>
         <img src={TP59}  className="img-entrevistas" alt="Imgen no disponible"/>
       
        
    </div>
  )
}

export default Premiumtutorial6
