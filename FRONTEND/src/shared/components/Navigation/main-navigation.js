import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import MainHeader from "./main-header";
import NavLinks from "./nav-links";
import SideDrawer from "./side-drawer";
import BackDrop from "../UI/Backdrop";
import styles from "./main-navigation.module.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {drawerIsOpen && (
        <SideDrawer>
          <BackDrop onClick={toggleDrawerHandler} />
          <nav className={styles["main-navigation__drawer-nav"]}>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className={styles["main-navigation__menu-btn"]}
          onClick={toggleDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={styles["main-navigation__title"]}>
          <Link to="/">Your Places</Link>
        </h1>
        <nav className={styles["main-navigation__header-nav"]}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
