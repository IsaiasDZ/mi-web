import React from 'react'
import Imagen from "../img/noticias.jpg"
import HeroSection2 from '../components/HeroSection2'
import Cardnoticias from '../components/Card-noticias'
import Pagination from '../components/Pagination'
import "../styles/Noticias.css"
import { useState, useEffect } from 'react'
import axios from "axios"

const Noticias = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
      const fetchPosts = async () =>{
          setLoading(true);
          const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
          setPosts(res.data);
          setLoading(false);
        };

        fetchPosts();
        
  }, []);
  
  //get posts current
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber)=>setCurrentPage(pageNumber);

  return (
    <div className='container-1'>
      <div className='hero2'>

      <HeroSection2

        subtitulo="Explora Opiniones y Reseñas de los Mejores Libros para Fotógrafos de Todos los Niveles"
        
        imagen={Imagen}
          alt="Noticias"
          titulo="Noticias"
          />
      </div>

        <div className='contenedor-noticias'>
          <div className='elements'>
          <h1>Página Actual: {currentPage}</h1>
            <Cardnoticias posts={currentPosts} loading={loading}/>
            <Pagination className="paginationPag" postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
          </div>
        </div> 
     </div>
      
  )
}

export default Noticias