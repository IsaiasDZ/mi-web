import React from 'react';
import { Link } from "react-router-dom";
import "../styles/NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { GiPodiumWinner } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import { FaNewspaper } from "react-icons/fa";


const links = [
  {
    name: "Home",
    href: "/",
    icon: <TiHome />

  },{
    name: "Tutoriales",
    href: "/tutoriales",
    icon: <BsPersonWorkspace />

  },{
    name: "Articulos",
    href: "/articulos",
    icon: <PiArticleNyTimesFill />

  },
  {
    name: "Concursos",
    href: "/concursos",
    icon: <GiPodiumWinner />

  },
  {
    name: "Criticas",
    href: "/criticas",
    icon: <FaBookReader />

  },
  {
    name: "Equipo",
    href: "/equipo",
    icon: <AiFillCamera />

  },
  {
    name: "Noticias",
    href: "/noticias",
    icon: <FaNewspaper />

  }
];

const Leftmenu = () => {
  return (
    <div className="">
      <button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
         <GiHamburgerMenu />
      </button>

      <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel"><strong>PixelGallery</strong></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
              <div>
                {links.map((x) =>(
                  
                  <div className="side-link" data-bs-dismiss="offcanvas">
                    <Link to={x.href}>{x.icon} {x.name}</Link>
                  </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftmenu;