import React, { useContext, useState } from "react";
import DataContext from "./DataContext";
import Product from "./Product";
import SearchProduct from "./SearchProduct";

const Prodeucts = () => {
  const arrayProdeucts = useContext(DataContext).data.arrayProdeucts;
  const arraySearchResult = useContext(DataContext).data.arraySearchResult;
  let [searchMode, setSearchMode] = useState(false);

  const changeSearchMode = (SearchModeTrue) => {
    if (SearchModeTrue) {
      setSearchMode(true);
    } else {
      setSearchMode(false);
    }
  };
  return (
    <div className="products">
      <div>Products</div>
      <SearchProduct changerSearchMode={changeSearchMode} />
      {!searchMode &&
        arrayProdeucts.map((value) => (
          <div key={value.id}>
            <Product id={value.id} />
          </div>
        ))}
      {searchMode &&
        (arraySearchResult[0] ? (
          arraySearchResult.map((value) => (
            <div key={value.id}>
              <Product id={value.id} />
            </div>
          ))
        ) : (
          <div>
            <h1>Sorry not what you are looking for</h1>
          </div>
        ))}
    </div>
  );
};
export default Prodeucts;

// בתוך פרודקס יש 2 מערכים אחד של המוצרים ואחד של תוצאת החיפוש וגם את קומפוננטת החיפוש והמשימה שלו זה להציג כל פעם את המערך הרלווטי
// כל פעם ע"פ המשתנה - מצב חיפוש- שקומפוננתת החיפוש משנה אותו לטרו או פולס
// לכל מוצר נותנים רק ת.ז ובקומפוננת של המוצר עצמו הוא מתרגם את זה לכל האובייקט של המוצר מתוך הדאתה שבקונטקסט וככה אפשר לעדכן את כל הפרטים
//  של המוצרים בצורה דינמית מול הקונטקסט מה שלא היה אפשר אם הייתי מעביר לו את האינדקס במקום הת.ז
