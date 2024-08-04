import React from 'react'
import TP115 from "../img/TP115.jpg"
import TP116 from "../img/TP116.jpg"
import TP117 from "../img/TP117.jpg"
import TP118 from "../img/TP118.jpg"
import Tu19 from "../img/Tu19.jpg"

const Premiumtutorial19 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>La resolución de imagen... Mitos y leyendas</h1>
       <h2 className='subtitulo-entrevistas'>LA RESOLUCIÓN</h2> 
       <p className='p-entrevistas'>No sé si te sonará eso de los PPP (Puntos Por Pulgada o Píxeles Por Pulgada) o lo de los DPI (Dots Per Inch)... sí, eso que te dicen de que cuando vayas a subir una foto a internet primero cambia su tamaño a 1024x768 píxeles y ponla a 72 PPP... o lo de para imprimir las fotos tienen que estar a una resolución de 300 PPP... ¿sí? ¿sabes ya a qué me refiero?</p>
       <p className='p-entrevistas'>Quizás no sabías muy bien qué era eso o para qué servía o sí lo sabes pero, como a mí me pasó en su momento, he aprendido cosas equivocadas o (la mejor opción) ya conocías el hecho del que te voy a hablar... En resumen... darle a nuestra foto (digital) cualquier cantidad de PPP o de DPI no vale para nada, no cambia nada porque es algo que sólo afecta a la hora de imprimirla (centímetros y milímetros) y lo puedes ajustar con la impresora. Quizás no te lo esperabas, pero es así. Eso que nos llevan exigiendo en muchos concursos, exposiciones e imprentas no cambia nada en nuestras fotografías cuando hablamos de píxeles.</p>
       <h2 className='subtitulo-entrevistas'>EN IMÁGENES IMPRESAS...</h2> 
       <p className='p-entrevistas'>La resolución es la cantidad de puntos de los que va a estar formada cada pulgada (2,54 centímetros) linealmente de una imagen. No sé si sabes que muchas impresoras (si no son de sublimación) imprimen línea a línea (y punto a punto), quizás si has usado alguna vez una doméstica habrás percibido las líneas con las que la máquina que hayas usado forma la imagen.</p>
       <p className='p-entrevistas'>Es decir, que cada pulgada lineal de una imagen de 300ppp estaría compuesta de 300 puntos... lo que nos hace pensar que cuantos más puntos metamos ahí, más detalle tendrá nuestra foto... Una imagen compuesta por solo 72 píxeles en una pulgada tendría teóricamente menos detalle que una con 600 píxeles... Sí... pero estamos hablando de una imagen reproducida sobre un soporte físico, una foto impresa por ejemplo y no una imagen vista en una pantalla. Hay impresoras que pueden imprimir a 1.200ppp o más si quieres, pero a veces no es necesario o es un gasto inútil de tinta en muchas ocasiones. La cantidad de puntos que necesitas imprimir en una pulgada para que la imagen se vea en buenas condiciones depende del tamaño y distancia a la que se vaya a visualizar.</p>
       <img src={TP115}  className="img-entrevistas" alt="Imgen no disponible"/>
       <h2 className='subtitulo-entrevistas'>Por ponerte un par de ejemplos...</h2> 
       <p className='p-entrevistas'>Las vallas publicitarias, de 8 metros de ancho, se suelen imprimir a 35ppp o menos porque se ven desde al menos 10 metros... piénsalo... 35 puntos cada 2 centímetros y medio... y se ven perfectas. Claro, pero como te acerques a un par de metros o menos verás los puntacos que forman la imagen.</p>
       <img src={TP116}  className="img-entrevistas" alt="Imgen no disponible"/>
       <p className='p-entrevistas'>Otro ejemplo... la próxima vez que pases por una parada del bus acércate a mirar a unos 30 centímetros la imagen publicitaria que habrá en uno de sus laterales. Verás fácilmente los puntacos que forman la imagen, esos mismos que cuando mirabas a uno o dos metros no distinguías.</p>
       <img src={Tu19}  className="img-entrevistas" alt="Imgen no disponible"/>
       <h2 className='subtitulo-entrevistas'>EN IMÁGENES DIGITALES</h2> 
       <p className='p-entrevistas'>Cualquier imagen digital está formada por una cantidad de píxeles de alto por otra cantidad de píxeles de ancho. Que son fijos a no ser que redimensionemos (cosa que ya aprenderemos hacer en el próximo artículo). Por ejemplo, una foto podría tener 200px de alto y 300px de ancho o quizás 2.000 píxeles de alto por 3.000 píxeles de ancho (en ambos casos sería una foto horizontal o apaisada).</p>
       <img src={TP117}  className="img-entrevistas" alt="Imgen no disponible"/>
       <p className='p-entrevistas'>No hay resolución en una imagen digital más allá de la que te da la pantalla. O mejor dicho... La cantidad de píxeles que vemos en una pulgada de un monitor depende de la propia resolución de la pantalla y no de la foto. Casi todos los monitores tienen 72 píxeles (la mayoría) o 96px (pantallas de más densidad) en cada pulgada.</p>
       <img src={TP118}  className="img-entrevistas" alt="Imgen no disponible"/>
       
    </div>
  )
}

export default Premiumtutorial19
