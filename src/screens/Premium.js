import React from 'react';
import "../styles/Premium.css";
import { Link } from 'react-router-dom';
import premiump1 from '../img/premiump1.jpg';
import Premium1 from "../img/Premium1.jpg";
import Premium2 from "../img/Premium2.jpg";
import Premium3E from "../img/Premium3E.jpg";
import Premium5 from "../img/Premium5.jpg";
import Premium6 from "../img/Premium6.jpg";
import Premium7 from "../img/Premium7.jpg";
import Premium8 from "../img/Premium8.jpg";
import Premium9 from "../img/Premium9.jpg";
import Premium10 from "../img/Premium10.jpg";
import Premium11_ from "../img/Premium11_.jpg";
import Premium12 from "../img/Premium12.jpg";
import Premium13 from "../img/Premium13.jpg";
import Premium14 from "../img/Premium14.jpg";
import Premium15 from "../img/Premium15.jpg";
import Premium16 from "../img/Premium16.jpg";
import Premium17 from "../img/Premium17.jpg";
import Premium18 from "../img/Premium18.jpg";
import Premium19 from "../img/Premium19.jpg";
import Premium20 from "../img/Premium20.jpg";
import T4 from "../img/T4.jpg";
import Tu1 from "../img/Tu1.jpg";
import Tu2 from "../img/Tu2.jpg";
import Tu3 from "../img/Tu3.jpg";
import Tu4 from "../img/Tu4.jpg";
import Tu5 from "../img/Tu5.jpg";
import Tu6 from "../img/Tu6.jpg";
import Tu7 from "../img/Tu7.jpg";
import Tu8 from "../img/Tu8.jpg";
import Tu9 from "../img/Tu9.jpg";
import Tu10 from "../img/Tu10.jpg";
import Tu11 from "../img/Tu11.jpg";
import Tu12 from "../img/Tu12.jpg";
import Tu13 from "../img/Tu13.jpg";
import Tu14 from "../img/Tu14.jpg";
import Tu15 from "../img/Tu15.jpg";
import Tu16 from "../img/Tu16.jpg";
import Tu17 from "../img/Tu17.jpg";
import Tu18 from "../img/Tu18.jpg";
import Tu19 from "../img/Tu19.jpg";
import Tu20 from "../img/Tu20.jpg";


