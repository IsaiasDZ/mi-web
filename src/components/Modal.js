import React, { useEffect } from 'react';
import "../styles/Modal.css";

const GaleriaHomeModal = ({ selectedImage, handleClose, handleNext, handlePrevious }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrevious, handleClose]);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        <div className="image-container">
          <img src={selectedImage} alt="Selected" />
        </div>
        <button className="nav-button left" onClick={handlePrevious}>&#10094;</button>
        <button className="nav-button right" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default GaleriaHomeModal;