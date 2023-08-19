import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import MainHeader from "./main-header";
import NavLinks from "./nav-links";
import styles from "./main-navigation.module.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className={styles["main-navigation__menu-btn"]}>
        <span />
        <span />
        <span />
      </button>
      <h1 className={styles["main-navigation__title"]}>
        <Link to="/">Your Places</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
