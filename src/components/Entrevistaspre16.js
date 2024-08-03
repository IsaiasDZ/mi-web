import React from 'react'
import "../styles/Premium.css";
import Premium16 from "../img/Premium16.jpg";
import Acosta1 from "../img/Acosta1.jpg";
import Acosta22 from "../img/Acosta22.jpg";
import Acosta4 from "../img/Acosta4.jpg";
import Acosta5 from "../img/Acosta5.jpg";
import Acosta3 from "../img/Acosta3.jpg";

const EntrevistasPre16 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'> FOTOGRAFO WILLIAN ACOSTA</h1>
         <h2 className='subtitulo-entrevistas'>Entrevistamos a William Acosta, quién ha desarrollado un proyecto de macrofotografía llamado Fantasy Macro, el cual debes conocer.</h2>
         <div className='Contenedor-texto-entrevistas'>
         <p className='p-entrevistas-PRINCIPAL'>  Empezó su aprendizaje fotográfico con SieteFotógrafos; adicionalmente ha hecho cursos con Zona Cinco e hizo un diplomado de fotografía con la Universidad Nacional de Colombia. </p>
         </div>
         <div className='imagen-completa-entrevista-ENTREVISTAGENERAL'>
         <div className='imagen-completa-entrevista'>
            <img src={Premium16}  className="img-entrevistas" alt="Imgen no disponible"/>
            </div>   
         </div>   

         <p className='p-entrevistas'> Es amante de la naturaleza, tiene un proyecto de fotografía macro llamado Fantasy Macro, por el cual ha ido ganado reconocimiento. El proyecto nació con el diplomado que realizó en la Universidad Nacional. Allí le dijeron que debía presentar un proyecto personal, la cual haría parte de una exposición al final del curso. Decidió hacer fotografía macro porque siempre le había gustado, para lo cual investigó y se fue preparando para poder realizarla.William es casado con dos hijos, a quienes ha vinculado a su pasión por la fotografía. Su hija de 12 años ha comenzado a hacer fotografía macro y disfruta de ir a tomar fotos con su papá. </p>
         <img src={Acosta1}  className="imagen-completa-entrevista" alt="Imgen no disponible"/>
         <h2 className='h2-entrevistas'> ¿Cómo te iniciaste en la fotografía?</h2>
         <p className='p-entrevistas'> Tengo una empresa de telecomunicaciones y manejo la página de internet de la misma. No quería robar fotos o utilizar las mismas imágenes que todo el mundo, así que decidí comenzar a tomarlas por mi mismo. Compré una cámara profesional y comencé a utilizarla en modo automático para hacer las fotografías de mis productos. También empecé a utilizarla para grabar videos en los cuales explico cómo funcionan y cómo manejarlos, pues muchos de mis clientes llegaban con preguntas similares. Así que podría decir que también soy youtuber gracias a la empresa. Con el tiempo me di cuenta de la necesidad de tomar un curso y aprender a utilizar la cámara para hacer mejores fotografías y videos. Mis primeros cursos los hice con SieteFotógrafos, lo cual me permitió complementar mi práctica fotográfica y aprender a manejar mejor las cosas.</p>
         <div className='Contenedores de imagenes'>
         <img src={Acosta22}  className="imagen-completa-entrevista" alt="Imgen no disponible"/>
         <h2 className='h2-entrevistas'> ¿Qué es lo más importante que debe saber un fotógrafo?   </h2>
         <p className='p-entrevistas'> Un fotógrafo de la naturaleza debe respetar y conservar la naturaleza. Hay fotógrafos de naturaleza que manipulan bruscamente al bicho que están fotografiando y lo dañan. No vale la pena una buena foto a que pierda la vida el animal. También creo que la luz es clave. Sin luz no hay nada. Es bueno entenderla y saberla manejar.</p>
         <img src={Acosta5}  className="imagen-completa-entrevista" alt="Imgen no disponible"/>
         <h2 className='h2-entrevistas'> ¿Cómo influyó SieteFotógrafos en tu carrera de fotografía?   </h2>
         <p className='p-entrevistas'> Hice varios talleres con SieteFotógrafos, estos fueron: Fotografía Erótica –de la cual sacamos una revista–, Strobist: iluminación con flashes de mano, Fotografía de Producto y Entrenamiento Visual en dos ocasiones. Fue la puerta de para comenzar en el campo de la fotografía. En gran medida en mi vida todo gira en torno a la fotografía. Me gusta escuchar a otras personas y aprender de ellos, me gusta mucho más que leer. Los talleres que tomé me gustaron porque pude escuchar a personas que tenían experiencia y aprender de ellas. </p>
         <div className='Contenedores de imagenes'>
            <img src={Acosta4}  className='CDI' alt="Imgen no disponible"/>
            <img src={Acosta3}  className='CDI' alt="Imgen no disponible"/>
            
         </div> 
         </div> 
    </div>
  )
}

export default EntrevistasPre16
