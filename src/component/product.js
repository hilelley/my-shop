import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import DataContext from "./DataContext";

const Prodeuct = ({ index }) => {
  const dataContext = useContext(DataContext);
  const changeData = dataContext.changeData;
  const data = dataContext.data;
  let arrayProdeucts = dataContext.data.arrayProdeucts;
  let arrayCart = dataContext.data.arrayCart;
  const thisProduct = dataContext.data.arrayProdeucts[index];
  const [quantity, setQuantity] = useState(thisProduct.quantity);
  const [initialQuantity] = useState(thisProduct.quantity);

  useEffect(() => setQuantity(thisProduct.quantity), [thisProduct.quantity]);

  const plus = () => {
    if (!arrayCart[0]) {
      arrayProdeucts[index].quantity--;
      let newProduct = { ...thisProduct };
      newProduct.quantity = 1;
      arrayCart = [newProduct];
    } else {
      const productIndex = arrayCart.findIndex(
        (ProductCart) => ProductCart.id === thisProduct.id
      );
      if (quantity && productIndex === -1) {
        arrayProdeucts[index].quantity--;
        let newProduct = { ...thisProduct };
        newProduct.quantity = 1;
        arrayCart = [...arrayCart, newProduct];
      } else if (quantity && productIndex > -1) {
        arrayProdeucts[index].quantity--;
        arrayCart[productIndex].quantity++;
      }
    }

    changeData({
      ...data,
      arrayProdeucts: arrayProdeucts,
      arrayCart: arrayCart,
    });
  };

  const minus = () => {
    if (quantity < initialQuantity) {
      const productWithAmountZero = arrayCart.find(
        (product) => product.quantity === 1 && product.id === thisProduct.id
      );
      if (productWithAmountZero) {
        arrayCart = arrayCart.filter(
          (product) => product.id !== productWithAmountZero.id
        );
        arrayProdeucts[index].quantity++;
      } else {
        const productCartIndex = arrayCart.findIndex(
          (ProductCart) => ProductCart.id === thisProduct.id
        );
        arrayCart[productCartIndex].quantity--;
        arrayProdeucts[index].quantity++;
      }
    }
    changeData({
      ...data,
      arrayProdeucts: arrayProdeucts,
      arrayCart: arrayCart,
    });
  };
  return (
    <div className="product">
      <Link to={"/product/" + thisProduct.id}>
        <img src={thisProduct.image}></img>
      </Link>

      <br></br>
      <div> {thisProduct.title}</div>
      <br></br>

      <div>Quantity:{quantity}</div>
      <br></br>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};
export default Prodeuct;
