import React from "react";
import { projectsArr } from "../../projects";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <section id="projects" className={styles.portfolio}>
      <div className={styles.section_container}>
        <h1 className={styles.header}>Portfolio</h1>
        <p>Click on the image to see the Project</p>
        <div className={styles.projects_container}>
          {projectsArr.map((project) => (
            <a href={project.link} key={project.image}>
              <div className={styles.cardFront}>
                <div>
                  <h4 className={styles.title}>{project.title}</h4>
                  <h5 className={styles.subtitle}>{project.subtitle}</h5>
                </div>
                <div className={styles.image}>
                  <img
                    className={styles.image}
                    src={project.image}
                    alt=""
                  ></img>
                </div>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
