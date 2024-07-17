import React from "react";
//import "../styles/DropNotifi.css";
import Data from "../database/Data-notifi";


/*const {img, nombre, pais, cargo, texto}
= DateTestimonio;*/

function DropNotifi() {
  const dataComp = Data.map((data,index)=> {
    return(
      <div className="DropNotifi" key={index} >
         
      <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require("../img/notificacio-drop.png")} alt="foto-de-daniel"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{data.nombre}</strong> en {data.pais}</p>
        <p className="texto-testimonio">{data.texto}</p>
      </div>

    </div>
    </div>
    )
  })
  return(
    <div className="contenedor-drop">
      <div className="notificaciones">
        <p href="#/action-3" className="texto-notificacion"><strong>Notificaciones |</strong></p>
       
        </div>
     { dataComp}
    </div>
  );

  };

export default DropNotifi;