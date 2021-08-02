import React from "react";
import styles from "./About.module.scss";
import { ReactComponent as Developer } from "../../images/developer.svg";

const About = () => {
  return (
    <section className={styles.aboutpage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>About me</h1>
          <p>
            Hello, I am a web-developer with a passion for coding and have
            completed a 12 week full-time software development course with
            _nology. I have experience with Agile Project Management and
            pair-programming, as well as a background in Finance.
          </p>
          <br />
          <p className={styles.skills}>
            Additional Skills: Problem Solving | Code Collaborations |
            Presentations | Team Work | GitHub |MySQL Databases | Authentication
            | Hosting | REST APIs
          </p>

          <a href="https://drive.google.com/file/d/1zB1yDiXo67G60XLqg9_ZveclXX6vrBDX/view?usp=sharing">
            <button className={styles.button}>Download CV</button>
          </a>
        </div>
        <Developer className={styles.image} />
      </div>
    </section>
  );
};

export default About;
