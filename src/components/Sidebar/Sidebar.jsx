import React from "react";
import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = (props) => {
  const { isSidebarOpen, handleSidebarToggle } = props;
  return (
    <div
      className={`${styles.sidebar} ${isSidebarOpen && styles.sidebar_open}`}
    >
      <div className={styles.sidebar__icon} onClick={handleSidebarToggle}>
        <FaTimes />
      </div>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__item}>
          <Link
            to="/about"
            className={styles.sidebar__link}
            onClick={handleSidebarToggle}
          >
            About
          </Link>
        </li>
        <li className={styles.sidebar__item}>
          <Link
            to="/portfolio"
            className={styles.sidebar__link}
            onClick={handleSidebarToggle}
          >
            Portfolio
          </Link>
        </li>
        <li className={styles.sidebar__item}>
          <Link
            to="/contact"
            className={styles.sidebar__link}
            onClick={handleSidebarToggle}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
