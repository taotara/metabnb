import React from 'react';
import './header.css';
import logo from '../../img/metabnblogo.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="Metbnb" className='logo' />
        <nav>
            <ul>
                <a href=""><li>Home</li></a>
                <a href=""><li>Place to stay</li></a>
                
                <a href=""><li>NFTS</li></a>
                <a href=""><li>Community</li></a>
            </ul>
        </nav>
        <button className='btn'>Connect wallet</button>
    </header>
  )
}

export default Header