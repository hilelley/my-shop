import React, { useContext } from "react";
import DataContext from "./DataContext";
import Product from "./Product";
import Crat from "./Cart";

const Prodeucts = () => {
  const arrayProdeucts = useContext(DataContext).data.arrayProdeucts;

  return (
    <React.Fragment>
      <Crat />
      <div className="products">
        <div>Products</div>
        {arrayProdeucts.map((value, index) => (
          <div key={value.id}>
            <Product index={index} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default Prodeucts;
