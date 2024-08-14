import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'; 
import HeroSection from "../components/HeroSection"
import Testimonio from '../components/Testimonio'
import "../styles/Home.css"
import Card from '../components/Cards-home';
import GaleriaHome from '../components/GaleriaHome';

const Home = () => {
  const{isAuthenticated}=useAuth0()
  return (
    <div className='contenedr-principal'>
      <HeroSection/>
      
      {
        isAuthenticated ? 
        (
          <>
          <div className='cards-home'>
          <img src={require("../img/revista.png")} class="img-top" alt="..."/>
            <Card/>
            
            
            <div className='card-home-title'>
                <GaleriaHome/>
              </div>
            <div className='contenedor-carousel'>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="6000">
                <img src={require("../img/articulosHome.jpg")} class="img-carousel" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Articulos</h5>
                  <p>Lee articulos y comenta tu experiencia.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="6000">
                <img src={require("../img/concursosHome.jpg")} class="img-carousel" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Concursos</h5>
                  <p>Navega entre concursos y sigue aprendiendo.</p>
                </div>
              </div>

              <div class="carousel-item" data-bs-interval="6000">
                <img src={require("../img/equipoHome.jpg")} class="img-carousel" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Equipo</h5>
                  <p>Busca reseñas de equipos.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>



          <div className='card-horiz'>
            <img src={require("../img/form.png")} class="img" alt="..."/>
            <div className="contenedorTexto">
              <h1 className='titulo'>
                Indicanos de donde eres
              </h1>
              <p className='texto'>
                Este formulario es opcional.
              </p>
              
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>  
                
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Departamento</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Francisco Morazán"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Dirección 2</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Casa, colonia, sector"/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">País</label>
                  <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">Ciudad</label>
                  <select id="inputState" class="form-select">
                    <option selected>Tegucigalpa</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                      Aceptar.
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Enviar...</button>
                </div>
              </form>

            </div>
        
          </div>
        
          </div>

         
          
          
          </>
        )
        :
        (
          <>
          
          </>
        )
      }
      
      </div>
      
  )
}

export default Home


/*
<div class="card mb-3" style={{Width: "1200px"}}>
<div class="row g-0">
  <div class="col-md-4">
    <img src={require("../img/Articulos.jpg")} class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>*/