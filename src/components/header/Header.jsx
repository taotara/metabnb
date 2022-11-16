import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../img/metabnblogo.png';
import NewModdal from '../modal/NewModdal';
import { FaBars, FaTimes } from 'react-icons/fa';


function Header() {
  
  

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    
    <>
        
        <nav className='navbar'>
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> <img src={logo} alt="Metbnb" className='logo' onClick={closeMobileMenu} /> </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
          </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="place-to-stay" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}onClick={closeMobileMenu}>
                Place to stay
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}onClick={closeMobileMenu}>
                NFTS
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="#" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}onClick={closeMobileMenu}>
                Community
              </NavLink>
            </li>
            </ul>
            <NewModdal />
        </nav>
        
        
    </>
  )
}

export default Header