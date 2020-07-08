import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./main.css";
import Header from "./header";
import Prodeuct from "./product";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        App
        <Header name="names" />
        <Prodeuct quantity={10} title="Pencil," />
        <Prodeuct quantity={5} title="Pen" />
        <Prodeuct quantity={15} title="Notebook" />
        <Prodeuct quantity={20} title="Book" />
        <Prodeuct quantity={25} title="Eraser" />
        <Prodeuct quantity={30} title="Sharpener" />
      </div>
    );
  }
}
export default App;
