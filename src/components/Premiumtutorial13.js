import React from 'react'
import TP88 from "../img/TP88.jpg"
import TP89 from "../img/TP89.jpg"
import TP90 from "../img/TP90.jpg"
import TP91 from "../img/TP91.jpg"
import TP92 from "../img/TP96.jpg"
import TP93 from "../img/TP93.jpg"
import TP94 from "../img/TP94.jpg"
import TP95 from "../img/TP95.jpg"
import TP96 from "../img/TP96.jpg"
import TP97 from "../img/TP97.jpg"
import Tu13 from "../img/Tu13.jpg";

const Premiumtutorial13 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>Revelado en 10 pasos... AL GRANO</h1>
       <img src={Tu13}  className="img-entrevistas" alt="Imgen no disponible"/>
     <p className='p-entrevistas'>Te voy a explicar en unos escasos nueve minutos el proceso de revelado en 10 pasos que aprendí de mi amigo, fotógrafo y docente, Fernando Sánchez y que adapté a mi propia manera de trabajar. </p>
     <p className='p-entrevistas'>Lo que hoy vamos a aprender es un proceso de revelado completo con Lightroom, en tan sólo 10 pasos y que es una adaptación de un sistema que ya publiqué anteriormente y que me enseñó mi amigo Fernando Sánchez hace ya unos añitos. Sistema que modifiqué para encajarlo en mi flujo de trabajo y mi manera de entender el procesado básico de casi cualquier fotografía.</p>
     <h2 className='subtitulo-entrevistas'>Para qué vale este revelado en 10 pasos </h2> 
         <p className='p-entrevistas'>Antes de que te lances a revelar todas tus fotos siguiendo los pasos de este capítulo al pie de la letras, te tengo que dejar claras algunas cosas... Lo primero es que aunque este revelado es válido para muchísimas fotografías, todas las imágenes son diferentes. Sí que hay muchos puntos en común para muchas fotos distintas, pero lo que te voy a enseñar a hacer no es universal ni definitivo.</p>
         <p className='p-entrevistas'>Al revelar siguiendo este capítulo, conseguirás un flujo de trabajo muy ágil para llevar casi cualquier foto a unos valores relativamente adecuados, pero no habrá terminado ahí tu trabajo, cada foto requerirá de unos ajustes específicos que variarán mucho según lo que quieras expresar, mostrar u ocultar. Este revelado es sólo un punto de partida, quizás un buen punto de partida, sobre todo cuando estamos empezando y no sabemos muy bien lo que queremos conseguir de nuestras fotos. Porque no hay un "revelado correcto" universal y absoluto, lo "correcto" es muy relativo a la hora de expresarnos a través de nuestras fotografías y el revelado es un paso más dentro de todo nuestro flujo de trabajo, tan importante como decidir la focal, el ángulo de visión o qué dejamos fuera o qué dentro de nuestro encuadre. Quizás estos pasos sean una guía con valores, condiciones y referencias objetivas, para posteriormente ponerle nuestro corazón a las fotos, nuestra personalidad.</p>
        
         <h2 className='subtitulo-entrevistas'>Antes de comenzar a revelar</h2> 
         <p className='p-entrevistas'>Creo que no es necesario explicarte las ventajas de disparar en Raw en lugar de utilizar JPG. Si sigues este blog ya sabrás que yo siempre tiro de Raw ya que me permite mucha más flexibilidad en la toma y en el revelado.  Cosas como modificar el "Equilibro de blancos" no deterioran un archivo raw, pero suponen "estrés" a los píxeles de un JPG. Por lo tanto... antes de comenzar a revelar, te recomiendo que el archivo sea en formato Raw, que comprendas el histograma y que tengas en cuenta las claves tonales tanto en la toma como en el revelado...</p>
         <p className='p-entrevistas'>Y por último debes tener en cuenta que en este revelado de 10 pasos no se tocan herramientas de retoque, ni revelado por zonas, sólo vamos a tocar ajustes generales para tener un ben punto de partida. En capítulos posteriores del curso manejaremos herramientas como las de clonación o los pinceles o ajustes locales de color y demás. Bueno, me dejo de rollos y vamos al lío, ¿no?</p>
       
         <h2 className='subtitulo-entrevistas'>Paso 0 - Preparación </h2> 
         <p className='p-entrevistas'>Este paso es cortito y lo excluyo de los pasos propios del revelado, ya que se trata de un par de detalles antes de ponernos a trabajar con nuestra foto. Primero debes parar un momento y observar tu fotografía, la que vas a revelar, para detectar defectos y virtudes en la composición, el encuadre, la exposición y demás factores que deberías haber tenido en cuenta a la hora de realizarla. Esto es muy importante, ya que durante los pasos que te voy a ir explicando, en ocasiones, deberás tomar decisiones que dependerán de la foto que sea que reveles. Yo voy a usar una de ejemplo que me viene bien para que notes ciertas particularidades y que tiene ciertos defectos.</p>
         <img src={TP88}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>Paso 1 - Correcciones de lente</h2> 
         <p className='p-entrevistas'>Las herramientas de este panel y sus explicaciones las puedes consultar en el capítulo 24 del curso de lightroom. Este paso es bastante cortito y fácil, ya que tan sólo tenemos que activar las opciones 'Quitar la aberración cromática' y 'Activar correcciones de perfil'. En caso de que no estuviesen ya marcadas. Como en este paso no hay que tomar ninguna decisión (a no ser que Lightroom no te reconozca la cámara y lente usadas), puedes poner este panel en primer lugar en la configuración del módulo 'Revelar'. Ya sabrás que si pulsas con el botón secundario del ratón sobre el nombre de algún panel, en el popup que aparece puedes seleccionar 'Personalizar panel Revelado...'</p>
         <img src={TP89}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>Paso 2 - Reencuadrar</h2> 
         <p className='p-entrevistas'>Cómo recortar y enderezar (y todos los secretos del panel 'Superposición de recorte') lo explico en el capítulo 27. Herramientas de retoque - 'Superposición de recorte'. Este paso es de los más subjetivos y dependientes de la foto que sea que estés revelando, porque dependerá de qué quieras dejar fuera de tu encuadre original y de si necesitas o quieres enderezar o torcer la imagen. En mi caso, con la foto de ejemplo, tan solo quiero dejar fuera un pequeño trozo de costa en la parte izquierda e igualar la distancia por la izquierda y por la derecha de los barcos que están a los extremos.</p>
         <img src={TP90}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>Paso 3 - Ajustar el color inicial </h2> 
         <p className='p-entrevistas'>Aquí podríamos meternos a decidir el "tratamiento", es decir, si vamos a revelar la foto en color o en blanco y negro, pero yo soy de los que prefieren primero revelar en color y después, si así lo tenía decidido o si creo que es oportuno, pasarla a blanco y negro posteriormente. Dedicaré  algunosc a revelar en monocromo. También podríamos entretenernos eligiendo entre los múltiples "perfiles" que nos ofrece Lightroom, son muy útiles para darle un aspecto inicial a la imagen coherente con lo que después vayamos a hacer. Pero yo casi nunca lo uso, a no ser que tenga muy claro lo que voy a querer sacar de la foto. Por ello, en este revelado (básico) de 10 pasos, no vamos a meternos en ello.</p>
         <img src={TP91}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>Paso 4 - Ajustar la exposición a la clave </h2> 
         <p className='p-entrevistas'>También hay ocasiones (muy pocas) en las que una misma foto se presta a cualquiera de las claves tonales, solamente tendríamos que tocar la exposición y hacer los ajustes oportunos para obtener las diferentes variaciones Y por otro lado, puede ser que el histograma tenga dos picos, uno correspondiente a las sombras y otro a las luces. Esto sería una situación habitual en un contraluz o escenas de mucho contraste. En estos casos debemos decidirnos si tocar la exposición fijándonos en las sombras o en las luces. Dependerá de lo que busquemos y de dónde estén las zonas más importantes de la imagen.</p>
         <img src={TP92}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>Paso 5 - Ajustar el extremo derecho del histograma </h2> 
         <p className='p-entrevistas'>Fíjate en que se marcan los píxeles en rojo en la zona izquierda de mi foto, eso serían luces quemadas. Yo suelo subir el valor de 'Blancos' hasta que una pequeña zona aparece así, si al final de todo esto creo que tengo que recuperar detalle (o perder más) en esas luces lo ajustaré en consecuencia. El único caso en el que no haría esto sería si busco una "clave baja", entonces lo que haría sería dejar los 'Blancos' sin tocar o subirlos hasta cerca del extremo derecho sin que llegue a quemarse nada.</p>
         <img src={TP93}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>Paso 6 - Ajustar el extremo izquierdo del histograma </h2> 
         <p className='p-entrevistas'>Hacemos exactamente lo mismo con el extremo izquierdo del histograma, es decir, movemos el deslizador 'Negros' hasta que se empaste una pequeña zona de negros o, lo que es lo mismo, hasta que se marquen en azul los píxeles con el 'Aviso de recorte' de las sombras activado. Es decir, hasta que el histograma también toque el extremo izquierdo.         </p>
      
         <h2 className='subtitulo-entrevistas'>   Paso 7 - Ajustar las luces altas </h2> 
         <p className='p-entrevistas'>En algunas ocasiones ni siquiera será necesario tocar aquí nada, podremos saltarnos este y el siguiente paso, pero en mi caso quiero que las luces altas sean algo menos intensas, así que toco el deslizador 'Altas luces', hasta que recupero algo de detalle en una de las zonas y todo lo "iluminado" recupera texturas que antes no eran tan visibles...</p>
         <img src={TP94}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>   Paso 8 - Ajustar las sombras </h2> 
         <p className='p-entrevistas'>Las decisiones dependerán prácticamente de los mismos factores. Es decir, ¿queremos recuperar detalle de zonas oscuras que se nos han empastado demasiado o queremos oscurecer aún más esas zonas para lo contrario? En el caso de mi foto creo que es conveniente recuperar algo de detalle para que no sea tanta  la pérdida, pienso que está bien poder ver más textura en el mar. Aunque la verdad es que podría haberlo dejado tal y como está.</p>
         <img src={TP95}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'> Paso 9 - Potenciar la textura y el contraste</h2> 
         <p className='p-entrevistas'>Habrás notado que el deslizador 'Contraste' no lo hemos tocado. Es una de las cosas que diferencian este proceso de revelado del que publiqué hace tiempo. Eso se debe a que he terminado dándome cuenta de que me parece más efectivo aumentar el contraste de casi cualquier foto con el deslizador 'Claridad', que además aumenta la visibilidad de las texturas. Sólo toco contraste, si el objetivo que se usó para hacer la foto es de baja calidad. Y aún así seguramente 'Claridad' consiga un efecto más llamativo sobre la foto, además de ganar sensación de nitidez.</p>
         <img src={TP96}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'> Paso 10 - Arreglar el ruido</h2> 
         <p className='p-entrevistas'>Quizás este paso te lo puedes saltar si la foto la hiciste con un valor ISO muy bajo. Pero si no fue así o si has elevado mucho el valor de 'Claridad' en el paso anterior, es posible que el ruido por luminancia se haya hecho más evidente. Así que nos vamos al panel 'Detalle', con el selector visualizamos un zona importante para nosotros en la pequeña ventana de ese panel y ampliamos al 100% la imagen en la 'Ventana principal' dejando visible una parte de la fotografía que contenga zonas iluminadas y zonas en penumbra. Y mejor aún si además contiene pequeños detalles.</p>
         <img src={TP97}  className="img-entrevistas" alt="Imgen no disponible"/>
    </div>
  )
}

export default Premiumtutorial13
