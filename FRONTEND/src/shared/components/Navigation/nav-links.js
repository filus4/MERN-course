import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

import styles from "./nav-links.module.css";

const NavLinks = () => {
  return (
    <ul className={styles["nav-links"]}>
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
