import React, { Component } from "react";
import Burger from "../../Components/Burger";
import BurgerContainer from "../../Components/BurgerContainer";
import Modal from "../../Components/Modal";
import OrderSummary from "../../Components/OrderSummary";
import axios from "../axios-orders";
import { useNavigate } from "react-router-dom";

const INGREDIENTS_PRICE = {
  bacon: 3000,
  meat: 4000,
  cheese: 1500,
  salad: 1000,
};
const INGREDIENTS_NAMES = {
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
  salad: "Салад",
};
export default class BurgerPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasing: false,
    confirmOrder: false,
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  continueOrder = () => {
    const order = {
      orts: this.state.ingredients,
      dun: this.state.totalPrice,
      hayag: {
        name: "Saraa",
        city: "Ub",
        bairshil: "10r horoolol",
      },
    };
    axios.post("/orders.json", order).then((response) => {
      alert("Amjilttai");
    });
  };
  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    this.setState({ ingredients: newIngredients });
    const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredients,
    });
  };
  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
      this.setState({
        purchasing: newPrice > 0,
        totalPrice: newPrice,
        ingredients: newIngredients,
      });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          <OrderSummary
            onContinue={this.continueOrder}
            onCancel={this.closeConfirmModal}
            price={this.state.totalPrice}
            ingredientsNames={INGREDIENTS_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <div>
          <BurgerContainer
            showConfirmModal={this.showConfirmModal}
            ingredientsNames={INGREDIENTS_NAMES}
            disabled={!this.state.purchasing}
            price={this.state.totalPrice}
            disabledIngredients={disabledIngredients}
            ortsHasah={this.ortsHasah}
            ortsNemeh={this.ortsNemeh}
          />
        </div>
      </div>
    );
  }
}
