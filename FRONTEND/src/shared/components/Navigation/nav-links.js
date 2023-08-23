import React, { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

import { AuthContext } from "../../context/auth-context";
import styles from "./nav-links.module.css";

const NavLinks = (props) => {
  const { toggleDrawer } = props;

  const auth = useContext(AuthContext);

  return (
    <ul className={styles["nav-links"]} onClick={toggleDrawer}>
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
