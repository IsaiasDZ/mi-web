import React from 'react'
import TP101 from "../img/TP101.jpg"
import TP102 from "../img/TP102.jpg"
import TP103 from "../img/TP103.jpg"
import TP104 from "../img/TP104.jpg"
import TP106 from "../img/TP106.jpg"
import TP107 from "../img/TP107.jpg"

const Premiumtutorial15 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>Revelando retratos en Lightroom</h1>
       <h2 className='subtitulo-entrevistas'>'Curso de Lightroom'</h2> 
         <p className='p-entrevistas'>La semana pasada realicé una demostración de cómo se puede aplicar el  revelado en 10 pasos a casi cualquier tipo de fotografía y dejarlas prácticamente terminadas, a falta de algunos toques y retoques. Además de ver en vivo cómo voy manejando Lightroom, iba explicando lo motivos de las decisiones y las razones de cada ajuste.  Pero por si eso fuera poco, la participación de los asistentes al directo, a través del chat, enriquecían mucho más las explicaciones, iban planteando sus dudas y aportando sus puntualizaciones e íbamos resolviéndolo todo en tiempo real, sin olvidar las paridas que soltamos de vez en cuando que ayudan a echar un buen rato mientras aprendes, el buen rollo habitual me mola tela.  El caso es que en esta ocasión aprenderemos a procesar fotografías de retrato. Manejaremos muchas de las herramientas descritas en esas entregas del curso, así que si ya las conoces de antemano, eso que llevarás de ventaja y te enterarás mejor de todo. Estas son algunas de las fotografías que revelaremos, puedes ver la diferencia del antes y el después...</p>
         <div className='Contenedores de imagenes'>
            <img src={TP101}  className='CDI' a alt="Imgen no disponible"/>
            <img src={TP102}  className='CDI' a alt="Imgen no disponible"/>
         </div> 
         <p className='p-entrevistas'>Estas son algunas de las fotografías que revelaremos, puedes ver la diferencia del antes y el después...</p>
         <div className='Contenedores de imagenes'>
            <img src={TP103}  className='CDI' a alt="Imgen no disponible"/>
            <img src={TP104}  className='CDI' a alt="Imgen no disponible"/>
         </div> 
         <p className='p-entrevistas'>Por supuesto, te invito a que te suscribas a mi canal, ya que como habrás visto, poco a poco lo voy llenando de contenido muy interesante y útil para seguir creciendo en la Fotografía.</p>
         <div className='Contenedores de imagenes'>
            <img src={TP106}  className='CDI' a alt="Imgen no disponible"/>
            <img src={TP107}  className='CDI' a alt="Imgen no disponible"/>
         </div> 
         <p className='p-entrevistas'></p>
         
    </div>
  )
}

export default Premiumtutorial15
