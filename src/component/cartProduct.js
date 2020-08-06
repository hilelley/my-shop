import React, { useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import DataContext from "./DataContext";

const CartProduct = ({ index }) => {
  const dataContext = useContext(DataContext);
  const changeData = dataContext.changeData;
  const data = dataContext.data;
  let arrayProdeucts = dataContext.data.arrayProdeucts;
  let arrayCart = dataContext.data.arrayCart;
  const thisProduct = dataContext.data.arrayCart[index];

  const removeFormCart = () => {
    const quantityOnRemove = thisProduct.quantity;
    const productOnRemoveIndex = arrayProdeucts.findIndex(
      (ProductCart) => ProductCart.id === thisProduct.id
    );
    arrayProdeucts[productOnRemoveIndex].quantity =
      arrayProdeucts[productOnRemoveIndex].quantity + quantityOnRemove;
    arrayCart = arrayCart.filter((product) => product.id !== thisProduct.id);
    changeData({
      ...data,
      arrayProdeucts: arrayProdeucts,
      arrayCart: arrayCart,
    });
  };

  return (
    <div className="cartProduct">
      <Link to={"/product/" + thisProduct.id}>
        <img src={thisProduct.image}></img>
      </Link>
      <br></br>
      <div> {thisProduct.title}</div>
      <div>Quantity: {thisProduct.quantity}</div>
      <button onClick={removeFormCart}>Remove Form cart</button>
    </div>
  );
};
export default CartProduct;
// קומפוננת קצת מסובכת כמו קומפוננתת המוצר כל השינייים שהאייבנט שלהם קורה בקומפוננת
// גם השינוי של הדאטה בקונטקסט עצמו קורה בקומפוננת
