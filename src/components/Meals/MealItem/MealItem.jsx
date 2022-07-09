import React from "react";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";

import "./mealItem.css";
import CartContext from "../../../store/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) =>{
    cartCtx.addItem({
      id: props.id,
      name:props.name,
      amount,
      price:props.price
    })
  } 
  return (
    <li className="meal">
      <div >
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart = {addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
