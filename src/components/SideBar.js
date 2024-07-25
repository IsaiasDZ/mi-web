import React from 'react'
import "../styles/SideBar.css"

const links = [
    {
      name: "Home",
      href: "/",
  
    },{
      name: "Tutoriales",
      href: "/tutoriales",
  
    },{
      name: "Articulos",
      href: "/articulos",
  
    },
    {
      name: "Concursos",
      href: "/concursos",
  
    },
    {
      name: "Criticas",
      href: "/criticas",
  
    },
    {
      name: "Equipo",
      href: "/equipo",
  
    },
    {
      name: "Noticias",
      href: "/noticias",
  
    }
  ];
  
const SideBar = () => {
  return (
    <header className='cabecera'>
        <h1>PixelGallery</h1>
                
        <button className='cabecera-button'>
            <p>hla</p>
        </button>
    <div>
        {links.map((x) =>(
                  
                  <div className="lef-menu-lins">
                  <Link to={x.href}>{x.name}</Link>
                  </div>
                ))}
    </div>
    </header>

  )
}

export default SideBar