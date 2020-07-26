import React, { useState, useEffect } from "react";
import CartProduct from "./cartProduct";

const Cart = (props) => {
  const [arrayCart, setArrayCart] = useState(props.array);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setArrayCart(props.array);
  }, [props.array]);
  useEffect(() => {
    if (arrayCart[0]) {
      let newAmount = 0;
      arrayCart.forEach((p) => (newAmount = newAmount + p.quantity));
      setAmount(newAmount);
    } else {
      setAmount(0);
    }
  }, [arrayCart]);

  const removeFormCart = (productOnRemovId) => {
    let newArrayCart;
    newArrayCart = arrayCart.filter(
      (product) => product.id !== productOnRemovId
    );
    props.updateCartList(newArrayCart);
    // setArrayCart(newArrayCart);
  };
  return (
    <div className="crat">
      {console.log(amount)}
      Crat <br></br>
      Count:{amount}
      {arrayCart[0] && (
        <React.Fragment>
          {arrayCart.map((cartProdeuct, index) => {
            console.log(cartProdeuct.quantity);
            return (
              <CartProduct
                value={cartProdeuct}
                key={cartProdeuct.id}
                id={cartProdeuct.id}
                className="CartProduct"
                image={cartProdeuct.image}
                title={cartProdeuct.title}
                quantity={cartProdeuct.quantity}
                removePro={removeFormCart}
              />
            );
          })}
        </React.Fragment>
      )}
    </div>
  );
};
export default Cart;
