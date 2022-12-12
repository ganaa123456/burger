import React from "react";
import css from "./style.module.css";

const BurgerIngredient = (props) => {
  if (props.ingredientType === "bread-top")
    return (
      <div className={css.BreadTop}>
        <div className={css.Seed}></div>
        <div className={`${css.Seed} ${css.Second}`}></div>
        <div className={`${css.Seed} ${css.Third}`}></div>
        <div className={`${css.Seed} ${css.Fourth}`}></div>
      </div>
    );
  if (props.ingredientType === "salad")
    return <div className={css.Salad}></div>;
  if (props.ingredientType === "meat") return <div className={css.Meat}></div>;
  if (props.ingredientType === "bacon")
    return <div className={css.Bacon}></div>;
  if (props.ingredientType === "cheese")
    return <div className={css.Cheese}></div>;
  if (props.ingredientType === "bread-bottom")
    return <div className={css.BreadBottom}></div>;
};

export default BurgerIngredient;
