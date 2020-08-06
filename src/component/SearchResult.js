import React, { useContext, useEffect, useState } from "react";
import DataContext from "./DataContext";
import Product from "./Product";

const SearchResult = () => {
  const arraySearchResultContext = useContext(DataContext).data
    .arraySearchResult;
  const [arraySearchResult, setArraySearchResult] = useState(
    arraySearchResultContext
  );
  useEffect(() => setArraySearchResult(arraySearchResultContext), [
    arraySearchResultContext,
  ]);
  return (
    <div className="products">
      <div>Products</div>
      {arraySearchResult[0] && arraySearchResult[0].err ? (
        <div>
          <h1>{arraySearchResult[0].err}</h1>
        </div>
      ) : (
        arraySearchResult.map((value, index) => (
          <div key={value.id}>
            <Product id={value.id} />
          </div>
        ))
      )}
    </div>
  );
};
export default SearchResult;
