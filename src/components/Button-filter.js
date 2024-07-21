import React, { useState } from 'react';
//import "../styles/Button-filter.css"
import Data from "../database/Data-Card-Tutoriales"
import { FaFilter } from "react-icons/fa6";

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

  return (
    <div>
      <button onClick={toggleFilters}><p>a</p>Escogser Filtros</button>
      {showFilters && (
        <div className="filters-menu">
          <div>
            <h4>Categoría</h4>
            {categories.map(category => (
              <button key={category} onClick={() => handleFilterClick('categoria', category)}>
                {category}
              </button>
            ))}
          </div>
          <div>
            <h4>Dificultad</h4>
            {difficulties.map(difficulty => (
              <button key={difficulty} onClick={() => handleFilterClick('dificultad', difficulty)}>
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [filters, setFilters] = useState({ categoria: '', dificultad: '' });

  // Aquí puedes aplicar los filtros a tus datos
  const filteredData = Data.filter(item => {
    return (
      (!filters.categoria || item.categoria === filters.categoria) &&
      (!filters.dificultad || item.dificultad === filters.dificultad)
    );
  });

  return (
    <div>
      <FilterButton setFilter={setFilters} />
      <div className="courses">
        {filteredData.map((item, index) => (
          <div key={index} className="course">
            <img src={item.img} alt={item.titulo} />
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
            <p><strong>Categoría:</strong> {item.categoria}</p>
            <p><strong>Dificultad:</strong> {item.dificultad}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