const EntrevistasPre = () => {
const entrevistasPre = [
  {
    id:1,
    image: Premium1,
    title: 'Martina Matencio',
  },
  {
    id:2,
    image: Premium2,
    title: 'David Catá',
  
  },
  {
    id:3,
    image: Premium3E,
    title: 'Esteban Toro',
  
  },
  {
    id:4,
    image: T4,
    title: 'Tino Soriano',
  
  },
  {
    id:5,
    image: Premium5,
    title: 'Félix Sánchez Arrazola',
  
  },
  {
    id:6,
    image: Premium6,
    title: 'Daniel Mayrit',
  
  },
  {
    id:7,
    image: Premium7,
    title: 'Alec Soth',
  
  },
  {
    id:8,
    image: Premium8,
    title: 'Toni Amengual',
  
  },
  {
    id:9,
    image: Premium9,
    title: 'Javier Martínez',
  
  },
  {
    id:10,
    image: Premium10,
    title: 'Daniel Fernández Pérez', 
  },
  {
    id:11,
    image: Premium11_,
    title: 'Mandragora', 
  },
  {
    id:12,
    image: Premium12,
    title: 'David Argindar', 
  },
  {
    id:13,
    image: Premium13,
    title: 'Paola María Sánchez', 
  },
  {
    id:14,
    image: Premium14,
    title: 'Rebeca Amado', 
  },
  {
    id:15,
    image: Premium15,
    title: 'Carlos Andres Cruz', 
  },
  {
    id:16,
    image: Premium16,
    title: 'Willian Acosta', 
  },
  {
    id:17,
    image: Premium17,
    title: 'Marek Grote', 
  },
  {
    id:18,
    image: Premium18,
    title: 'Felipe Díaz', 
  },
  {
    id:19,
    image: Premium19,
    title: 'Pedro Alvarez', 
  },
  {
    id:20,
    image: Premium20,
    title: 'Ibai Acevedo', 
  },

];

const premiumtutoriales = [
  {
    id:1,
    image: Tu1,
    title: 'Fotografía abstracta',
  },
  {
    id:2,
    image: Tu2,
    title: 'La textura en la fotografia',
  
  },
  {
    id:3,
    image: Tu3,
    title: 'Simuladores de cámara',
  
  },
  {
    id:4,
    image: Tu4,
    title: 'Fotografiar Superluna',
  
  },
  {
    id:5,
    image: Tu5,
    title: 'Fotografía la hora dorada y hora azul',
  
  },
  {
    id:6,
    image: Tu6,
    title: 'Realizar fotos a contraluz',
  
  },
  {
    id:7,
    image: Tu7,
    title: 'Fotos perfetas sin medir la luz',
  
  },
  {
    id:8,
    image: Tu8,
    title: 'Explora los estilos pictóricos',
  
  },
  {
    id:9,
    image: Tu9,
    title: 'Comprender la curva de tonos',
  
  },
  {
    id:10,
    image: Tu10,
    title: 'Desaturado selectivo o cut-out', 
  },
  {
    id:11,
    image: Tu11,
    title: 'Qué es el bokeh y como hacerlo', 
  },
  {
    id:12,
    image: Tu12,
    title: 'Revelando en blanco y negro', 
  },
  {
    id:13,
    image: Tu13,
    title: 'Revelando en 10 pasos', 
  },
  {
    id:14,
    image: Tu14,
    title: 'Acento de color', 
  },
  {
    id:15,
    image: Tu15,
    title: 'Revelando retratos en lightroom', 
  },
  {
    id:16,
    image: Tu16,
    title: 'Como limpiar el sensor', 
  },
  {
    id:17,
    image: Tu17,
    title: 'Introduce a los niños en la fotografía', 
  },
  {
    id:18,
    image: Tu18,
    title: 'Como cambiar el tamaño en las fotografías', 
  },
  {
    id:19,
    image: Tu19,
    title: 'Resolución de la imagen-mitos y leyendas', 
  },
  {
    id:20,
    image: Tu20,
    title: 'Filtros ND-Tipos y características', 
  },

];

return (
  <div>
    <h2 className='Titulo-pREP'>PixelGallery</h2>
    <div>
     <h2 className='Subtitulo-pREP'>FOTOGRAFOS</h2>
 <div className="Contenedor-pREP">
  <div className="movieP-list">
          </div>{entrevistasPre.map(entrevistasPre => (
              <div className="cardP">
                   <div className='cardP-image '>
               <img src={entrevistasPre.image}/>  
             </div>
             <div className="cardP-content">
               <div key={entrevistasPre.id} >   <div className="cardP-content h2">
               <h2>ENTREVISTA CON <span>EL FOTOGRAFO</span></h2>
                  <Link to={`/entrevistasPre/${entrevistasPre.id}`} ><h2>{entrevistasPre.title}</h2></Link>    
                  </div>
            </div>
            </div>   
          </div>
          ))}     
 </div>  
           
<h2 className='Subtitulo-pREP'>TUTORIALES</h2>
       <div className="Contenedor-pREP">
        <div className="movieP-list">
                </div>{premiumtutoriales.map(premiumtutoriales => (
                    <div className="cardP">
                         <div className='cardP-image '>
                     <img src={premiumtutoriales.image}/>  
                   </div>
                   <div className="cardP-content">
                     <div key={premiumtutoriales.id} >   <div className="cardP-content h2">
<<<<<<< HEAD
                     <h2>CONOCE <span> SOBRE</span></h2>   
=======
                     <h2>CONOCE <span> SOBRE</span></h2>
>>>>>>> 8cad04fd0103590b24131b24d17544ce97f92100
                        <Link to={`/premiumtutoriales/${premiumtutoriales.id}`}><h2>{premiumtutoriales.title}</h2></Link>    
                        </div>
                  </div>
                  </div>   
                </div>
                ))}
       </div> 
        </div>  
        </div>     
);

}
export default EntrevistasPre;