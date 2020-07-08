import React, { Component } from "react";
import "./main.css";
import Header from "./header";
import Products from "./products";
class Myshop extends Component {
  render() {
    return (
      <div className="App">
        App
        <Header />
        <Products />
      </div>
    );
  }
}
export default Myshop;
