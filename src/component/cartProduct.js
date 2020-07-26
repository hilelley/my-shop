import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CartProduct = (props) => {
  const remove = () => props.removePro(props.id);

  return (
    <div className={props.className}>
      {console.log("בוצע רינדור של cartPro")}

      <img src={props.image}></img>

      <br></br>
      <div> {props.title}</div>
      <br></br>
      <br></br>
      <div>Quantity:{props.quantity}</div>
      <br></br>
      <button onClick={remove}>Remove Form cart</button>
    </div>
  );
};
export default CartProduct;
