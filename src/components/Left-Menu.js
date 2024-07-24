import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GiHamburgerMenu } from "react-icons/gi";
import NotificationButton from "../components/NotificationButton"

const Leftmenu = () => {
  return (
    <div className="">
      <button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
         <GiHamburgerMenu />
      </button>

      <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">PixelGallery</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
               <p>Bienvendio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftmenu;