import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import Home from "./containers/Home";
import Routes from "./containers/Routes";
import Portfolio from "./containers/Portfolio";

function App() {
  return (
    <Router>
      <Routes />
      <Portfolio />
      <Footer />
    </Router>
  );
}

export default App;
