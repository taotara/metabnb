import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css';
import Metamask from '../../img/image 66.png';
import WalletConnect from '../../img/image 69.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './modal.css';

function NewModdal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  onClick={handleShow}>
        Connect wallet
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <h2 className='modalTitle'>Connect Wallet</h2>
        </Modal.Header>
        <Modal.Body>
        
          <div className="modalTop">
              
              
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
        </Modal.Body>
        
      </Modal>
    </>
  );
}
export default NewModdal;