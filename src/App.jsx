import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Routes from "./containers/Routes/Routes";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Portfolio from "./containers/Portfolio";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <Router>
      <Navbar handleSidebarToggle={handleSidebarToggle} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
      />

      <Routes />

      <Footer />
    </Router>
  );
}

export default App;
