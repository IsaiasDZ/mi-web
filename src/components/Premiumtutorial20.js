import React from 'react'
import TP119 from "../img/TP119.jpg"
import TP120 from "../img/TP120.jpg"
import TP121 from "../img/TP121.jpg"
import TP122 from "../img/TP122.jpg"
import TP123 from "../img/TP123.jpg"
import TP124 from "../img/TP124.jpg"
import TP125 from "../img/TP125.jpg"

const Premiumtutorial20 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>Filtros ND - Tipos y características</h1>
       <p className='p-entrevistas'>Son unos accesorios utilísimos con los que podemos conseguir efectos tan espectaculares como el famoso "Efecto seda" de las fotografías de larga exposición. En esta entrada vamos a conocer los tipos y sus características... Sé que son unos accesorios muy atractivos, debido a sus múltiples e interesantes utilidades, pero muy desconocidos para la mayoría de los que empezamos. Una de sus aplicaciones más llamativas es el de ayudarnos a lograr el "Efecto seda" en las tomas de larga exposición, pero tienen más usos, como igualar la iluminación o permitir usar aberturas mayores cuando las condiciones de luz no lo facilitan o hacer "desaparecer" a la gente..</p>
       <h2 className='subtitulo-entrevistas'>Qué son los Filtros ND</h2> 
       <p className='p-entrevistas'>Los Filtros ND (Neutral Density) o Filtros de densidad neutra, son unos accesorios (de cristal o resina) que se acoplan a la parte frontal del objetivo (con una rosca o un portafiltros) y que bloquean (en todo el encuadre o en una zona) parte de la luz que llega al sensor (como si de unas gafas de sol se tratase).</p>
       <img src={TP119}  className="img-entrevistas" alt="Imgen no disponible"/>
       <h2 className='subtitulo-entrevistas'>Los hay de resina y los hay de cristal</h2> 
       <p className='p-entrevistas'>Los de cristal son (normalmente) de más calidad y no crean dominantes de color, son muy resistentes a los arañazos pero son más frágiles contra los golpes. También suelen ser más caros.</p>
       <p className='p-entrevistas'>Los de resina son de menos calidad, aunque últimamente la diferencia es apenas apreciable. Los de este material y de peor calidad crean dominantes de color (verde o morada). Son más resistentes a los golpes pero más delicados ante arañazos. Suelen ser más baratos que los de cristal.</p>
       <h2 className='subtitulo-entrevistas'>Qué es eso de la dominante de color...</h2> 
       <p className='p-entrevistas'>Los filtros no dejan de ser un cristal (o plástico) a través del cual pasa la luz. No sólo eso, si no que además deben bloquear parte de esa luz, como hacen las gafas de sol, así que están oscurecidos (total o en parte). En el caso de los filtros (buenos) de cristal eso no es un problema, pues se trata de un material de un más oscuro, un gris totalmente neutro, que no tiene ningún color. Pero en el caso de los filtros de resina se trata de un tintado que no siempre es totalmente neutro, a veces tiene cierto tono verdoso o morado, que a medida que es más oscuro o de peor calidad y/o combinamos varios, se hace más evidente.</p>
       <img src={TP120}  className="img-entrevistas" alt="Imgen no disponible"/>
       <h2 className='subtitulo-entrevistas'>Filtros con cobertura completa y filtros degradados</h2> 
       <p className='p-entrevistas'>Como te he dicho los filtros deben filtrar parte de la luz, como si de unas gafas de sol se tratase. Pero existen dos tipos de manera de bloquearla, por un lado están los que oscurecen por igual toda su superficie y por otro los que son más oscuros por una zona y transparentes o casi transparentes por otra.</p>
       <img src={TP121}  className="img-entrevistas" alt="Imgen no disponible"/>
       <h2 className='subtitulo-entrevistas'>Filtros con cobertura completa</h2> 
       <p className='p-entrevistas'>Los que bloquean la luz en toda su superficie por igual valen para oscurecer la imagen en todo el encuadre completo.</p>
       <img src={TP122}  className="img-entrevistas" alt="Imgen no disponible"/>
       <p className='p-entrevistas'>Seguro que alguna vez al realizar una fotografía de paisaje ha resultado que la exposición en el terreno era correcta pero se te ha quemado el cielo, al ser este mucho más luminoso. O que has obtenido una buena exposición en el cielo pero el terreno se te ha quedado demasiado oscuro.       </p>
       <img src={TP123}  className="img-entrevistas" alt="Imgen no disponible"/>
       <p className='p-entrevistas'>Situaríamos la parte densa del filtro coincidiendo con la zona más luminosa del encuadre, así esta se oscurecería e igualaría en nivel de luminosidad con la zona más oscura. Con lo que podríamos tener una imagen correctamente expuesta en todo el encuadre a pesar de las diferencias de luz. </p>
       <div className='Contenedores de imagenes'>
            <img src={TP124}  className='CDI' a alt="Imgen no disponible"/>
            <img src={TP125}  className='CDI' a alt="Imgen no disponible"/>
         </div> 
         <p className='p-entrevistas'>Cuanto más densa sea la zona oscura del filtro más diferencia de luminosidad podremos equilibrar. Dentro de los filtros degradados hay varios tipos de transición de la zona densa a la transparente, cada uno con una utilidad diferente, vamos a verlos... </p>
      
    </div>
  )
}

export default Premiumtutorial20
