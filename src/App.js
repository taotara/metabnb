import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

import PlaceToStay from './pages/placeToStay/PlaceToPlay';
import Modal from './components/modal/Modal';

function App() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
        <Header />
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        
        
        <Footer />
      </div>
  )
}

export default App