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
      <NavLink to='/' className='logo'>
        DANNY TOMKINS
      </NavLink>

      <div className='links'>
        <NavLink to='/'>LANDING</NavLink>
      </div>

      <div className="icon" onClick={handleToggle}>
        <span>{isOpen ? "\u2715" : "\u2630"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
        <NavLink to='/' onClick={handleToggle}>LANDING</NavLink>
        </div>
      )}
    </nav>
  );
};

export default MainNav;