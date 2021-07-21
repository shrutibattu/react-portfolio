import React from "react";
import styles from "./NavBar.module.scss";
import { FaBars } from "react-icons/fa";
import { Link as LinkRoute } from "react-router-dom";
// import {Link as Linkscrol} from "react-scroll"
const Navbar = (props) => {
  const { handleSidebarToggle } = props;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbar_container}>
          <div onClick={handleSidebarToggle}>
            <FaBars className={styles.menuicon}></FaBars>
          </div>
          <LinkRoute className={styles.navlogo} to="/">
            Home
          </LinkRoute>

          <ul className={styles.navmenu}>
            <li className={styles.navitem}>
              <LinkRoute className={styles.navlink} to="about">
                About
              </LinkRoute>
            </li>
            <li className={styles.navitem}>
              <LinkRoute className={styles.navlink} to="/portfolio">
                Portfolio
              </LinkRoute>
            </li>
            <li className={styles.navitem}>
              <LinkRoute className={styles.navlink} to="/contact">
                Contact
              </LinkRoute>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
