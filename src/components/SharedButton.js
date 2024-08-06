// ShareButtons.js
import React from 'react';
import { FaRegShareFromSquare } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaCopy } from "react-icons/fa";

const ShareButtons = (prop) => {
    const shareUrl = window.location.href;
   
    const handleCopyLink = () => {
        if (prop.tipoS === "true") {
            const imageElement = document.getElementById('imgId'); // Cambia 'imgId' por el ID de tu imagen
            if (imageElement) {
                const imageUrl = imageElement.src;
                navigator.clipboard.writeText(imageUrl).then(() => {
                    alert('Enlace de la imagen copiado al portapapeles');
                }, () => {
                    alert('Fallo al copiar el enlace de la imagen');
                });
            } else {
                alert('No se encontró el elemento');
            }
        } else {
            
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert('Enlace copiado al portapapeles');
            }, () => {
                alert('Fallo al copiar el enlace');
            });
        }
    };







    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    };
    const shareOnTwitter = () => {
        window.open(`https://twitter.com/share?url=${encodeURIComponent(shareUrl)}`, '_blank');
    };

    const shareOnX = () => {
        alert('Instagram no soporta compartir enlaces directamente.');
    };

    return (
        <div className="share-buttons">
            
            <div class="dropdown">
            <div class="btn-group dropup">
            <button type="button" className="sharedButton" data-bs-toggle="dropdown" aria-expanded="false">
              <FaRegShareFromSquare className='spaceShared'/> Compartir
            </button>
            <ul className="dropdown-menu dropWidth">
                <button class="btn btn-light" onClick={shareOnFacebook}><SiFacebook className='buttonSpaceDrop'/> Compartir en Facebook</button>
                <button class="btn btn-light" onClick={shareOnTwitter}><BsTwitterX className='buttonSpaceDrop' /> Compartir en X</button>
                <button class="btn btn-light" onClick={handleCopyLink}><FaCopy className='buttonSpaceDrop'/> Copiar enlace</button>
              

            </ul>
            </div>
            </div>
        </div>
    );
};

export default ShareButtons;