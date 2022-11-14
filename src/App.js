import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import PlaceToStay from './pages/placeToStay/PlaceToPlay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/place-to-stay" element={<PlaceToStay />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
