import React, { Component } from "react";
import Burger from "../../Components/Burger";
import css from "./style.modle.css";

export default class ShippingPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };
  render() {
    return (
      <div>
        <Burger orts={this.state.ingredients} />
      </div>
    );
  }
}