import React, { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

import { AuthContext } from "../../context/auth-context";
import styles from "./nav-links.module.css";

const NavLinks = (props) => {
  const { toggleDrawer } = props;

  const auth = useContext(AuthContext);

  return (
    <ul className={styles["nav-links"]}>
      <li onClick={toggleDrawer}>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li onClick={toggleDrawer}>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li onClick={toggleDrawer}>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li onClick={toggleDrawer}>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li
          onClick={() => {
            auth.logout();
            toggleDrawer();
          }}
        >
          <NavLink to="/">Logout</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
