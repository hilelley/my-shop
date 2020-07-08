import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./main.css";
import Header from "./component/header";
import Products from "./component/products";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        App
        <Header name="names" />
        <Products />
      </div>
    );
  }
}
export default App;
