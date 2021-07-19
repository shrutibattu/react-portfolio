import React from "react";
import Punkapi from "../../components/Punkapi/Punkapi";
import Calculator from "../../components/Calculator/";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Punkapi />
      <Calculator />
    </section>
  );
};

export default Portfolio;
