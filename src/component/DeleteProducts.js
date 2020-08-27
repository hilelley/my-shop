import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import DataContext from "./DataContext";
import FormProduct from "./FormProduct";
import Products from "./Products";
import Product from "./Product";

const DeleteProducts = () => {
  const [productId, setProductId] = useState(0);
  const [productValue, setProductValue] = useState(0);
  const dataContext = useContext(DataContext);
  const changeData = dataContext.changeData;
  const data = dataContext.data;
  const arrayProdeucts = dataContext.data.arrayProdeucts;
  const functionParent = () => {
    let FunctionParent = "nothing";
  };

  const onFinish = async (values) => {
    await axios.delete("http://localhost:8000/products/" + productId);
    setProductId(0);
    axios.get("http://localhost:8000/products").then((res) => {
      changeData({
        ...data,
        arrayProdeucts: res.data,
      });
    });
  };
  const gigi = async (id) => {
    await setProductValue(arrayProdeucts.find((product) => product.id === id));
    setProductId(id);
  };

  const pageVieww = (productId) => {
    if (productId > 0) {
      return (
        <>
          <h5>Are you sure you want to delete this product?</h5>
          <div key={productId}>
            <Product id={productId} functionParent={functionParent} />
          </div>
          <button onClick={onFinish}>delete product</button>
          <br></br>
          <button onClick={() => setProductId(0)}>חזור לרישמת המוצרים</button>
        </>
      );
    } else {
      return (
        <>
          <h5>Click Product to delete it</h5>
          <Products functionParent={gigi} />
        </>
      );
    }
  };

  return (
    <div className="products">
      <div>
        <h2>Delete Products</h2>
      </div>
      {pageVieww(productId)}
    </div>
  );
};
export default DeleteProducts;
