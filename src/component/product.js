import React, { Component } from "react";

class Prodeuct extends Component {
  state = {
    quantity: this.props.quantity,
    plusCount: this.props.plusCount,
    minusCount: this.props.minusCount,
  };

  plus = () => {
    if (this.state.quantity) {
      this.state.plusCount();
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
  minus = () => {
    if (this.state.quantity < this.props.quantity) {
      this.props.minusCount();
      this.setState({ quantity: this.state.quantity + 1 });
    }
  };
  render() {
    return (
      <div className="Product">
        <img src={this.props.image}></img>
        <br></br>

        <div> {this.props.title}</div>
        <br></br>
        <br></br>
        <div>Quantity:{this.state.quantity}</div>
        <br></br>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}
export default Prodeuct;
