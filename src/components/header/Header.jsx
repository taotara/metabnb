import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../img/metabnblogo.png';
import Modal from '../modal/Modal';
import { FaBars, FaTimes } from 'react-icons/fa';


function Header() {
  
  const [openModal, setOpenModal] = useState(false);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    
    <header className='header'>
        
        <nav className='navbar'>
          <div className="navbar-container container">
            <Link to="/" className='navbar-logo'> <img src={logo} alt="Metbnb" className='logo' onClick={closeMobileMenu} /> </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
            
            <div className="navigation-menu">
              <ul>
                  <Link to="/">Home</Link>
                  <Link to="place-to-stay">Place to stay</Link>
                  <Link to="/">NFTS</Link>
                  <Link to="/">Community</Link>
              </ul>
            </div>
            
        </nav>
        
        <button className='btn' onClick={() => setOpenModal(true)}>Connect wallet</button>
        <Modal open={openModal} />
    </header>
  )
}

export default Header