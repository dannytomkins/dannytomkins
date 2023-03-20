import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <NavLink exact to='/' className='logo'>
        DANNY TOMKINS
      </NavLink>

      <div className='links'>
        <NavLink exact to='/'>LANDING</NavLink>
        <NavLink exact to='/sketches'>SKETCHES</NavLink>
      </div>

      <div className="icon" onClick={handleToggle}>
        <span>{isOpen ? "\u2715" : "\u2630"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
        <NavLink exact to='/' onClick={handleToggle}>LANDING</NavLink>
        <NavLink exact to='/sketches' onClick={handleToggle}>SKETCHES</NavLink>
        </div>
      )}
    </nav>
  );
};

export default MainNav;