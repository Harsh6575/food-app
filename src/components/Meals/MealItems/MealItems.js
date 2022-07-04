import React from "react";
import "./MealItems.css";
import MealItemsForm from "./MealItemsForm";

const MealItems = (props) => {

  return (
    <li className="meal">
      <div>
        <h3>{props.meal.name}</h3>
        <div className="description">{props.meal.description}</div>
        <div className="price">{props.meal.price}</div>
        <img src={props.meal.image} alt='food'/>
      </div>
      <div>
        <MealItemsForm id={props.id}/>
      </div>
    </li>
  );
};

export default MealItems;
