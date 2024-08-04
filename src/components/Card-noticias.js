import React from 'react'

const Cardnoticias = ({posts, loading}) => {
    if (loading){
      return <h2>Loading...</h2>
    }
    return (
    <div className=''>
        {posts.map(post => (
          <div key={post.id} className='contentNews'>
           <h1> {post.titulo}</h1>
           <div className='textP'>
            <p><strong>Fecha: </strong>{post.dia} de {post.mes} de {post.anio}</p>
            <p><strong>Tema: </strong>{post.tema}</p>
           </div>
           <p><strong>Descripcion: </strong> <br/>{post.descripcion}</p>
          </div>
        ))}
    </div>
  )
}

export default Cardnoticias