import React, { useState } from 'react';
import '../styles/Formulario-Concurso.css'; // Asegúrate de importar el archivo CSS
import Cards from "../components/Cards-Concursos"
import { IoMdCloseCircle } from "react-icons/io";

// Componente de la card
const Card = ({ onClick }) => {
  return (
    <div  className='contenido-tutoriales'>
      <div onClick={onClick}>   <Cards  /></div>
   
    </div>
  );
};

// Componente modal o en blanco
const FixedComponent = ({ onClose }) => {
  return (
    <div className="fixed-component">
      <button onClick={onClose} className='button-close'><IoMdCloseCircle /></button>
      <div className='titulo-form'>
        <h1>Cuestionario interativo</h1>
        <p>Para poder participar debe rellenar todos los campos y enviar su fotografia con respecto al concurso.</p>  
      </div>
      <div className='formular'>
      <div className='formulario'>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Primer Nombre</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresar nombre..."/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Primer apellido</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresar apellido..."/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Teléfono</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="+504 0000-0000"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Ingresar comentario..." rows="3"></textarea>
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">Subir imagen</label>
          <input class="form-control" type="file" id="formFile"/>
          
        </div>
        < button type="submit" class="btn btn-dark">Enviar</button>
        </div>
       
      <img src={require("../img/ganadores.png")}/>
      </div>
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