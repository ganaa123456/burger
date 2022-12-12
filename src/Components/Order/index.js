import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  console.log(props.order);
  return (
    <div className={css.Order}>
      <p>
        Орц: Гахайн мах: {props.order.orts.bacon} , Бяслаг:{" "}
        {props.order.orts.cheese} , Үхрийн мах: {props.order.orts.meat} , Салад:{" "}
        {props.order.orts.salad}
      </p>
      <p>
        Хаяг: {props.order.hayag.name} , {props.order.hayag.city} ,{" "}
        {props.order.hayag.bairshil}
      </p>
      <p>
        Үнийн дүн: <strong> {props.order.dun}</strong>
      </p>
    </div>
  );
};

export default Order;
