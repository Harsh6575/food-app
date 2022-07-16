import React,{ useContext } from 'react';

import MealItemsForm from './MealItemsForm';
import CartContext from '../../../store/Cart-context';
import './MealItems.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className='meal'>
      <div>
        <h3>{props.name}</h3>
        <div className='description'>{props.description}</div>
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