import React from 'react'
import TP76 from "../img/TP76.jpg"
import TP77 from "../img/TP77.jpg"
import TP78 from "../img/TP78.jpg"
import TP79 from "../img/TP79.jpg"
import Tu10 from "../img/Tu10.jpg"
import TP80 from "../img/TP80.jpg"
import TP81 from "../img/TP81.jpg"

const Premiumtutorial10 = () => {
  return (
    <div>
         <h1 className='h1-entrevistas'>Desaturado selectivo o Cut-Out</h1>
         <img src={Tu10}  className="img-entrevistas" alt="Imgen no disponible"/>
         <p className='p-entrevistas'>Vamos a aprender una llamativa técnica fotográfica, el desaturado selectivo o cut-out. A medio camino entre la fotografía en color y la de blanco y negro. Es el conocido como "desaturado selectivo" o "cut-out". Además vamos a ver cómo hacerlo tanto en Lightroom, como en Camera Raw y en Photoshop. </p>
         <h2 className='subtitulo-entrevistas'>Qué es el "desaturado selectivo" o "cut-out"</h2> 
         <p className='p-entrevistas'>Esta técnica está a medio camino entre las fotografías en blanco y negro y las de color. Ya que, básicamente es pasar a monocromo una imagen, pero dejando uno de los colores visibles. Es una técnica que estuvo de moda un tiempo, como todas las modas pasajeras tiene sus fanáticos y sus detractores... si te soy sincero, estoy entre los segundos, ya que no me gusta especialmente. Seguro que has visto alguna vez el típico póster de algún lugar de Londres en el que el único color que hay es el rojo de la cabina...</p>
         <p className='p-entrevistas'>Pues esto es un "desaturado selectivo" o "cut-out". Obviamente es una técnica que tiene que pasar sí o sí por el ordenador, ya que se hace durante el revelado y que pasa a considerarse retoque. No te lo digo porque sea algo negativo (ni positivo), ya sabrás que a mi no me tiembla el pulso si considero que tengo que modificar una foto (soy "purista con derecho a roce"), pero quizás tú seas "purista del todo" y estas técnicas te dan repelús o algo.</p>
         <p className='p-entrevistas'>Es una manera muy evidente, quizás "fácil", de destacar un elemento sobre el resto. Aunque por "fácil" que sea, se requiere de una mirada adecuada, ya que realmente no se trata de cambiarle el color a nada, sino de desaturar todos los colores menos el que pertenece al elemento principal de nuestras fotos. </p>
         <img src={TP76}  className="img-entrevistas" alt="Imgen no disponible"/> 
         <h2 className='subtitulo-entrevistas'>DESATURADO SELECTIVO EN LIGHTROOM:</h2> 
         <p className='p-entrevistas'>Una vez allí, tenemos varias maneras diferentes de realizar el "cut-out", con una de ellas usaríamos la herramienta 'Pincel' principalmente y con la otra casi que solo necesitaríamos recurrir al panel 'HSL/Color'. Vamos a ver ambas...</p>
         <img src={TP77}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>CUT-OUT CON EL PINCEL DE AJUSTE</h2> 
         <p className='p-entrevistas'>Una vez hechos todos los ajustes que necesitemos hacer para llevar la foto en cuestión al punto que más nos guste, pasaríamos a realizar el desaturado selectivo. Seleccionaríamos la herramienta 'Pincel de ajuste' (acceso directo en la letra K de nuestro teclado) y bajaríamos por el panel que se nos despliega hasta encontrar el deslizador llamado 'Saturación'...</p>
         <img src={TP78}  className="img-entrevistas" alt="Imgen no disponible"/>
         <p className='p-entrevistas'>Hay que bajar ese deslizador a su mínimo valor (-100). Y ahora procederíamos a pintar... o mejor dicho... a despintar nuestra foto. Clickeando y arrastrando el pincel por todas las zonas en las que quisiéramos eliminar el color.</p>
         <img src={TP79}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>CUT-OUT CON EL PANEL 'HSL-COLOR'</h2> 
         <p className='p-entrevistas'>El otro método que también es muy fácil de aplicar es recurrir al panel 'HSL / Color'... Recuerda que siempre partimos de una fotografía ya revelada.</p>
         <img src={TP80}  className="img-entrevistas" alt="Imgen no disponible"/>
         <p className='p-entrevistas'>Pulsaríamos sobre la opción 'Saturación' para que nos aparezcan los deslizadores correspondientes. Ahora tendríamos que ajustar todos los deslizadores a -100, exceptuando el correspondiente al color que queremos conservar. Así los colores que estuvieran al mínimo desaparecerían de la fotografía y solo dejaríamos el que nos interesase...</p>
         <img src={TP81}  className="img-entrevistas" alt="Imgen no disponible"/>
         
    </div>
  )
}

export default Premiumtutorial10
