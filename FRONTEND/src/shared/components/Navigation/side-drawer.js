import React from "react";
import ReactDOM from "react-dom";

import styles from "./side-drawer.module.css";

const SideDrawer = (props) => {
  const content = (
    <aside className={styles["side-drawer"]}>{props.children}</aside>
  );
  const drawer = document.getElementById("drawer-hook");

  return ReactDOM.createPortal(content, drawer);
};

export default SideDrawer;
