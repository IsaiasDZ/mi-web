import React from "react";
import "../styles/Testimonio.css";
import Data from "../database/Data";

/*const {img, nombre, pais, cargo, texto}
= DateTestimonio;*/

function Testimonio() {
  const dataComp = Data.map((data, index)=> {
    return(
      <div className="testimonio-div" key={index}>
      <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../img/${data.img}`)} alt="foto-de-daniel"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{data.nombre}</strong> en {data.pais}</p>
        <p className="cargo-testimonio">{data.cargo}</p>
        <p className="texto-testimonio">{data.texto}</p>
      </div>

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