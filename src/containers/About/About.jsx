import React from "react";
import styles from "./About.module.scss";
import { ReactComponent as Developer } from "../../images/developer.svg";
import Shruti from "../../images/Shruti.pdf";

const About = () => {
  return (
    <section className={styles.aboutpage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>About me</h1>
          <p>
            Hello, I am a web-developer with a passion for coding and have
            completed a 12 week full-time software development course with
            _nology. I have experience with Agile Project Management and
            pair-programming, as well as a background in Finance.
          </p>
          <p>
            Additional Skills: Problem Solving | Code Collaborations |
            Presentations | Team Work | GitHub |MySQL Databases | Authentication
            | Hosting | REST APIs
          </p>
          <a href={Shruti} target="_blank">
            <button className={styles.button}>Download CV</button>
          </a>
        </div>
        <Developer className={styles.image} />
      </div>
    </section>
  );
};

export default About;
