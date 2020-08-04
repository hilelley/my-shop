import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataProvider } from "./component/DataContext";
import Myshop from "./component/Myshop";

const App = () => {
  window.document.title = "my best shop";
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      console.log(res.data);
      setData({ arrayProdeucts: res.data, arrayCart: [] });
    });
  }, []);
  const providerOptions = {
    data: data,
    changeData: (value) => setData(value),
  };
  return (
    <div>
      <DataProvider value={providerOptions}>
        {data.arrayProdeucts && <Myshop />}
      </DataProvider>
    </div>
  );
};
export default App;
