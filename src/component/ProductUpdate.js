import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import DataContext from "./DataContext";
import FormProduct from "./FormProduct";
import Products from "./Products";

const ProductUpdate = () => {
  const [productId, setProductId] = useState(0);
  const [productValue, setProductValue] = useState(0);
  const dataContext = useContext(DataContext);
  const changeData = dataContext.changeData;
  const data = dataContext.data;
  const arrayProdeucts = dataContext.data.arrayProdeucts;

  const onFinish = async (values) => {
    await axios.put("http://localhost:8000/products/" + productId, values);
    await axios.get("http://localhost:8000/products").then((res) => {
      changeData({
        ...data,
        arrayProdeucts: res.data,
      });
    });
    setProductId(0);
  };
  const gigi = async (id) => {
    await setProductValue(arrayProdeucts.find((product) => product.id === id));
    setProductId(id);
  };

  const pageVieww = (productId) => {
    if (productId > 0) {
      return (
        <>
          <FormProduct functionParent={onFinish} defaultValue={productValue} />
          <button onClick={() => setProductId(0)}>חזור לרישמת המוצרים</button>
        </>
      );
    } else {
      return (
        <>
          <h5>Click Product to change it</h5>
          <Products functionParent={gigi} />
        </>
      );
    }
  };

  return (
    <div className="products">
      <div>
        <h2>Product update</h2>
      </div>
      {pageVieww(productId)}
    </div>
  );
};
export default ProductUpdate;
