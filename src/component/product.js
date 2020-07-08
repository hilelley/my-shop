import React, { Component } from "react";

class Prodeuct extends Component {
  state = {
    num: this.props.quantity,
  };

  plus = () => {
    if (this.state.num) {
      this.setState(() => ({ num: this.state.num - 1 }));
    } else {
      this.setState(() => ({ num: " out of stock" }));
    }
  };
  minus = () => {
    if (this.props.quantity) this.setState(() => ({ num: this.state.num + 1 }));
  };
  render() {
    return (
      <div className="Prodeuct">
        <img src={this.props.src}></img>
        <br></br>

        <div> {this.props.title}</div>
        <br></br>
        <br></br>
        <div>Quantity:{this.state.num}</div>
        <br></br>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}
export default Prodeuct;
