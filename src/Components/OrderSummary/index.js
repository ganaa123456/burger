import React from "react";
import Button from "../Button";
import css from "./style.module.css";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд: </p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientsNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        Захиалгын нийт үнийн дүн:
        <strong> {props.price} </strong>
      </p>
      <p>Цаашаа үргэлжүүлэх үү?</p>
      <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ" />
      <Button
        daragdsan={props.onContinue}
        btnType="Success"
        text="ҮРГЭЛЖҮҮЛЭХ"
      />
    </div>
  );
};

export default OrderSummary;
