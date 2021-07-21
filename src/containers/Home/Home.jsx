import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.scss";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <>
      <Navbar handleSidebarToggle={handleSidebarToggle} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
      />

      <HeroSection />
    </>
  );
};

export default Home;
