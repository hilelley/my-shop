import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./header";
import Products from "./products";
import ProductPag from "./productPag";
import "./main.css";

const Myshop = () => {
  const [arrayProdeucts, setArrayProdeucts] = useState([]);
  useEffect(() => {
    axios
      .get("https://quilt-flax-chemistry.glitch.me/products")
      .then((res) => setArrayProdeucts(res.data));
  }, []);

  return (
    <Router>
      <div className="App">
        {console.log("בןצע רינדור של my shop")}
        <div>App</div>
        <Switch>
          <Route path="/product/:idParam">
            <ProductPag />
          </Route>
          <Route exact path="/">
            <Header />
            {arrayProdeucts[0] && <Products array={arrayProdeucts} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Myshop;
