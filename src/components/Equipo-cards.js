import React, { useState } from 'react';
import "../styles/Button-filter.css"
import "../styles/Cards.css"
import Data from "../database/Data-equipo"
import { FaFilter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import "../styles/Equipo-cards.css"


const FilterButton = ({ setFilter }) => {
    const [showFilters, setShowFilters] = useState(false);
    const categories = ["Cámaras", "Lentes", "Accesorios"];
  
    const toggleFilters = () => setShowFilters(!showFilters);
  
    const handleFilterClick = (filterType, filterValue) => {
      setFilter(prevFilters => ({
        ...prevFilters,
        [filterType]: filterValue,
      }));
      setShowFilters(false); // Close the filters menu after selecting
    };
    const handleResetFilters = () => {
      setFilter({ tipo: ''});
      setShowFilters(false); // Close the filters menu after resetting
    };
  
    return (
      <div className='buttonsFilt'>
        <button onClick={toggleFilters} class="btn btn-dark"><FaFilter /> Escoger Filtros</button>
        <button class="btn btn-dark" onClick={handleResetFilters}><FaEye /> Mostrar Todos</button>
        {showFilters && (
          <div className="filters-menu">
            <div>
              <h4>Tipo</h4>
              {categories.map(category => (
                <button  class="btn btn-outline-dark" key={category} onClick={() => handleFilterClick('tipo', category)}>
                  {category}
                </button>
              ))}
            </div>
            
          </div>
        )}
      </div>
    );
  };


  
const Card = () => {
    const [filters, setFilters] = useState({ tipo: ''});

  // Aquí puedes aplicar los filtros a tus datos
  const filteredData = Data.filter(item => {
    return (
      (!filters.tipo || item.tipo === filters.tipo)
    );
  });

    //const dataComp = Data.map((data, index)=> {
  return (
    <div className='Cards-Center'>
      <div className='button-filter'>
        <FilterButton setFilter={setFilters} className="button-filter-pos"/>
       
      </div>
      <div className="equipo-contenedor">
        {filteredData.map((item, index) => (
         <div className="equipo-principal" key={index}>
         <div className="contenedor-equipo">
           <div className="contenedor-texto-equipo">
               <p className="titulo-equipo"><strong>{item.titulo}</strong></p>
               <p className="tipo-equipo">Tipo: {item.tipo}</p>
               <p className="texto-equipo">{item.texto}</p>
           </div>
           <img className="imagen-equipo" src={require(`../img/equipo/${item.img}`)} alt="foto-de-equipos"/>
       </div>
       </div>
        ))}
      </div>
    </div>
  );
/*
return(
  <div className='Cards-Center'>
   { filteredData}
  </div>
);
*/
};
export default Card


