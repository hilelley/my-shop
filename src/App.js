import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataProvider } from "./component/DataContext";
import RouterComponent from "./component/RouterComponent";
import "./component/main.css";

const App = () => {
  window.document.title = "my best shop";
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
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
        {data.arrayProdeucts && <RouterComponent />}
      </DataProvider>
    </div>
  );
};
export default App;
// המשימה של אאפ היא לקבל את הדאטה ולעדכן את הקונטקסט ורק אז לרנדר את החנות שלי עם הדאטה של קונטקסט
