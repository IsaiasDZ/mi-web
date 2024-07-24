import React from 'react'
import Data from "../database/Data-Card-Concursos.js"
import "../styles/Cards.css"

const Card = () => {
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
  <div className='Cards-Center'>
   { dataComp}
  </div>
);

};
export default Card