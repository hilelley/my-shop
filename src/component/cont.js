import React, { Component } from "react";

class Cont extends Component {
  render() {
    return (
      <div className="Cont">
        cont:
        {this.props.num}
      </div>
    );
  }
}
export default Cont;
