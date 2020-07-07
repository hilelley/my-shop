import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./main.css";
import Header from "./header";
import Prodeuct from "./product";

class App extends Component {
  render() {
    return (
      <div className="App">
        App <Header name="names" />
        <Prodeuct name="shoki" />
        <Prodeuct name="boohi" />
        <Prodeuct name="mooki" />
        <Prodeuct name="david" />
        <Prodeuct name="shoook" />
        <Prodeuct name="mizi" />
      </div>
    );
  }
}
export default App;
