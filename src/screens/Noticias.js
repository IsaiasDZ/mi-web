import React from 'react'
import Imagen from "../img/noticias.jpg"
import HeroSection2 from '../components/HeroSection2'
import Cardnoticias from '../components/Card-noticias'
import { useState, useEffect } from 'react'
import axios from "axios"

const Noticias = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge, setPostsPerPage] = useState(10);

  useEffect(() => {
      const fetchPosts = async () =>{
          setLoading(true);
          const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
          fetchPosts();
          fetchPosts();
          fetchPosts();
          fetchPosts();
          fetchPosts();
          fetchPosts();
          setPosts(res.data);
          setLoading(false);
        }
        
  }, []);
  console.log(posts)
  return (
    <div className='container-1'>
      <div className='hero2'>

      <HeroSection2

        subtitulo="Exploraa Opiniones y Reseñas de los Mejores Libros para Fotógrafos de Todos los Niveles"
        
        imagen={Imagen}
          alt="Noticias"z
          titulo="Noticias"
          />
      </div>

      <div className='contenido-tutoriales'>
        <Cardnoticias/>
      </div> 
     </div>
      
  )
}

export default Noticias