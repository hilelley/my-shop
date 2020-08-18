import React from "react";
import Products from "./Products";

const HomePage = () => {
  const functionParent = () => {
    let FunctionParent = "nothing";
  };
  return (
    <div className="products">
      <div>Products</div>
      <Products functionParent={functionParent} />
    </div>
  );
};
export default HomePage;

// בתוך פרודקס יש 2 מערכים אחד של המוצרים ואחד של תוצאת החיפוש וגם את קומפוננטת החיפוש והמשימה שלו זה להציג כל פעם את המערך הרלווטי
// כל פעם ע"פ המשתנה - מצב חיפוש- שקומפוננתת החיפוש משנה אותו לטרו או פולס
// לכל מוצר נותנים רק ת.ז ובקומפוננת של המוצר עצמו הוא מתרגם את זה לכל האובייקט של המוצר מתוך הדאתה שבקונטקסט וככה אפשר לעדכן את כל הפרטים
//  של המוצרים בצורה דינמית מול הקונטקסט מה שלא היה אפשר אם הייתי מעביר לו את האינדקס במקום הת.ז
