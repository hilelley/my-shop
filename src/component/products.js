import React, { useState, useEffect } from "react";
import Product from "./product";
import Crat from "./cart";

const Prodeucts = (props) => {
  const [initialArrayProdeucts, setInitialArrayProdeucts] = useState(
    props.array
  );
  const [arrayProdeucts, setArrayProdeucts] = useState(props.array);
  const [arrayCart, setArrayCart] = useState([]);
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
  const updateArrayCartAndQuantityProdeuct = (newList, productOnRemovId) => {
    // // console.log("מערך ראשוני" + initialArrayProdeucts);
    // let initialProdeucts = initialArrayProdeucts.find(
    //   (Product) => Product.id === productOnRemovId
    // );
    // // console.log("פרודוקט ראשוני" + initialProdeucts);
    // let initialQuantityProdeucts = initialProdeucts.quantity;
    // // console.log("כמות שלו ראשונית" + initialQuantityProdeucts);
    // let newProductIndex = arrayProdeucts.findIndex(
    //   (Product) => Product.id === productOnRemovId
    // );
    // const newArrayProdeucts = [...arrayProdeucts];
    // newArrayProdeucts[newProductIndex].quantity = initialQuantityProdeucts;
    // // console.log(newArrayProdeucts);
    // setArrayProdeucts(newArrayProdeucts);
    setArrayCart(newList);
  };

  return (
    <React.Fragment>
      {console.log("בוצע רינדור של products")}
      <Crat
        array={arrayCart}
        updateCartList={updateArrayCartAndQuantityProdeuct}
      />
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
