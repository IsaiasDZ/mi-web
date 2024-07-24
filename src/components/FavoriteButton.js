import React, { useState, useCallback } from 'react';
import { BsFillBookmarkStarFill } from "react-icons/bs";
import DropdownButton from 'react-bootstrap/DropdownButton';

import "../styles/ButtonDrop.css"
import DropFavorite from './DropFavorite';




function BasicButtonExample() {
  const [show, setShow] = useState(false);

  const handleToggle = (isOpen) => {
    setShow(isOpen);
  };

  const handleItemClick = useCallback(() => {
    setShow(false);
  }, []);

  return (
    
    <DropdownButton
      id="dropdown-basic-button"
      className="Dropdown-button"
      title={<><BsFillBookmarkStarFill className='favoriteBtn'/></>}
      show={show} 
      onToggle={handleToggle}
    > 
      
       
       <DropFavorite/>
      
    </DropdownButton>
  );
}

export default BasicButtonExample;