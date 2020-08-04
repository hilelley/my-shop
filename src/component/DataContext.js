import React from "react";
const DataContext = React.createContext({});
export const DataProvider = DataContext.Provider;
export const DataConsumer = DataContext.Consumer;
export default DataContext;

// import React from "react";
// const DataContext = React.createContext({
//   data: {},
//   changeData: (value) => console.log(value),
// });
// export const DataProvider = DataContext.Provider;
// export const DataConsumer = DataContext.Consumer;
// export const data = DataContext.data;
// export const changeData = DataContext.changeData;
// export default DataContext;
