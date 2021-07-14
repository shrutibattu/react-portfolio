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
      <div>
        <h4>Skills</h4>

        <FaHtml5 />
        <FaCss3 />
        <FaReact />
        <FaJava />
      </div>

      <div className={styles.footerlink_items}>
        <h4>Get in touch</h4>
        <FaLinkedinIn />
        <FaGithub />
      </div>
    </section>
  );
};

export default Footer;
