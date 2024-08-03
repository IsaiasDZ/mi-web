import React from 'react'
import "../styles/Premium.css";
import Premium15 from "../img/Premium15.jpg";
import Rosa from "../img/Rosa.jpg";
import Carlos1 from "../img/Carlos1.jpg";
import Carlos2 from "../img/Carlos2.jpg";
import Carlos3 from "../img/Carlos3.jpg";
import Carlos4 from "../img/Carlos4.jpg";
import Carlos5 from "../img/Carlos5.jpg";
import Carlos6 from "../img/Carlos6.jpg";
import Carlos7 from "../img/Carlos7.jpg";

const EntrevistasPre15 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>FOTOGRAFO CARLOS ANDRES CRUZ</h1>
         <h2 className='subtitulo-entrevistas'>¡Conversemos sobre Fotografía de Perros!</h2>
         <div className='Contenedor-texto-entrevistas'>
         <p className='p-entrevistas-PRINCIPAL'> Ser fotógrafo de perros es desarrollar un oficio inmensamente satisfactorio, y a su vez, exigente, siempre diferente, divertido pero expuesto.</p>
         </div>
         <div className='imagen-completa-entrevista-ENTREVISTAGENERAL'>
         <div className='imagen-completa-entrevista'>
            <img src={Premium15}  className="img-entrevistas" alt="Imgen no disponible"/>
            </div>   
         </div>   

         <p className='p-entrevistas'> Es increíble descubrir cómo la fotografía hoy está más de moda que nunca; los artistas la estamos pasando muy bien disfrutando de un momento potente de la historia en el cual tenemos herramientas extraordinarias para crear las imágenes que gravitan en nuestra imaginación, además de los medios para difundir nuestro trabajo y la seguridad de garantizar resultados increíbles a nuestros clientes y espectadores. </p>
         <img src={Carlos1}  className="imagen-completa-entrevista" alt="Imgen no disponible"/>
         <h2 className='h2-entrevistas'> ROSA'S FIRST DAY AS CEO</h2>
         <p className='p-entrevistas'> ¡Atención amantes de los perros de todo el mundo! Les presentamos con orgullo el nuevo libro de Betsy y Rosa: una encantadora historia escrita por Pablo Cartaya y bellamente ilustrada por La Fotoperrería. Sumérgete en las aventuras de Rosa, una encantadora golden retriever, en su primer día como CEO (Canine Executive Officer) de un hotel. Este libro, lleno de diversión y emoción, está disponible por solo US$50, y todos los fondos recaudados serán destinados a obras benéficas. ¡No te lo pierdas! Para adquirir tu ejemplar, llámanos al +1 305 531-6100, envía un correo electrónico a concierge@thebetsyhotel.com o visítanos en 1440 Ocean Drive, South Beach, Miami, FL. The Betsy Hotel. #DogLovers #NuevoLibro #BetsyyRosa #HistoriasCaninas #FotografiaSolidaria </p>
         <img src={Rosa}  className="imagen-completa-entrevista" alt="Imgen no disponible"/>
        <h2 className='h2-entrevistas'>TERTULIAS</h2>
        <p className='p-entrevistas'> ¡Descubre la magia de nuestras tertulias fotográficas! Aquí, la pasión por la fotografía se fusiona con el arte de conversar, creando un espacio vibrante de aprendizaje y creatividad. Únete a nuestra comunidad y sumérgete en interesantes charlas sobre imagen, técnica y experiencias que despertarán tu inspiración y potenciarán tu producción artística. ¡Conéctate ahora y comparte tu pasión por la fotografía con otros apasionados como tú!</p>
        <img src={Carlos3}  className="imagen-completa-entrevista" alt="Imgen no disponible"/>
        <h2 className='h2-entrevistas'> ENFOQUE CONECTA</h2>
         <p className='p-entrevistas'>¡Que emoción! Postulé a La Fotoperrería en la convocatoria Enfoque Conecta, y fui seleccionado junto a otros 99 fotógrafos de diferentes categorías y trayectorias. Esta es una plataforma muy interesante porque proyecta y visualiza nuestro oficio en el ámbito de la industria fotográfica mundial.</p>
         <img src={Carlos2}  className="imagen-completa-entrevista" alt="Imgen no disponible"/>
         <p className='p-entrevistas'>Viven sin obstáculos combinando sus tres grandes pasiones: las motos, Colombia y sus dos perros. Una suma de elementos que parecerían antagónicos pero que los ha llevado de aventura en aventura gracias al amor y a su compromiso de responsabilidad con sus compañeros de ruta: Chili y Cooper. Por ellos, con ellos y para ellos han adaptado sus imponentes motos Royal Enfield y lograr así disfrutar la libertad que produce la carretera.</p>
         <p className='p-entrevistas'>Es el desafío de una manada motorizada que no le teme a las inclemencias del tiempo ni a las distancias para cumplir sus metas. Carlos Andrés Cruz, Christian Gaviria y Gustavo Montaño los siguieron en uno de sus capítulos por la Sabana de Bogotá para captar con sus lentes la emoción de vivir a pleno motor la felicidad que produce compartir los sueños más osados y el cariño más puro de sus fieles escuderos.</p>
         <div className='Contenedores de imagenes'>
            <img src={Carlos6}  className='CDI' alt="Imgen no disponible"/>
            <img src={Carlos7}  className='CDI' alt="Imgen no disponible"/>
            <img src={Carlos5}  className='CDI' alt="Imgen no disponible"/>
            <img src={Carlos4}  className='CDI' alt="Imgen no disponible"/>
         </div> 
         
    </div>
  )
}

export default EntrevistasPre15
