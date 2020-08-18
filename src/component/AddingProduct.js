import React, { useContext, useState } from "react";
import axios from "axios";
import DataContext from "./DataContext";
import FormProduct from "./FormProduct";

const AddingProduct = () => {
  const dataContext = useContext(DataContext);
  const changeData = dataContext.changeData;
  const data = dataContext.data;

  const onFinish = async (values) => {
    await axios.put("http://localhost:8000/products/add", values);
    axios.get("http://localhost:8000/products").then((res) => {
      changeData({
        ...data,
        arrayProdeucts: res.data,
      });
    });
  };

  return (
    <div className="products">
      <div>Adding Product</div>
      <FormProduct functionParent={onFinish} />
    </div>
  );
};
export default AddingProduct;
