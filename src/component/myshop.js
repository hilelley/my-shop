import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Crat from "./Cart";
import Products from "./Products";
import AddingProduct from "./AddingProduct";
import ProductUpdate from "./ProductUpdate";
import DeleteProduct from "./DeleteProducts";
import MenuShop from "./MenuShop ";
import ProductPag from "../Pages/ProductPag";

const MyShop = () => (
  <Router>
    <div className="myShop">
      <div>App</div>
      <Switch>
        <Route exact path="/">
          <Header />
          <MenuShop />
          <Crat />
          <Products />
        </Route>
        <Route exact path="/addingProduct">
          <Header />
          <MenuShop />
          <Crat />
          <AddingProduct />
        </Route>
        <Route exact path="/productUpdate">
          <Header />
          <MenuShop />
          <Crat />
          <ProductUpdate />
        </Route>
        <Route exact path="/deleteProduct">
          <Header />
          <MenuShop />
          <Crat />
          <DeleteProduct />
        </Route>
        <Route path="/product/:idParam">
          <ProductPag />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default MyShop;
// המשימה של החנות שלי הוא כל נושא הרטינג
