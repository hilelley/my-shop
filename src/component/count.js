import React, { Component } from "react";

class Count extends Component {
  render() {
    return (
      <div className="Count">
        Crat <br></br>
        Count:
        {this.props.count}
      </div>
    );
  }
}
export default Count;
