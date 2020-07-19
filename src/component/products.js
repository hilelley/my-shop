import React, { useState, useEffect } from "react";
import Product from "./product";
import Crat from "./cart";
import CartProduct from "./cartProduct";

const Prodeucts = (props) => {
  let a = [];
  let prod;
  const [arrayProdeucts, setArrayProdeucts] = useState(props.array);
  const [arrayCart, setArrayCart] = useState(a);
  const [NewarrayCart, setNewArrayCart] = useState(a);

  const [amountCrat, setAmountCrat] = useState(0);

  const minusCount = () => setAmountCrat(amountCrat - 1);
  const pluss = (addProd) => {
    if (arrayCart === a) {
      addProd.quantity = 0;
      // addProd.key=num
      prod = addProd;
      setArrayCart([addProd]);
    } else {
      addProd.quantity = 0;
      prod = addProd;
      setArrayCart([addProd, ...arrayCart]);
    }
  };
  const updateArrayCart = (newList) => setArrayCart(newList);

  return (
    <React.Fragment>
      {console.log("בוצע רינדור של products")}
      <Crat array={arrayCart} updateCartList={updateArrayCart} />
      <div className="Products">
        <div>Products</div>
        {arrayProdeucts.map((value) => (
          <div key={value.id}>
            <Product
              value={value}
              id={value.id}
              className="Product"
              image={value.image}
              title={value.title}
              quantity={value.quantity}
              plus={pluss}
              minus={minusCount}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default Prodeucts;

// arrayProdeucts.forEach((product) => {
//   product.id === value.id &&
//     setArrayCart([product, ...arrayCart]);
// });
