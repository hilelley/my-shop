import React from "react";
import Myshop from "./component/myshop";

const App = () => (
  <div>
    {(window.document.title = "my best shop")}
    <Myshop />
  </div>
);
export default App;
