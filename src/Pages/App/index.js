import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Toolbar from "../../Components/Toolbar";
import BurgerPage from "../BurgerPage";
import OrderPage from "../OrderPage";
import css from "./style.module.css";

export default class App extends Component {
  state = {
    showSidebar: false,
  };
  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };
  render() {
    return (
      <div className="">
        <header>
          <Toolbar toggleSideBar={this.toggleSideBar} />
        </header>
        <div>
          <Sidebar
            showSideBar={this.state.showSidebar}
            toggleSideBar={this.toggleSideBar}
          />
        </div>

        <main className={css.Content}>
          <Routes>
            <Route path="/burger" element={<BurgerPage />} />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}
