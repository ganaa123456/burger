import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";

const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <div>
        <HamburgerMenu toggleSideBar={props.toggleSideBar} />
      </div>
      <div>
        <Logo />
      </div>
      <div className={css.Menu}>
        <Menu />
      </div>
    </header>
  );
};

export default Toolbar;
