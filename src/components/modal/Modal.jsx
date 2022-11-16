import React from 'react';
import './modal.css';
import Metamask from '../../img/image 66.png';
import WalletConnect from '../../img/image 69.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function Modal({ open, onClose }) {
    if(!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e) => {
          e.stopPropagation()
        }} className="modalContainer">
            <div className="modalTop">
              <h2 className='modalTitle'>Connect Wallet</h2>
              <p onClick={onClose} className="close">X</p>
            </div>
            <div className="modalBottom">
              <p className="modalText">Choose your preferred wallet:</p>
              <div className="button">
                <div className="btnIcon">
                  <img src={Metamask} alt="Metamask" />
                  <p className="wallet">Metamask</p>
                </div>
                <div className="chev"><ChevronRightIcon /></div>
              </div>
              <div className="button">
                <div className="btnIcon">
                  <img src={WalletConnect} alt="Metamask" />
                  <p className="wallet">WalletConnect</p>
                </div>
                <div className="chev"></div><div className="btnIcon">
                </div>
                <div className="chev"><ChevronRightIcon /></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Modal