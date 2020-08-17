import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import DataContext from "./DataContext";

const Prodeuct = ({ id }) => {
  const dataContext = useContext(DataContext);
  const changeData = dataContext.changeData;
  const data = dataContext.data;
  let arrayProdeucts = data.arrayProdeucts;
  let arrayCart = data.arrayCart;
  const thisProduct = arrayProdeucts.filter(
    (product) => Object.values(product)[0] === id
  )[0];
  const index = arrayProdeucts.findIndex((Product) => Product.id === id);
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
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};
export default Prodeuct;
// הקומפוננטה הכי מסובכת הרעיון המסדר של הדברים הוא שכל שינוי שהאיבנט שלו קורה בקומפננת אז היא
// גם תשנה אותו בפועל בלי לשלוח פרופסים וכו' ולכן זה נראה כך
