import React, { Component } from "react";

class Prodeuct extends Component {
  render() {
    return (
      <div className="Prodeuct">
        Prodeuct:
        <div> {this.props.name}</div>
      </div>
    );
  }
}
export default Prodeuct;
