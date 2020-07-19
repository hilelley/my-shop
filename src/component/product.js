import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPag from "./productPag";
const Prodeuct = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const plus = () => {
    if (quantity) {
      props.plus(props.value);
      return setQuantity(quantity - 1);
    }
  };

  const minus = () => {
    if (quantity < props.quantity) {
      props.minus();
      return setQuantity(quantity + 1);
    }
  };

  return (
    <Router>
      <div className={props.className}>
        <Link to={"/" + props.id}>
          <img src={props.image}></img>
        </Link>

        <br></br>
        <div> {props.title}</div>
        <br></br>
        <br></br>
        <div>Quantity:{quantity}</div>
        <br></br>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </Router>
  );
};
export default Prodeuct;
