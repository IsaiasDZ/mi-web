import React from "react";
//import "../styles/DropNotifi.css";
import Data from "../database/Data-favorite";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";

/*const {img, nombre, pais, cargo, texto}
= DateTestimonio;*/

function DropNotifi() {
  const dataComp = Data.map((data,index)=> {
    return(
      <div className="DropNotifi" key={index} >
         
      <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require("../img/favoritos.png")} alt="foto-de-daniel"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{data.titulo}</strong></p>
        <p className="texto-testimonio">{data.texto}</p>
      </div><p className="buttonsFav"><RiDeleteBin5Fill/></p>

    </div>
    </div>
    )
  })
  return(
    <div className="contenedor-drop">
      <div className="notificaciones">
        <p href="#/action-3" className="texto-notificacion"><strong>Favoritos</strong> <IoMdAddCircle className="add-fav"/></p>
       
        </div>
     { dataComp}
    </div>
  );

  };

export default DropNotifi;