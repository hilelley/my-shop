import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import ProductPag from "./ProductPag";
import DataContext from "./DataContext";
import "./main.css";

const Myshop = () => {
  const data = useContext(DataContext).data;
  const changeData = useContext(DataContext).changeData;

  return (
    <Router>
      <div className="myShop">
        {console.log("בןצע רינדור של my shop")}
        <div>App</div>
        <Switch>
          <Route path="/product/:idParam">
            <ProductPag />
          </Route>
          <Route exact path="/">
            <Header />
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Myshop;
