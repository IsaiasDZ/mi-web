import "../styles/Galeria.css"
import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import { Data1, Data2, Data3, Data4, Data5 } from '../database/Data-gallery';
import { IoMdCloseCircle } from "react-icons/io";
import SharedButton from "../components/SharedButton"

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
          <p className='titulo-estilo'>Retrato</p>
          <div className='imagenes'>
            <div className="oscurecer">
            <Gallery Data={Data5} onClick={onClick} />
            </div>
          </div>
        </div>
        <div className='encabezado'>
          <p className='titulo-estilo'>Paisajes</p>
          <div className='imagenes'>
            <div className="oscurecer">
            <Gallery Data={Data4} onClick={onClick} />
            </div>
          </div>
        </div>
        <div className='encabezado'>
          <p className='titulo-estilo'>Plantas</p>
          <div className='imagenes'>
            <div className="oscurecer">
              <Gallery Data={Data1} onClick={onClick} />
            </div>
          </div>
        </div>
        <div className='encabezado'>
          <p className='titulo-estilo'>Estructuras</p>
          <div className="oscurecer">
              <Gallery Data={Data3} onClick={onClick} />
            </div>
        </div>
        <div className='encabezado'>
          <p className='titulo-estilo'>Animales</p>
          <div className="oscurecer">
              <Gallery Data={Data2} onClick={onClick} />
            </div>
        </div>
      </div>
    </div>
  )
};

const FixedComponent = ({ onClose, image }) => {
  const p = `http://localhost:3000/static/media/paisaje1.daa9cc8cb8784f1a4619.jpg`;
  return (
    <div className="fixed-component">
      <button onClick={onClose} className='button-close'><IoMdCloseCircle /></button>
      <div className="tamaño-carousel">
      <div className="carousel-inner">     
      <div id="carouselExample" className="carousel slide">
        
       
          <div className="carousel-item active">
            <img id="imgId" src={require(`../img/galeria/${image}`)} className="d-block w-100" alt="Selected" />
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
      <SharedButton href={p} tipoS="true"/>
    </div>
  );
};

const Overlay = ({ onClick }) => {
  return <div className="overlay" onClick={onClick}></div>;
};

export default App;
