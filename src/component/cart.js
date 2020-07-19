import React, { useState, useEffect } from "react";
import CartProduct from "./cartProduct";

const Cart = (props) => {
  const [arrayCart, setArrayCart] = useState(props.array);
  useEffect(() => {
    setArrayCart(props.array);
  }, [props.array]);

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
      Crat <br></br>
      Count:
      {arrayCart[0] && arrayCart.length}
      {arrayCart[0] && (
        <React.Fragment>
          {arrayCart.map((cartProdeuct, index) => {
            return (
              <CartProduct
                value={cartProdeuct}
                key={index}
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
