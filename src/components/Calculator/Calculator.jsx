import React from "react";
import styles from "./Calculator.module.scss";

const Calculator = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Calculator Project</h1>
        <div className={styles.container}>
          <p>A small project, built using HTML, CSS and JavaScript. </p>
          <p>Languages & Tools: HTML,CSS,JavaScript,</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
