import React, { useState, useCallback } from 'react';
import { IoIosNotifications } from "react-icons/io";
import DropdownButton from 'react-bootstrap/DropdownButton';

import "../styles/ButtonDrop.css"
import DropNotifi from './DropNotifi';




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
      title={<><IoIosNotifications /> </>}
      show={show} 
      onToggle={handleToggle}
    > 
      
       
       <DropNotifi/>
      
    </DropdownButton>
  );
}

export default BasicButtonExample;