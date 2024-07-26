import React from "react";
import "../styles/Card-preguntas.css"
import Data from "../database/Data-Cards-Preguntas";

/*const {img, nombre, pais, cargo, texto}
= DateTestimonio;*/

function Preguntas() {
  const dataComp = Data.map((data, index)=> {
    return(
      <div className="preguntas-principal" key={index}>
      <div className="contenedor-preguntas">
       
            <p className="titulo-preguntas"><strong>{data.titulo}</strong></p>
               
            <p className="texto-preguntas">{data.texto}</p>
       
       
    </div>
    </div>
    )
  })
  return(
    <div>
         <h1>¿En que podemos ayudarle?</h1>
        <div  className="contenedor-card-flex">
       
        { dataComp}
     </div>
    </div>
  );

  };

export default Preguntas;