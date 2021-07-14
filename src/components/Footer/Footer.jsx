import React from "react";
import styles from "./Footer.module.scss";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJava,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className={styles.footer_container}>
      <div className={styles.skills_container}>
        <h4>Skills</h4>
        <div className={styles.skills}>
          <FaHtml5 />
          <FaCss3 />
          <FaReact />
          <FaJava />
        </div>
      </div>

      <div className={styles.footerlink_items}>
        <h4>Get in touch</h4>
        <div className={styles.social}>
          <FaLinkedinIn />
          <FaGithub />
        </div>
      </div>
    </section>
  );
};

export default Footer;
