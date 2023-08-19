import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

import styles from "./nav-links.module.css";

const NavLinks = (props) => {
  const { toggleDrawer } = props;

  return (
    <ul className={styles["nav-links"]}>
      <li onClick={toggleDrawer}>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li onClick={toggleDrawer}>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li onClick={toggleDrawer}>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li onClick={toggleDrawer}>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
