import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPag from "./productPag";
const Prodeuct = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const [initialQuantity, setInitialQuantity] = useState(props.quantity);

  const plus = () => {
    if (quantity) {
      props.plus(props.value, props.id);
      return setQuantity(quantity - 1);
    }
  };

  const minus = () => {
    if (quantity < initialQuantity) {
      props.minus(props.value, props.id);
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className={props.className}>
      <Link to={"/product/" + props.id}>
        <img src={props.image}></img>
      </Link>

      <br></br>
      <div> {props.title}</div>
      <br></br>

      <div>Quantity:{quantity}</div>
      <br></br>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};
export default Prodeuct;
