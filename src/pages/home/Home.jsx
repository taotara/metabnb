import React from 'react';
import './home.css';
import image1 from '../../img/image 4.png';
import image2 from '../../img/image 3.png';
import image3 from '../../img/image 6.png';
import image4 from '../../img/image 5.png';
import Mbtoken from '../../img/MBTOKEN.svg';
import Metamask from '../../img/METAMASK.svg';
import Opensea from '../../img/opensea.svg';
import BotImg1 from '../../img/image 9.png';
import BotImg2 from '../../img/image 7.png';
import BotImg3 from '../../img/image 8.png';
import Properties from '../../components/properties/Properties';




function Home() {
  return (
    <main>
        <div className="hero">
            <div className="heroLeft">
                <h1 className="title">Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <form action="">
                    <input type="text" placeholder='Search for location' />
                    <button>Search</button>
                </form>
            </div>
            <div className="heroRight">
                <img src={image1} alt="hero 1" className='g1' />
                <img src={image2} alt="hero 2" className='g2' />
                <img src={image3} alt="hero 3" className='g3' />
                <img src={image4} alt="hero 4" className='g4' />
            </div>
        </div>
        <div className="coinTable">
            <div className="coins">
                <img src={Mbtoken} alt="MBToken" className='token' />
                <img src={Metamask} alt="Metamask" className='metalmask' />
                <img src={Opensea} alt="Opensea" className='opensea' />
            </div>
        </div>
        <div className="inspiration">
            <div className="inspirationInside">
                <p className="title">Inspiration for your next adventure</p>
                
                <Properties />
            </div>
        </div>
        <div className="homeBot">
            <div className="homeBotContainer">
                <div className="homeBotLeft">
                    <h2 className='title'>Metabnb NFTs</h2>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button>Learn more</button>
                </div>
                <div className="homeBotRight">
                    <img src={BotImg1} alt="" className='botImg1' />
                    <img src={BotImg2} alt="" className='botImg2' />
                    <img src={BotImg3} alt="" className='botImg3' />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home