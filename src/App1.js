import React, { Component, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import PlaceToStay from './pages/placeToStay/PlaceToPlay';
import Modal from './components/modal/Modal';


class App extends Component {
  render() {

    const [openModal, setOpenModal] = useState(false);

    return (
      <div className="App">
        <Header />
        <button className='btn' onClick={() => setOpenModal(true)}>Connect wallet</button>
        <Router>
          <Routes>
            <Route path="/place-to-stay" element={<PlaceToStay />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        <Footer />
      </div>
    );
  }
}

export default App;
