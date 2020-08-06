import React, { useState, useEffect, useContext } from "react";
import DataContext from "./DataContext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const dataContext = useContext(DataContext);
  let arrayCart = dataContext.data.arrayCart;
  const [amount, setAmount] = useState(0);

  const updatedAmount = () => {
    if (arrayCart[0]) {
      let newAmount = 0;
      arrayCart.forEach(
        (product) => (newAmount = newAmount + product.quantity)
      );
      return newAmount;
    } else {
      return 0;
    }
  };
  useEffect(() => setAmount(updatedAmount), [updatedAmount]);

  return (
    <div className="crat">
      Crat <br></br>
      Count:{amount}
      {arrayCart && (
        <>
          {arrayCart.map((value, index) => (
            <div key={value.id}>
              <CartProduct index={index} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default Cart;
