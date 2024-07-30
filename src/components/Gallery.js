
import React from "react";
import "../styles/Testimonio.css";


function Gallery(props) {
  const dataComp = props.Data.map((data, index) => {
    return (
      <div key={index} onClick={() => props.onClick(data.img)}>
        <img className="imagen-testimonio" src={require(`../img/galeria/${data.img}`)} alt={`foto-${index}`} />
      </div>
    );
  });

  return (
    <div className="contenedor-galeria-flex">
      {dataComp}
    </div>
  );
}

export default Gallery;