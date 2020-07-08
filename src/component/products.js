import React, { Component } from "react";
import Prodeuct from "./product";
import Cont from "./cont";
class Prodeucts extends Component {
  state = {
    num: this.props.quantity,
  };

  render() {
    return (
      <div className="Prodeucts">
        <div>
          <Cont />
        </div>
        <Prodeuct
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
        />
      </div>
    );
  }
}
export default Prodeucts;
