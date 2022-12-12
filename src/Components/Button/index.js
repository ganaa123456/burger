import React from "react";
import { Navigate } from "react-router-dom";
import css from "./style.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.daragdsan}
      className={`$css.Button} ${css[props.btnType]}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
