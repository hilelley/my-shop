import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";
const ProductPag = (props) => {
  const [productPag, setProductPag] = useState([]);
  const { idParam } = useParams();
  useEffect(() => {
    axios
      .get("https://quilt-flax-chemistry.glitch.me/products/" + idParam)
      .then((res) => {
        setProductPag(res.data);
      });
  }, []);
  return (
    <div className="productPag">
      <Link to={"/"}>Home</Link>
      <div className="productPagTitle">{productPag.title}</div>
      <img src={productPag.image} alt="A little patience and it will open" />
      <div className="productPagQuantity">Quantity:{productPag.quantity}</div>
      <h1>description:</h1>
      <p>{productPag.description}</p>
    </div>
  );
};

export default ProductPag;
