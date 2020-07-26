import React, { useState, useEffect } from "react";
import Product from "./product";
import Crat from "./cart";
import CartProduct from "./cartProduct";

const Prodeucts = (props) => {
  const [arrayProdeucts, setArrayProdeucts] = useState(props.array);
  const [arrayCart, setArrayCart] = useState([]);
  // const [amount, setAmount] = useState([]);

  const minusCount = (newProduct, id) => {
    const newProductIndex = arrayCart.findIndex((Product) => Product.id === id);
    let newArrayCart;
    if (arrayCart[newProductIndex].quantity === 1) {
      newArrayCart = arrayCart.filter((product) => product.id !== id);
      setArrayCart(newArrayCart);
    } else {
      let newProductIndex = arrayCart.findIndex((Product) => Product.id === id);
      newArrayCart = [...arrayCart];
      newArrayCart[newProductIndex].quantity--;
      setArrayCart(newArrayCart);
    }
  };
  const pluss = (newProduct, id) => {
    if (!arrayCart[0]) {
      newProduct.quantity = 1;
      return setArrayCart([newProduct, ...arrayCart]);
    } else {
      const found = arrayCart.find((Product) => Product.id === id);
      if (!found) {
        newProduct.quantity = 1;
        setArrayCart([newProduct, ...arrayCart]);
      } else {
        let newProductIndex = arrayCart.findIndex(
          (Product) => Product.id === id
        );
        const newArrayCart = [...arrayCart];
        newArrayCart[newProductIndex].quantity++;
        setArrayCart(newArrayCart);
      }
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

// let newArrayCart = arrayCart.map((product) => {
//   if (product.id === id) {
//     console.log("123");
//     product.quantity = product.quantity + 1;
//     return product;
//   } else {
//     console.log("abc");
//     return product;
//   }
// });
// console.log(newArrayCart);
// setArrayCart(newArrayCart);
