import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const MenuItem = (props) => {
  return (
    <div>
      <li className={css.MenuItem}>
        <NavLink
          className={(navData) => (navData.isActive ? css.active : "")}
          to={props.link}
        >
          {props.children}
        </NavLink>
      </li>
    </div>
  );
};

export default MenuItem;
