import React from "react";
import css from "./style.module.css";
import BurgerIngredient from "../BurgerIngredient";

const Burger = (props) => {
  const items = Object.entries(props.orts);
  let content = [];

  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(
        <BurgerIngredient key={`${el[0]}${i}}`} ingredientType={el[0]} />
      );
    }
  });
  if (content.length === 0) {
    content = (
      <p>
        {" "}
        <strong>Хачиртай талхныхаа орцыг сонгоно уу</strong>
      </p>
    );
  }

  return (
    <div className={css.Burger}>
      <BurgerIngredient ingredientType="bread-top" />
      {content}
      <BurgerIngredient ingredientType="bread-bottom" />
    </div>
  );
};

export default Burger;
