import style from "./item.module.css";
// const Item = (props) => {
//   let { foodItem } = props;
//   return <li className="list-group-item">{foodItem}</li>;
// };

// export default Item;

// or----------------------------------------------------

const Item = ({ foodItem }) => {
  // let { foodItem } = props;
  return (
    <li className="list-group-item my-span">
      <span className={`${style["my-span"]}`}>{foodItem}</span>
    </li>
  );
};

export default Item;
