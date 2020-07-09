import React, { Component } from "react";
import Product from "./product";
import Count from "./count";
import MapProducts from "./mapProducts";
class Prodeucts extends Component {
  state = {
    MapProducts: MapProducts(),
    count: 0,
  };
  plusCount = () => this.setState({ count: this.state.count + 1 });
  minusCount = () => this.setState({ count: this.state.count - 1 });
  render() {
    const MapProds = this.state.MapProducts;
    const count = this.state.count;
    return (
      <div className="Products">
        Products
        <div className="divCount">
          <Count count={count} />
        </div>
        <div className="divProducts">
          {[...MapProds].map((value) => (
            <Product
              image={value[1].image}
              title={value[1].title}
              quantity={value[1].quantity}
              plusCount={this.plusCount}
              minusCount={this.minusCount}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Prodeucts;
