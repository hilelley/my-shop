import React from "react";
import Myshop from "./component/myshop";

const App = () => (
  <div>
    {(window.document.title = "שדרוג עגלת מוצרים")}
    <Myshop />
  </div>
);
export default App;
