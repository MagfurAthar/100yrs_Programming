// const ErrorMsg = () => {
//   let foodItems = ["Biryani", "Pulao", "Veg-Chiken", "Veg-Biryani", "Salad"];
//   return <>{foodItems.length === 0 && <h3>I am still hungry...</h3>}</>;
// };

// export default ErrorMsg;

// or------------------------------------------------------

const ErrorMsg = ({ items }) => {
  // let foodItems = ["Biryani", "Pulao", "Veg-Chiken", "Veg-Biryani", "Salad"];
  return <>{items.length === 0 && <h3>I am still hungry...</h3>}</>;
};

export default ErrorMsg;
