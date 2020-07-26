import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPag from "./productPag";

import "./main.css";
import axios from "axios";
import Header from "./header";
import Products from "./products";

const Myshop = () => {
  const [arrayProdeucts, setArrayProdeucts] = useState([]);
  useEffect(() => {
    axios
      .get("https://quilt-flax-chemistry.glitch.me/products")
      .then((res) => setArrayProdeucts(res.data));
  }, []);

  return (
    <Router>
      <Link to={"/"}>Home</Link>
      <div className="App">
        {console.log("בןצע רינדור של my shop")}
        <div>App</div>
        <Header />
        {arrayProdeucts[0] && <Products array={arrayProdeucts} />}
      </div>

      {/* <Switch>
        <Route path="/:productId">
          <Header />
        </Route>
        <Route path="/">
          <Header />
        </Route>
        ד
      </Switch> */}
    </Router>
  );
};
export default Myshop;
