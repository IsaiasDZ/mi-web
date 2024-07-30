import "../styles/Galeria.css"
import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import { Data1, Data2, Data3 } from '../database/Data-gallery';
import { IoMdCloseCircle } from "react-icons/io";

const App = () => {
  const [isFixedComponentVisible, setFixedComponentVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (image) => {
    setSelectedImage(image);
    setFixedComponentVisible(true);
  };

  const handleCloseFixedComponent = () => {
    setFixedComponentVisible(false);
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <Galeria onClick={handleCardClick} />
      {isFixedComponentVisible && (
        <>
          <Overlay onClick={handleCloseFixedComponent} />
          <FixedComponent onClose={handleCloseFixedComponent} image={selectedImage} />
        </>
      )}
    </div>
  );
};

const Galeria = ({ onClick }) => {
  return (
    <div className='gallery-content'>
      <div className='gallery-center'>
        <h1 className='titulo-princ'>Galeria: encuentra una variedad de imagenes y estilos</h1>
        <div className='encabezado'>
          <p className='titulo-estilo'>Paisajes</p>
          <div className='imagenes'>
            <div className="oscurecer">
              <Gallery Data={Data1} onClick={onClick} />
            </div>
          </div>
        </div>
        <div className='encabezado'>
          <p className='titulo-estilo'>Estructuras</p>
        </div>
        <div className='encabezado'>
          <p className='titulo-estilo'>Animales</p>
        </div>
      </div>
    </div>
  )
};

const FixedComponent = ({ onClose, image }) => {
  return (
    <div className="fixed-component">
      <button onClick={onClose} className='button-close'><IoMdCloseCircle /></button>
      <div className="tamaño-carousel">
      <div className="carousel-inner">     
      <div id="carouselExample" className="carousel slide">
        
       
          <div className="carousel-item active">
            <img src={require(`../img/galeria/${image}`)} className="d-block w-100" alt="Selected" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
  );
};

const Overlay = ({ onClick }) => {
  return <div className="overlay" onClick={onClick}></div>;
};

export default App;
