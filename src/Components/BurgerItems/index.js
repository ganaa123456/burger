import React from "react";
import css from "./style.module.css";

const BurgerItems = (props) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}</div>
      <button
        disabled={props.disabledIngredients[props.type]}
        onClick={() => props.ortsHasah(props.type)}
        className={css.Less}
      >
        Хасах
      </button>
      <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>
        Нэмэх
      </button>
    </div>
  );
};

export default BurgerItems;
