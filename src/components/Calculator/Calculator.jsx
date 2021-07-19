import React from "react";
import styles from "./Calculator.module.scss";
import calculator from "../../images/calculator";

const Calculator = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Calculator Project</h1>
        <div className={styles.container}>
          <a href="https://github.com/shrutibattu/Calculator">
            <img src={calculator} alt="calculator"></img>
          </a>
          <h5>A small project, built using HTML, CSS and JavaScript. </h5>
          <h5>Languages & Tools: HTML,CSS,JavaScript,</h5>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
