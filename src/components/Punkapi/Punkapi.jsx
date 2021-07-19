import React from "react";
import styles from "./Punkapi.module.scss";
import punkapi from "../../images/punkapi";

const Punkapi = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Punk API Project</h1>
        <div className={styles.container}>
          <a href="https://github.com/shrutibattu/punkapi-app">
            <img src={punkapi} alt="punkapi"></img>
          </a>

          <h5>
            A React App built using the functional React principles like Hooks
            to create an application that has a collection of Punk Beer from the
            PunkApi site, with some information about each of the Beer. There is
            also advanced search functionality so that you can search Beer by
            their name and types such as Malt/Caramalt.
          </h5>
          <h5>
            Languages & Tools: HTML,CSS,JavaScript, OOP, React, Search
            Functionality
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Punkapi;
