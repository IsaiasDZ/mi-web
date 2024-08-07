import React, { useState } from 'react';
import GaleriaHomeModal from "./Modal";
/*import G5 from '../images/G5.jpg';*/
import retrato12 from "../img/retrato12.jpg"
import GaleriaHomeestilo from "../styles/GaleriaHome.css";
import Modal from "../styles/Modal.css"
import Premium20 from "../img/Premium20.jpg"
import Pedro9 from "../img/Pedro9.jpg"
import Pedro1 from "../img/Pedro1.jpg"
import Tu14 from "../img/Tu14.jpg"
import VcenteAlfonso4 from "../img/VcenteAlfonso4.jpg"
import VcenteAlfonso5 from "../img/VcenteAlfonso5.jpg"
import TP42 from "../img/TP42.jpg"
import Man3 from "../img/Man3.jpg"
import Premium11_ from "../img/Premium11_.jpg"
import E4 from "../img/E4.jpg"
import Garcia0 from "../img/Garcia0.jpg"
import TP49 from "../img/TP49.jpg"

const photos = [
 Tu14, 
 Premium20,
 Pedro9, 
 Pedro1, 
VcenteAlfonso4, 
VcenteAlfonso5, 
 TP42,
 Premium11_,
 Man3,
 E4,
 Garcia0,
 TP49
];

const GaleriaHome = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedImage(photos[index]);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(photos[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(photos[prevIndex]);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='galleryHome-space'>
  
      <h1 className='titulo'>Explora imagenes.</h1>
      <p className='texto'>Aquí podrás ver una variedad de imagenes y estilos.</p>
      <div className="gallery">
      {photos.map((photo, index) => (
        <div className="gallery-item" key={index}>
            <img src={photo} alt={`Gallery ${index}`} onClick={() => handleClick(index)} />
            </div>
        ))}
       </div>
       
      {selectedImage && (
        <GaleriaHomeModal
          selectedImage={selectedImage} 
          handleClose={handleClose} 
          handleNext={handleNext} 
          handlePrevious={handlePrevious} 
        />
      )}
    </div>

   
  );
};

export default GaleriaHome
