import React from 'react'
import TP70 from "../img/TP70.jpg"
import TP71 from "../img/TP71.jpg"
import TP72 from "../img/TP72.jpg"
import TP73 from "../img/TP73.jpg"
import TP74 from "../img/TP74.jpg"
import TP75 from "../img/TP75.jpg"

const Premiumtutorial9 = () => {
  return (
    <div>
       <h1 className='h1-entrevistas'>La curva de tonos para revelar fotografías</h1>
      <img src={TP70}  className="img-entrevistas" alt="Imgen no disponible"/>
      <p className='p-entrevistas'>Vamos a comprender, por fin, a utilizar la Curva de Tonos, una poderosa herramienta para revelar y retocar nuestras fotografías. Me han pedido en varias ocasiones que explique cómo funciona y cómo se utiliza la herramienta curvas, que está siempre presente en todos los programas de revelado y retoque de fotografías. Así que sigamos aprendiendo sobre fotografía. </p>
      <h2 className='subtitulo-entrevistas'>¿QUÉ ES LA CURVA DE TONOS? </h2> 
         <p className='p-entrevistas'>La curva de tonos es una herramienta para ajustar las imágenes en cuanto a su nivel de exposición, contraste, colores, saturación y tonos... Sí, para todo eso (y más) sirve una "simple" curva. Su representación y funcionamiento es prácticamente idéntico en todos los programas que la incluyen, así que, aunque yo voy a usar capturas de Adobe Lightroom Classic, en la práctica podrían ser de cualquier otro. Se trata de una gráfica en la que tenemos representados todos los tonos de la imagen que estemos tratando, de izquierda a derecha, empezando por los negros, siguiendo por los oscuros, medios, claros y llegando a los blancos. Igual que en un histograma, de hecho en muchos programas incluyen un histograma como fondo de la gráfica.</p>
         <img src={TP71}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>CÓMO SE USA LA CURVA</h2> 
         <p className='p-entrevistas'>A diferencia de otras herramientas, una vez comprendido cómo se utiliza, el control sobre el resultado se amplía con muchas posibilidades y con mucha precisión, además de que nos permite realizar ciertos efectos sobre la imagen que te explicaré más adelante en este tutorial. El uso de la curva se basa en poner y quitar "Puntos de control" y cambiar la posición de éstos modificando a su vez la forma de la curva y por consiguiente los tonos de la fotografía. Puedes clickear en cualquier sitio de la línea diagonal y se creará un nuevo "Punto de control", puedes añadir tantos como quieras.</p>
         <img src={TP72}  className="img-entrevistas" alt="Imgen no disponible"/>
         <p className='p-entrevistas'>En Lightroom debes clickear sobre él con el botón secundario del ratón y te aparecerá una ventana con dos opciones "Eliminar punto de control" y "Acoplar curva", con la primera eliminarías el punto en cuestión y con la segunda opción eliminarías todos los puntos y la línea volvería a su forma original en diagonal.  En otros programas se puede hacer de manera similar, normalmente simplemete tienes que seleccionar uno de los puntos y pulsar la tecla de "Retroceso" en el teclado físico.</p>
         <h2 className='subtitulo-entrevistas'>USAR EL SELECTOR</h2> 
         <p className='p-entrevistas'>Si modificas directamente la curva puedes tener el problema de no saber qué grupo de tonos en tu fotografía se verán afectados exactamente, aunque la experiencia irá solucionando ese inconveniente. Por suerte, los señores que diseñan los programas de revelado suelen incluir una forma más de modificar la curva, el selector.</p>
         <img src={TP73}  className="img-entrevistas" alt="Imgen no disponible"/>
         <h2 className='subtitulo-entrevistas'>USO "HABITUAL" DE LA CURVA</h2> 
         <p className='p-entrevistas'>Pongo lo de habitual entrecomillado porque realmente la curva la usas como te dé la gana y para lo que te dé la gana siempre dentro de sus funciones, lógicamente. Pero le pongo ese adjetivo porque suele usarse para trabajar la exposición y contraste por zonas o, mejor dicho, por tonos de similares. Normalmente y por defecto, al trastear en la curva afectamos a los tres canales de color de la imagen al mismo tiempo.</p>
         <p className='p-entrevistas'>Por eso digo que la función "habitual" de la curva sería oscurecer o aclarar un grupo de tonos concreto y los cercanos en menor medida. Para esta forma de usar la curva prefiero hacerlo a través del "Selector" (que te he explicado un poco más arriba). Así puedo seleccionar el tono determinado que quiero modificar.  Para que me entiendas... En la fotografía que estoy usando de ejemplo el cielo está casi quemado, así que quiero intentar oscurecerlo un poco. Me pillo el "Selector", lo desplazo hasta una zona muy clara del cielo, clickeo (se me crea un punto en la curva), voy a la curva y arrastro ese punto hacia abajo (para oscurecer)...</p>
         <img src={TP74}  className="img-entrevistas" alt="Imgen no disponible"/>
         <p className='p-entrevistas'>Al hacerlo se ha oscurecido proporcionalmente toda la fotografía, así que quiero aclarar las zonas oscuras. Para hacerlo vuelvo a pillar el "Selector" y lo llevo a una zona oscura de la foto, clickeo sobre ella para que se me cree un nuevo punto en la curva.  Después desplazo ese punto hacia arriba (para aclarar) y consigo llevar otros tonos de la foto a donde yo quería...</p>
         <h2 className='subtitulo-entrevistas'>RECORTAR BLANCOS Y NEGROS</h2> 
         <p className='p-entrevistas'>No solo se puede modificar la diagonal original convirtiéndola en una curva, también podemos modificar la inclinación y altura de la misma, produciendo unos efectos peculiares en la imagen. Empiezo por explicarte lo que pasa en el extremo izquierdo, que corresponde con los tonos negros...Si arrastramos el extremo hacia arriba, ya sabes que estaríamos aclarando, así que al tratarse de la parte más a la izquierda estaríamos convirtiendo los negros en grises...</p>
         <img src={TP75}  className="img-entrevistas" alt="Imgen no disponible"/>
        
    </div>
  )
}

export default Premiumtutorial9
