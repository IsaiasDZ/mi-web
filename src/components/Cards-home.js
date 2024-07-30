import React from 'react'
import Data from "../database/Data-Card-Home";
import "../styles/Cards.css"

const Card = (prop) => {
    const dataComp = Data.map((data, index)=> {
  return (
    <div className="card"  key={index}>
    <img src={require(`../img/${data.img}`)} className="card-img-top" alt="Header Home Card" />
    <div className="card-body">
    <h1 className="card-titulo">{data.titulo}</h1>
    <p className="card-text">{data.texto}</p>
    </div>
     </div>
  )
})
return(
  <div className='card-home-title'>
    <h1 className='titulo'>Navega por nuestro sitio web.</h1>
    <p className='texto'>Aquí encontrarás una variedad de elementos relacionados a la fotografia.</p>
    <div className='Cards-Center'>
    { dataComp}
    </div>
  </div>
);

};
export default Card