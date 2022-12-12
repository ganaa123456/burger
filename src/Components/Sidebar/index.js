import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";
import Shadow from "../Shadow";

const Sidebar = (props) => {
  let classes = [css.Sidebar, css.Close];

  if (props.showSideBar) {
    classes = [css.Sidebar, css.Open];
  }
  return (
    <div>
      <Shadow
        closeConfirmModal={props.toggleSideBar}
        show={props.showSideBar}
      />
      <div onClick={props.toggleSideBar} className={classes.join(" ")}>
        <div>
          <Logo />
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
