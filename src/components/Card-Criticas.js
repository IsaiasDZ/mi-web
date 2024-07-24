import React from "react";
import "../styles/Card-Criticas.css"
import Data from "../database/Data-Criticas";

/*const {img, nombre, pais, cargo, texto}
= DateTestimonio;*/

function Testimonio() {
  const dataComp = Data.map((data, index)=> {
    return(
      <div className="criticas-principal" key={index}>
      <div className="contenedor-criticas">
        <div className="contenedor-texto">
            <p className="titulo-crt"><strong>{data.titulo}</strong> por <strong>{data.nombre}</strong></p>
            <div className="detalles-crt">
                <p className="autor-crt">- Autor: {data.nombre}</p>
                <p className="año-crt">- Año: {data.anio}</p>
                <p className="paginas-crt">- Páginas: {data.paginas}</p>
                <p className="editorial-crt">- Editorial: {data.editorial}</p>
            </div>    
            <p className="texto-crt">{data.texto}</p>
        </div>
        <img className="imagen-ctr" src={require(`../img/${data.img}`)} alt="foto-de-daniel"/>
    </div>
    </div>
    )
  })
  return(
    <div>
     { dataComp}
    </div>
  );

  };

export default Testimonio;