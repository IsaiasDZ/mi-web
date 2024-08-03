import React from 'react'
import "../styles/Premium.css";
import Premium7 from "../img/Premium7.jpg";
import Alec1 from "../img/Alec1.jpg";
import Alec2 from "../img/Alec2.jpg";
import Alec3 from "../img/Alec3.jpg";
import Alec4 from "../img/Alec4.jpg";

const EntrevistasPre7 = () => {
  return (
    <div>
      <h1 className='h1-entrevistas'>FOTOGRAFO ALEC SOTH</h1>
         <h2 className='p-entrevistas-PRINCIPAL'>«La Humanidad ya está viviendo gran parte de su vida en entornos digitales», Roc Herms, autor de Postcards From Home</h2>
         <div className='Contenedor-texto-entrevistas'>
         </div>
         <div className='imagen-completa-entrevista-ENTREVISTAGENERAL'>
         <div className='imagen-completa-entrevista'>
            <img src={Premium7}  className="img-entrevistas" alt="Imgen no disponible"/>
            </div>   
         </div>   
      <h2 className='subtitulo-entrevistas'>¿Qué es y qué no es tu libro Postcards from Home?</h2>
      <p className='p-entrevistas'>Postcards From Home no es un juego, aunque para muchos, a nivel visual, pueda parecerlo. Es un viaje que empieza durante mi adolescencia, cuando pasábamos tardes enteras con mis amigos tirándonos piedras en Quake III Arena. El viaje termina en Playstation Home, el mundo virtual de Sony, y es ahí donde me doy cuenta que la humanidad ya está viviendo buena parte de su vida en entornos digitales como estos.</p>
      <h2 className='h2-entrevistas'>Si no me equivoco, comienzas a fotografiar dentro de Home en el año 2009, y tú trabajo dentro de este mundo virtual se prolonga hasta el 2015. ¿Qué te impulsa a comenzar este proyecto fotográfico?</h2>
      <p className='p-entrevistas'> Me impulsó la curiosidad, las preguntas que me venían a la cabeza mientras paseaba por ese entorno con mi cámara nueva. Uno de los primeros días que entré era fin de año y, al ver la cantidad de gente que celebraba ahí una noche como esa, me hizo entender que no me encontraba dentro de un juego. Fue en ese momento cuando decidí intentar documentar lo que sucedía en ese mundo, con la intención de comprenderlo.</p>
      <h2 className='h2-entrevistas'>El encontrarte en un mundo virtual, donde interactúas con usuarios que generalmente son creaciones y avatares imaginarios. ¿Facilita o dificulta tu trabajo como fotógrafo?</h2>
      <p className='p-entrevistas'> Aunque la virtualidad nos lo permita no creo que mayoritariamente la gente interprete roles o se invente personajes imaginarios, en todo caso este hecho no facilitaría ni dificultaría mi práctica fotográfica. Playstation Home es un mundo tridimensional dónde tengo el control del movimiento y de la mirada de mi personaje, y son estas dos variables las que me permiten mirar, moverme, encuadrar y capturar lo que me interesa.</p>
      <h2 className='h2-entrevistas'>¿Cuáles son las diferencias más destacadas al tomar fotografías en Home respecto a la realidad?</h2>
      <p className='p-entrevistas'> En Playstation Home las conversaciones no se escuchan, se ven, aparecen en forma de bocadillo encima de la cabeza. Este hecho supuso tener en mis manos la primera cámara capaz de fotografiar palabras, con la que podía documentar fotográficamente las conversaciones que mantenía con los habitantes de ese mundo. Esta fue la gran diferencia, la que hizo crecer el proyecto, ya que me permitió empezar a entrevistar a su gente.</p>
      <div className='Contenedores de imagenes'>
            <img src={Alec1}  className='CDI' alt="Imgen no disponible"/>
            <img src={Alec2}  className='CDI' alt="Imgen no disponible"/>
            <img src={Alec3}  className='CDI' alt="Imgen no disponible"/>
            <img src={Alec4}  className='CDI' alt="Imgen no disponible"/>
         </div> 
      <h2 className='h2-entrevistas'>¿Cómo reaccionan los habitantes de Home cuando conocen tu proyecto fotográfico?</h2>
      <p className='p-entrevistas'> Las reacciones no me sorprendieron, son exáctamente las mismas que suceden en el mundo físico. Algunos te dicen que porque les haces fotos. Otros muestran interés, posan y te cuentan su vida.</p>
      <h2 className='h2-entrevistas'>¿Has tenido relación con habitantes de Home fuera de la red?</h2>
         <p className='p-entrevistas'> Hemos tenido relación via mail, via skype o hablando en los foros de Playstation, pero nunca he tomado café con uno de ellos (básicamente porque viven en la otra punta del planeta). Aunque no nos hayamos visto físicamente puedo decir que en parte les conozco, que hemos vivido cosas juntos que quedarán en nuestras cabezas. </p>
         <h2 className='h2-entrevistas'>¿Hay algunas anécdotas dentro de Home que quieras compartir con los lectores de Xataka foto?</h2>
      <p className='p-entrevistas'> El proyecto entero va de eso, de historias humanas y de anécdotas. He conocido a una abuela que vive en Hawaii, que un día es un millonario, otro un gusano y otro un rapero. También a una fotógrafa de moda virtual, a una iglesia evangelista o a un grupo que ha creado una especie de secta. No me gustaría hacer un spoiler entero del libro.</p>
      <h2 className='h2-entrevistas'>Cuando Sony anuncia que cerrará los servidores de Home en el año 2015, ¿cómo afecta al proyecto?</h2>
      <p className='p-entrevistas'> Ya sabía desde el principio que Playstation Home moriría en algún momento, estos mundos virtuales caducan al ritmo frenético que avanza la tecnología. De hecho, que este libro sea un documento de un mundo que que ya no existe, en el que vivieron 17 millones de personas y del que quizá no tendríamos un buen recuerdo, es uno de los aspectos que me interesan. Creo que termina siendo un estudio antropológico, que quizá nos servirá algún día para entender como vivían estos primeros cyber aborígenes.</p>
      <h2 className='h2-entrevistas'>Home cierra y tiempo después públicas tu libro. ¿En qué anda ahora trabajando Roc Herms y a dónde se han mudado los habitantes de Home?</h2>
      <p className='p-entrevistas'> Los habitantes de Playstation Home se han mudado a alguno de los mas de 1000 mundos virtuales que hay hoy en activo, pero también viven en Facebook (que a mi entender es otro mundo virtual sin una representación gráfica tan concreta). oRcstaR, nickname de Roc Herms, está de baja después de embarazo de 5 años y 7 meses que ha sido su libro.</p>
      
    </div>
  )
}

export default EntrevistasPre7
