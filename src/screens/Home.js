import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'; 
import HeroSection from "../components/HeroSection"
import Testimonio from '../components/Testimonio'
import "../styles/Home.css"
import Card from '../components/Cards-home';

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
            <Card/>
          </div>

          <div className='section-home'>
           
          
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
