import React from "react";
import styles from "./NavBar.module.scss";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

// import {Link as Linkscrol} from "react-scroll"
const Navbar = (props) => {
  const { handleSidebarToggle } = props;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div onClick={handleSidebarToggle}>
          <FaBars className={styles.menuicon}></FaBars>
        </div>
        <Link className={styles.navlogo} to="/">
          Home
        </Link>

        <ul className={styles.navmenu}>
          <li className={styles.navitem}>
            <Link className={styles.navlink} to="/about">
              About
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link className={styles.navlink} to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link className={styles.navlink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
