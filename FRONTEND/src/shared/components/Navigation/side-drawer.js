import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import styles from "./side-drawer.module.css";

const SideDrawer = (props) => {
  const { show } = props;
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames={"slide-in-left"}
      mountOnEnter
      unmountOnExit
    >
      <aside className={styles["side-drawer"]}>{props.children}</aside>
    </CSSTransition>
  );
  const drawer = document.getElementById("drawer-hook");

  return ReactDOM.createPortal(content, drawer);
};

export default SideDrawer;
