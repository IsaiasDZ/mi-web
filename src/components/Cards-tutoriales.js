import React, { useState } from 'react';
import "../styles/Button-filter.css"
import "../styles/Cards.css"
import Data from "../database/Data-Card-Tutoriales"
import { FaFilter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


const FilterButton = ({ setFilter }) => {
    const [showFilters, setShowFilters] = useState(false);
    const categories = ["Iluminación", "Edición", "Paisajes", "Retratos", "Nocturna", "Macro", "Composición", "Productos", "Blanco y Negro", "Eventos"];
    const difficulties = ["Básico", "Intermedio", "Avanzado"];
  
    const toggleFilters = () => setShowFilters(!showFilters);
  
    const handleFilterClick = (filterType, filterValue) => {
      setFilter(prevFilters => ({
        ...prevFilters,
        [filterType]: filterValue,
      }));
      setShowFilters(false); // Close the filters menu after selecting
    };
    const handleResetFilters = () => {
      setFilter({ categoria: '', dificultad: '' });
      setShowFilters(false); // Close the filters menu after resetting
    };
  
    return (
      <div className='buttonsFilt'>
        <button onClick={toggleFilters} class="btn btn-dark"><FaFilter /> Escoger Filtros</button>
        <button class="btn btn-dark" onClick={handleResetFilters}><FaEye /> Mostrar Todos</button>
        {showFilters && (
          <div className="filters-menu">
            <div>
              <h4>Categoría</h4>
              {categories.map(category => (
                <button  class="btn btn-outline-dark" key={category} onClick={() => handleFilterClick('categoria', category)}>
                  {category}
                </button>
              ))}
            </div>
            <div>
              <h4>Dificultad</h4>
              {difficulties.map(difficulty => (
                <button class="btn btn-outline-dark" key={difficulty} onClick={() => handleFilterClick('dificultad', difficulty)}>
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };


  
const Card = () => {
    const [filters, setFilters] = useState({ categoria: '', dificultad: '' });

  // Aquí puedes aplicar los filtros a tus datos
  const filteredData = Data.filter(item => {
    return (
      (!filters.categoria || item.categoria === filters.categoria) &&
      (!filters.dificultad || item.dificultad === filters.dificultad)
    );
  });

    //const dataComp = Data.map((data, index)=> {
  return (
    <div className='Cards-Center'>
      <div className='button-filter'>
        <FilterButton setFilter={setFilters} className="button-filter-pos"/>
       
      </div>
          
        {filteredData.map((item, index) => (
          <div className="card" key={index}>
            <img src={require(`../img/${item.img}`)} className="card-img-top" alt="Header Home Card" />
              <div className="card-body" key={index}>
                <h1 className="card-titulo">{item.titulo}</h1>
                <p className="card-text">{item.texto}</p>
                <p><strong>Categoría:</strong> {item.categoria}</p>
                <p><strong>Dificultad:</strong> {item.dificultad}</p>
              </div>
            </div>
        ))}
      
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