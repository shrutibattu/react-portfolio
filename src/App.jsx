import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import Home from "./containers/Home";
import Routes from "./containers/Routes";
import Punkapi from "./components/Punkapi/Punkapi";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <Router>
      <Routes />
      <Punkapi />
      <Calculator />
      <Footer />
    </Router>
  );
}

export default App;
