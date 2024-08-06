import React from "react";
import "../styles/Articles.css";
import Data from "../database/Data-article";
import { IoBookmarks } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoArrowRedoSharp } from "react-icons/io5";
import SharedButton from "./SharedButton";

const img2 =  "usuario.jpg"

function Articulos({ id}) {
  const dataComp = Data.map((data, index)=> {
    return(
      <div className="articulos-div" id={data.id} key={index}>
        <div className="box-title">
            <p className="nombre-testimonio"><strong>{data.nombre}</strong></p>
            <p className="nombre-favorito"><IoBookmarks className="book"/></p>
        </div>
        
      <div className="contenedor-testimonio">
        
            <img className="imagen-testimonio" src={require(`../img/articulos/${data.img}`)} alt="foto-de-daniel"/>
            <div className="contenedor-texto-testimonio">
                <p className="texto-testimonio">{data.texto}</p>
            </div>

      </div>
      <div className="box-buttons">
        <p><LuHeart className="icons"/>Me gusta</p>
        <p><FaRegMessage className="icons"/>Comentarios</p>
        <p><SharedButton></SharedButton></p>
      </div>
      <div className="body-comments">
        <div className="box-comments">
          <img className="img-comment" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <input class="form-control form-control-lg" type="text" placeholder="Escribe un comentario..." aria-label="Escribe un comentario..."/>
          <button class="btn btn-primary">Enviar</button>
          
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario1}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario2}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario3}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario4}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario5}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario6}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario7}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario8}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario9}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario10}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{data.comentario7}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        
               
      </div>
    </div>
    )
  })
  return(
    <div style={{ marginBottom: "15px" }}>
     { dataComp}
    </div>
  );

  };

export default Articulos;