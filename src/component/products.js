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
  minusCount = () => {
    if (this.state.count) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    const Prod = this.state.MapProducts;
    const count = this.state.count;
    return (
      <div className="Products">
        Products
        <div className="divCount">
          <Count count={count} />
        </div>
        <div className="divProducts">
          {[...Prod].map((value) => (
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
{
  /* <Prodeuct
            src="https://www.100dek.co.il/imgs/79/product_7919_9663_200x200.jpg"
            quantity={10}
            title="Pencil"
          />
          <Prodeuct
            src="https://www.graffiti-online.co.il/pub/media/catalog/product/cache/a2cb92ff63f03fbf0d77807d23514231/1/1/11100643_-_copy.jpg"
            quantity={5}
            title="Pen"
          />
          <Prodeuct
            src="https://res.cloudinary.com/misradia/image/upload/c_scale,f_auto,h_440/images/items/7203/original-38457.JPEG"
            quantity={15}
            title="Notebook"
          />
          <Prodeuct
            src="https://www.nitsachti-vanatseach.online/wp-content/uploads/2019/05/%D7%94%D7%93%D7%9E%D7%99%D7%94-%D7%A1%D7%A4%D7%A8.jpg"
            quantity={20}
            title="Book"
          />
          <Prodeuct
            src="https://twiner.co.il/wp-content/uploads/2019/03/%D7%9E%D7%97%D7%A7-%D7%A9%D7%A8%D7%98%D7%95%D7%98-600x401.jpg"
            quantity={25}
            title="Eraser"
          />
          <Prodeuct
            src="https://cdn.shopify.com/s/files/1/0080/6119/0244/products/3066095b4daef697cf654b6150049ac5_400x.jpg?v=1549551531"
            quantity={30}
            title="Sharpener"
          /> */
}
