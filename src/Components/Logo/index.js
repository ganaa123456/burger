import React from "react";
import Burger from "../../assets/images/burger.png";
import css from "./style.module.css";

const Logo = () => {
  return (
    <div className={css.Logo}>
      <img src={Burger} />
    </div>
  );
};

export default Logo;
