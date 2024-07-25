import React from 'react';

const NavbarButton = ({ toggleNavbar }) => {
    return (
        <button onClick={toggleNavbar} className="navbar1-button">
            &#9776; 
        </button>
    );
};

export default NavbarButton;