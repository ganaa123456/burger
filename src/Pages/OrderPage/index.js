import axios from "../axios-orders";
import React, { Component } from "react";
import Order from "../../Components/Order";
import css from "./style.module.css";
export default class index extends Component {
  state = {
    orders: [],
  };
  componentDidMount() {
    axios.get("/orders.json").then((response) => {
      this.setState({ orders: Object.entries(response.data).reverse() });
    });
  }

  render() {
    return this.state.orders.map((el) => <Order key={el[0]} order={el[1]} />);
  }
}
