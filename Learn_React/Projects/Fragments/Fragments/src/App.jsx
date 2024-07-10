// import React from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import "./App.css";

function App() {
  let foodItems = ["Biryani", "Pulao", "Veg-Chiken", "Veg-Biryani", "Salad"];
  // let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h1>I am still hungry...</h1>;
  // }

  // or------
  // let emptyMessage =
  //   foodItems.length === 0 ? (
  //     <h3 className="lead">I am still hungry...</h3>
  //   ) : null;

  return (
    // <React.Fragment>
    <>
      <h1 className="heading">Food List</h1>

      {/* {foodItems.length === 0 ? <h1>I am still hungry..</h1> : null} */}
      {/* {emptyMessage} */}
      {/* {foodItems.length === 0 && <h3>I am still hungry...</h3>} */}
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
      {/*
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    */}
    </>
    // </React.Fragment>
  );
}

export default App;
