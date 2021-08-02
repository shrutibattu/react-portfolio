import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
    </section>
  );
};

export default Home;
