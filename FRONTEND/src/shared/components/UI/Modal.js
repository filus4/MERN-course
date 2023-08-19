import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import BackDrop from "./Backdrop";
import styles from "./Modal.module.css";

const ModalOverlay = (props) => {
  const {
    header,
    className,
    style,
    headerClass,
    onSubmit,
    contentClass,
    children,
    footerClass,
    footer,
  } = props;
  const content = (
    <div className={`${styles.modal} ${className}`} style={style}>
      <header className={`${styles["modal__header"]} ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
        <div className={`${styles["modal__content"]} ${contentClass}`}>
          {children}
        </div>
        <footer className={`${styles["modal__footer"]} ${footerClass}`}>
          {footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const { show, onCancel } = props;
  return (
    <>
      {show && <BackDrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={styles.modal}
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
