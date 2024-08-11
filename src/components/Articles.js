import React, { useState } from 'react';
import "../styles/Articles.css";
import Data from "../database/Data-article";
import { IoBookmarks } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoArrowRedoSharp } from "react-icons/io5";
import SharedButton from "./SharedButton";
import { FaFilter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const img2 =  "usuario.jpg"
const FilterButton = ({ setFilter }) => {
  const [showFilters, setShowFilters] = useState(false);
  const categories = ["Fotografía de Naturaleza", "Técnicas de Fotografía", "Fotografía Especializada"];

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleFilterClick = (filterType, filterValue) => {
    setFilter(prevFilters => ({
      ...prevFilters,
      [filterType]: filterValue,
    }));
    setShowFilters(false); // Close the filters menu after selecting
  };
  const handleResetFilters = () => {
    setFilter({ categoria: ''});
    setShowFilters(false); // Close the filters menu after resetting
  };

  return (
    <div className='buttonsFilt'>
      <button onClick={toggleFilters} class="btn btn-dark"><FaFilter /> Escoger Filtros</button>
      <button class="btn btn-dark" onClick={handleResetFilters}><FaEye /> Mostrar Todos</button>
      {showFilters && (
        <div className="filters-menu">
          <div>
            <h4>Categorias</h4>
            {categories.map(category => (
              <button  class="btn btn-outline-dark" key={category} onClick={() => handleFilterClick('categoria', category)}>
                {category}
              </button>
            ))}
          </div>
          
        </div>
      )}
    </div>
  );
};



const Articulos = () => {
  const [filters, setFilters] = useState({ categoria: ''});

// Aquí puedes aplicar los filtros a tus datos
const filteredData = Data.filter(item => {
  return (
    (!filters.categoria || item.categoria === filters.categoria)
  );
});

  
    return(
      <div>
      <div className='button-filter' style={{marginLeft:"120px"}}>
        <FilterButton setFilter={setFilters} className="button-filter-pos"/>
       
      </div>
        {filteredData.map((item, index) => (
      <div className="articulos-div"  key={index}>
        <div className="box-title">
            <p className="nombre-testimonio"><strong>{item.nombre}<IoBookmarks className="book"/></strong></p>
            
        </div>
        
      <div className="contenedor-testimonio">
        
            <img className="imagen-testimonio" src={require(`../img/articulos/${item.img}`)} alt="foto-de-daniel"/>
            <div className="contenedor-texto-testimonio">
                <p className="texto-testimonio">{item.texto}</p>
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
          <p className="box-comentario">{item.comentario1}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario2}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario3}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario4}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario5}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario6}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario7}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario8}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario9}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario10}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        <div className="comentario1">
        <img className="img-respuesta" src={require(`../img/${img2}`)} alt="foto-de-daniel"/>
          <h1>Usuario</h1>
          <p className="box-comentario">{item.comentario7}</p>
          <p className="botones"><IoArrowRedoSharp />Responder</p>
        </div>
        
               
      </div>
    </div>
        ))}
        </div>
        )
  

  };

export default Articulos;