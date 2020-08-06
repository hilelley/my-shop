import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Crat from "./Cart";
import Products from "./Products";
import ProductPag from "../Pages/ProductPag";
import "./main.css";

const Myshop = () => (
  <Router>
    <div className="myShop">
      {console.log("בןצע רינדור של my shop")}
      <div>App</div>
      <Switch>
        <Route exact path="/">
          <Header />
          <Crat />
          <Products />
        </Route>
        <Route path="/product/:idParam">
          <ProductPag />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Myshop;
// המשימה של החנות שלי הוא כל נושא הרטינג
