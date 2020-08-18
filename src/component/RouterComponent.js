import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Crat from "./Cart";
import HomePage from "./HomePage";
import AddingProduct from "./AddingProduct";
import ProductUpdate from "./ProductUpdate";
import DeleteProduct from "./DeleteProducts";
import MenuShop from "./MenuShop ";
import ButtonHomePage from "./ButtonHomePage";
import ProductPag from "../Pages/ProductPag";

const RouterComponent = () => (
  <Router>
    <div className="myShop">
      <div>App</div>
      <ButtonHomePage />
      <Switch>
        <Route exact path="/">
          <Header />
          <MenuShop />
          <Crat />
          <HomePage />
        </Route>
        <Route exact path="/addingProduct">
          <Header />
          <MenuShop />
          <AddingProduct />
        </Route>
        <Route exact path="/productUpdate">
          <Header />
          <MenuShop />
          <ProductUpdate />
        </Route>
        <Route exact path="/deleteProduct">
          <Header />
          <MenuShop />
          <DeleteProduct />
        </Route>
        <Route path="/product/:idParam">
          <ProductPag />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default RouterComponent;
// המשימה של החנות שלי הוא כל נושא הרטינג
