import React from 'react';
import './footer.css';
import foootLogo from '../../img/metabnb_footer_logo.svg';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footerTop">
                <div className="social">
                    <img src={foootLogo} alt="" />
                    <div className="media">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
                <div className="community">
                    <p className="title">Community</p>
                    <ul>
                        <a href="/"><li>NFT</li></a>
                        <a href="/"><li>Tokens</li></a>
                        <a href="/"><li>Landlords</li></a>
                        <a href="/"><li>Discord</li></a>
                    </ul>
                </div>
                <div className="places">
                    <p className="title">Places</p>
                    <ul>
                        <a href="/"><li>Castle</li></a>
                        <a href="/"><li>Farms </li></a>
                        <a href="/"><li>Beach</li></a>
                        <a href="/"><li>Learn more</li></a>
                    </ul>
                </div>
                <div className="about">
                    <p className="title">About us</p>
                    <ul>
                        <a href="/"><li>Road map</li></a>
                        <a href="/"><li>Creators </li></a>
                        <a href="/"><li>Career</li></a>
                        <a href="/"><li>Contact us</li></a>
                    </ul>
                </div>
            </div>
            <div className="footerDown">
                <p>&copy; 2022 Metabnb</p>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer