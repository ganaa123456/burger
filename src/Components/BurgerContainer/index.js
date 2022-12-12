import React from "react";
import BurgerItems from "../BurgerItems";
import css from "./style.module.css";

const BurgerContainer = (props) => {
  return (
    <div className={css.BurgerControls}>
      <p>Бургерийн үнэ: {props.price}</p>
      {Object.keys(props.ingredientsNames).map((el) => (
        <BurgerItems
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          disabledIngredients={props.disabledIngredients}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BurgerContainer;
