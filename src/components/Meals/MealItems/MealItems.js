import React,{ useContext } from 'react';

import MealItemsForm from './MealItemsForm';
import CartContext from '../../../store/Cart-context';
import './MealItems.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext); //get cart context

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    }); //add item to cart
  }; //add to cart handler

  return (
    <li className='meal'>
      <div>
        <h3>{props.name}</h3>
        <div className='m-price'>₹{props.price}</div>
        <img src={props.imageUrl} alt='unsplash'/>
      </div>
      <div>
        <MealItemsForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;