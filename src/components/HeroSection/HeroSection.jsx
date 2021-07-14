import React from "react";
import styles from "./HeroSection.module.scss";
import computer from "../../images/computer.jpg";

const HeroSection = () => {
  return (
    <div className={styles.herocontainer}>
      <div className={styles.overlay}>
        <img className={styles.img} src={computer} alt="computer"></img>
      </div>
      <div className={styles.herocontent}>
        <h1 className={styles.title}>Shruti Battu</h1>
        <p className={styles.subtitle}>Web Developer</p>
      </div>
    </div>
    // <div className={styles.herocontainer}>
    //   <div className={styles.herobg}>
    //     <img className={styles.img} src={computer} alt="computer"></img>
    //   </div>
    //   <div className={styles.herocontent}>
    //     <h1 className={styles.title}>Shruti Battu</h1>
    //     <p className={styles.subtitle}>Web Developer</p>
    //   </div>
    // </div>
  );
};

export default HeroSection;
