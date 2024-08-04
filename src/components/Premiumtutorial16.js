import React from 'react'
import TP108 from "../img/TP108.jpg"
import TP109 from "../img/TP109.jpg"

const Premiumtutorial16 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>¿Cómo limpiar el sensor de nuestra cámara de fotos?</h1>
       <h2 className='subtitulo-entrevistas'>Tutorial de cómo realizar el mantenimiento y limpieza del sensor </h2> 
         <p className='p-entrevistas'>Uno de los problemas que siempre acaban apareciendo en nuestras cámaras son las manchas en el sensor. En algunos casos implican sólo el uso del “tampón de clonar” en nuestras fotos, pero en otros nos pueden llegar a arruinar una buena imagen o hacernos trabajar en el ordenador más de lo deseable, así que hoy te voy a enseñar a solucionarlo sin tener que pasar por el (normalmente caro) servicio técnico. Vamos a aprender algo que a mucha gente le da miedo y que es parte del mantenimiento que deberíamos hacerle a nuestras cámaras, se trata de la limpieza del sensor…</p>
         <p className='p-entrevistas'>Yo te voy a enseñar cómo lo hago yo con mis cámaras, te voy a mostrar cómo utilizo varias herramientas diferentes, todas son válidas para realizar la limpieza, unas son más adecuadas para un tipo de manchas y otras son mejores para otras, a unos les gusta más una a otros les gusta más otra... unas son más caras, otras más baratas.... y todas son más o menos fáciles de conseguir, te pondré enlace (de afiliado) a cada una. El caso es que yo lo hago de esta manera, me da buen resultado y nunca he tenido problemas con ninguna de mis cámaras con respecto al sensor y su limpieza…</p>
         <p className='p-entrevistas'> Si posees un mínimo de habilidad dudo mucho que tengas algún tipo de problema, el procedimiento es fácil, con un poco de cuidado nada corre peligro.  Pero si crees que tiras más hacia la torpeza, tienes "alergia a la tecnología" o eres una persona poco segura trasteando dentro de las máquinas, no lo hagas, te recomiendo que lleves la cámara a algún servicio técnico… Que sí, que suele ser caro, pero más caro es tener que comprar una cámara nueva.</p>
         <h2 className='subtitulo-entrevistas'>CÓMO SON LAS MANCHAS DEL SENSOR</h2> 
         <p className='p-entrevistas'>Las manchas en el sensor normalmente son motas de polvo que debido a la electricidad estática se quedan pegadas a éste. No las confundas con la suciedad en el visor... Si el visor está sucio, verás manchas, pero no aparecerán en la imagen, si el sensor es lo que está sucio, no verás esas marcas en el visor pero sí se mostrarán en la foto. En la fotografía, al visualizarla, las manchas del sensor se reflejan como pequeños círculos, normalmente más oscuros que la zona en la que están. Suelen verse con más facilidad en superficies sin textura de la imagen, por ejemplo un cielo sin nubes, y se hacen más evidentes cuando la foto está hecha con diafragmas cerrados.</p>
         <img src={TP108}  className="img-entrevistas" alt="Imgen no disponible"/>
         <p className='p-entrevistas'>Hay otro tipo de manchas que son de grasa o de otros materiales un pelín más difíciles de limpiar, pero no imposible, sólo hay que insistir un poco más. Éstas aparecen en la imagen como puntos negros. A veces también tiene forma de "gusano gris" (creo que es la comparación más cercana), se trataría entonces de pequeñas pelusas, son las más fáciles de quitar. Incluso puedes hacerlas desaparecer (temporalmente) con el mecanismo de autolimpieza de algunas cámaras.</p>
         <h2 className='subtitulo-entrevistas'>ALGUNAS PRECAUCIONES PREVIAS</h2> 
         <p className='p-entrevistas'>La mejor manera de limpiar el sensor de la cámara es no necesitar limpiarlo… desgraciadamente todavía no se ha inventado un sistema realmente eficaz para mantener el interior de nuestras cámaras libre de suciedad.  Incluso las más caras, esas profesionales de alta gama, súperselladasquetecagas, en algún momento necesitarán pasar por una limpieza interna. Seguramente más de una vez, dependiendo del uso que se les dé. Hay quien cree que una manera de evitar que entre polvo dentro de la cámara y que se acumule en el sensor es no cambiar de objetivo, pero no, eso tampoco servirá. Piensa que si tienes un objetivo zoom, al usarlo, hay partes que salen y entran, haciendo un efecto parecido al de un fuelle, que mete y saca aire y junto a éste las indeseables partículas de polvo. Así que lo único que podemos hacer es retrasar en la medida de lo posible el inevitable paso por la limpieza. </p>
         <h2 className='subtitulo-entrevistas'>Aprende a cambiar el objetivo con la cámara hacia abajo</h2> 
         <p className='p-entrevistas'>La ley de la gravedad existe y ésta nos ayudará a que nada se deposite en el sensor si apunta hacia abajo… piensa en tu casa… en polvo está en el suelo, no en el techo.</p>
         <h2 className='subtitulo-entrevistas'>Sé rápido</h2> 
         <p className='p-entrevistas'>Aprende a cambiar de objetivo de una manera más o menos rápida… no quiero decir que te conviertas en el Billly el Niño de la fotografía, pero sí que tengas cierta soltura, velocidad y eficacia al cambiar de objetivo.  Para ello, practica.</p>
         <h2 className='subtitulo-entrevistas'>Cambia el objetivo en un ambiente limpio</h2> 
         <p className='p-entrevistas'>AEvita cambiar de objetivo en la calle, intenta hacerlo dentro de un portal o algún local, cuanto más limpio mejor. Por supuesto, ni se te ocurra exponer el interior de la cámara mientras estás en medio de una ventisca de arena, una tormenta o un mar enfurecido.  Mejor en sitios de climatología relajada.</p>
         <img src={TP109}  className="img-entrevistas" alt="Imgen no disponible"/>
    </div>
  )
}

export default Premiumtutorial16
