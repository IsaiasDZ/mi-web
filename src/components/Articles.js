import React from "react";
import "../styles/Articles.css";
import Data from "../database/Data";
import { IoBookmarks } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";


function Articulos() {
  const dataComp = Data.map((data, index)=> {
    return(
      <div className="articulos-div" key={index}>
        <div className="box-title">
            <p className="nombre-testimonio"><strong>{data.nombre}</strong> en {data.pais}</p>
            <p className="nombre-favorito"><IoBookmarks className="book"/></p>
        </div>
        
      <div className="contenedor-testimonio">
        
            <img className="imagen-testimonio" src={require(`../img/${data.img}`)} alt="foto-de-daniel"/>
            <div className="contenedor-texto-testimonio">
                <p className="texto-testimonio">{data.texto}</p>
            </div>

      </div>
      <div className="box-buttons">
        <p><LuHeart className="icons"/>Me gusta</p>
        <p><FaRegMessage className="icons"/>Comentarios</p>
        <p><FaRegShareFromSquare className="icons"/>Compartir</p>
      </div>
      <div className="body-comments">
        <div className="box-comments">
          <img className="img-comment" src={require(`../img/${data.img}`)} alt="foto-de-daniel"/>
          <input class="form-control form-control-lg" type="text" placeholder="Escribe un comentario..." aria-label="Escribe un comentario..."/>
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

export default Articulos;