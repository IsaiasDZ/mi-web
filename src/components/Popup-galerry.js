import React, { useState } from 'react';
import '../styles/Formulario-Concurso.css'; // Asegúrate de importar el archivo CSS
import Cards from "../components/Cards-Concursos"
import { IoMdCloseCircle } from "react-icons/io";
import { Data1, Data2, Data3 } from '../database/Data-gallery';
import Gallery from './Gallery';

// Componente de la card
const Card = ({ onClick }) => {
  return (
    <div onClick={onClick} className='contenido-tutoriales'>
      <Gallery Data={Data1} className="img"/>
    </div>
  );
};

// Componente modal o en blanco
const FixedComponent = ({ onClose }) => {
  return (
    <div className="fixed-component">
        <button onClick={onClose} className='button-close'><IoMdCloseCircle /></button>

    </div>
  );
};
// Componente de overlay
const Overlay = ({ onClick }) => {
  return <div className="overlay" onClick={onClick}></div>;
};

// Componente principal
const App = () => {
  const [isFixedComponentVisible, setFixedComponentVisible] = useState(false);

  const handleCardClick = () => {
    setFixedComponentVisible(true);
  };

  const handleCloseFixedComponent = () => {
    setFixedComponentVisible(false);
  };

  return (
    <div className="app">
      <Card onClick={handleCardClick} />
      {isFixedComponentVisible && (
        <>
          <Overlay onClick={handleCloseFixedComponent} />
          <FixedComponent onClose={handleCloseFixedComponent} />
        </>
      )}
    </div>
  );
};

export default App;