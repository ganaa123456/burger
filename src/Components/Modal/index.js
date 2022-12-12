import React from "react";
import Shadow from "../Shadow";
import css from "./style.module.css";

const Modal = (props) => {
  return (
    <div>
      <Shadow closeConfirmModal={props.closeConfirmModal} show={props.show} />
      <div
        onClick={props.closeConfirmModal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={css.Modal}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
