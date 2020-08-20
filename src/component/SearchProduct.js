import React, { useContext } from "react";
import DataContext from "./DataContext";
import axios from "axios";

import { Input } from "antd";

const SearchProduct = ({ changerSearchMode }) => {
  const dataContext = useContext(DataContext);
  const changeData = dataContext.changeData;
  const data = dataContext.data;
  let arraySearchResult = dataContext.data.arraySearchResult;
  const { Search } = Input;
  const onSearch = async (value) => {
    if (value !== "") {
      await axios
        .get(`http://localhost:8000/products?search=${value}`)
        .then((res) => {
          arraySearchResult = res.data;
          console.log(res.data);
          changeData({
            ...data,
            arraySearchResult: arraySearchResult,
          });
        });
      changerSearchMode(true);
    }
  };

  const ShowAll = () => changerSearchMode(false);

  return (
    <div className="search">
      <Search
        placeholder={"input search text"}
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <button onClick={ShowAll}>Show all</button>
    </div>
  );
};
export default SearchProduct;
// הרעיון של הקומפוננת הזאת היא להיות באנר של כל הסינונים מחיפוש ועד הצגת מוצרים לפי נושאים כרגע היא רק חיפוש
